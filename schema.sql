-- Enable extensions
CREATE EXTENSION IF NOT EXISTS pgcrypto; -- for gen_random_uuid()

-- =========================================================
-- Utility: updated_at auto-touch trigger
-- =========================================================
CREATE OR REPLACE FUNCTION set_updated_at()
    RETURNS trigger
    LANGUAGE plpgsql AS
$$
BEGIN
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$;

-- =========================================================
-- Organizations
-- =========================================================
CREATE TABLE IF NOT EXISTS organizations
(
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name       varchar(255) NOT NULL,
    created_at timestamptz      DEFAULT NOW(),
    updated_at timestamptz      DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS organizations_name_key ON organizations (name);

CREATE TRIGGER trg_organizations_updated_at
    BEFORE UPDATE
    ON organizations
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- =========================================================
-- Master: Fund
-- =========================================================
CREATE TABLE IF NOT EXISTS fund
(
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name       varchar(255) NOT NULL,
    vintage    integer,
    created_at timestamptz      DEFAULT NOW(),
    updated_at timestamptz      DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS fund_name_key ON fund (name);

CREATE TRIGGER trg_fund_updated_at
    BEFORE UPDATE
    ON fund
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- =========================================================
-- Master: Company
-- =========================================================
CREATE TABLE IF NOT EXISTS company
(
    id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name       varchar(255) NOT NULL,
    created_at timestamptz      DEFAULT NOW(),
    updated_at timestamptz      DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS company_name_key ON company (name);

CREATE TRIGGER trg_company_updated_at
    BEFORE UPDATE
    ON company
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- =========================================================
-- Fund Report
-- =========================================================
CREATE TABLE IF NOT EXISTS fund_report
(
    id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id  uuid NOT NULL REFERENCES organizations (id) ON DELETE CASCADE,
    fund_id          uuid REFERENCES fund (id) ON DELETE SET NULL,
    report_date      date NOT NULL,
    fund_vintage     integer,
    fund_size        numeric(20, 2),
    num_investments  integer          DEFAULT 0,
    capital_called   numeric(20, 2)   DEFAULT 0,
    unrealized_value numeric(20, 2)   DEFAULT 0,
    realized_value   numeric(20, 2)   DEFAULT 0,
    total_value      numeric(20, 2), -- app will populate
    moic             numeric(20, 6), -- app will populate
    net_irr          numeric(7, 4),
    dpi              numeric(20, 6), -- app will populate
    created_at       timestamptz      DEFAULT NOW(),
    updated_at       timestamptz      DEFAULT NOW(),
    CONSTRAINT uq_fund_report_per_period UNIQUE (fund_id, report_date)
);

CREATE INDEX IF NOT EXISTS fund_report_org_idx ON fund_report (organization_id);
CREATE INDEX IF NOT EXISTS fund_report_fund_idx ON fund_report (fund_id);
CREATE INDEX IF NOT EXISTS fund_report_date_idx ON fund_report (report_date);

CREATE TRIGGER trg_fund_report_updated_at
    BEFORE UPDATE
    ON fund_report
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- =========================================================
-- Company Report
-- =========================================================
CREATE TABLE IF NOT EXISTS company_report
(
    id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    fund_report_id     uuid NOT NULL REFERENCES fund_report (id) ON DELETE CASCADE,
    company_id         uuid REFERENCES company (id) ON DELETE SET NULL,
    report_date        date NOT NULL,
    investment_date    date,
    invested_capital   numeric(20, 2)   DEFAULT 0,
    geography          varchar(120),
    sector             varchar(120),
    enterprise_value   numeric(20, 2),
    equity_value       numeric(20, 2),
    debt               numeric(20, 2),
    valuation_basis    varchar(20) CHECK (valuation_basis IN ('EBITDA', 'Revenue')),
    valuation_multiple numeric(12, 4),
    revenue            numeric(20, 2),
    ebitda             numeric(20, 2),
    realized_value     numeric(20, 2)   DEFAULT 0,
    unrealized_value   numeric(20, 2)   DEFAULT 0,
    total_value        numeric(20, 2), -- app will populate
    thesis_commentary  text,
    irr                numeric(7, 4),
    status             varchar(20) CHECK (status IN ('Realized', 'Unrealized')),
    created_at         timestamptz      DEFAULT NOW(),
    updated_at         timestamptz      DEFAULT NOW(),
    CONSTRAINT uq_company_report_per_period UNIQUE (company_id, report_date)
);

CREATE INDEX IF NOT EXISTS company_report_fr_idx ON company_report (fund_report_id);
CREATE INDEX IF NOT EXISTS company_report_company_idx ON company_report (company_id);
CREATE INDEX IF NOT EXISTS company_report_date_idx ON company_report (report_date);

CREATE TRIGGER trg_company_report_updated_at
    BEFORE UPDATE
    ON company_report
    FOR EACH ROW
EXECUTE FUNCTION set_updated_at();

-- =========================================================
-- Link Directus users to Organization (optional)
-- =========================================================
ALTER TABLE directus_users
    ADD COLUMN IF NOT EXISTS organization_id uuid
        REFERENCES organizations (id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS directus_users_org_idx ON directus_users (organization_id);
