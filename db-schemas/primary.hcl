table "company" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "geography" {
    null = true
    type = character_varying(120)
  }
  column "sector" {
    null = true
    type = character_varying(120)
  }
  primary_key {
    columns = [column.id]
  }
  index "company_name_key" {
    unique  = true
    columns = [column.name]
  }
}

table "company_report" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "fund_report_id" {
    null = false
    type = uuid
  }
  column "company_id" {
    null = true
    type = uuid
  }
  column "report_date" {
    null = false
    type = date
  }
  column "investment_date" {
    null = true
    type = date
  }
  column "invested_capital" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "enterprise_value" {
    null = true
    type = numeric(20,2)
  }
  column "equity_value" {
    null = true
    type = numeric(20,2)
  }
  column "debt" {
    null = true
    type = numeric(20,2)
  }
  column "valuation_basis" {
    null = true
    type = character_varying(20)
  }
  column "valuation_multiple" {
    null = true
    type = numeric(12,4)
  }
  column "revenue" {
    null = true
    type = numeric(20,2)
  }
  column "ebitda" {
    null = true
    type = numeric(20,2)
  }
  column "realized_value" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "unrealized_value" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "total_value" {
    null = true
    type = numeric(20,2)
  }
  column "thesis_commentary" {
    null = true
    type = text
  }
  column "irr" {
    null = true
    type = numeric(7,4)
  }
  column "status" {
    null = true
    type = character_varying(20)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "company_report_company_id_fkey" {
    columns     = [column.company_id]
    ref_columns = [table.company.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "company_report_fund_report_id_fkey" {
    columns     = [column.fund_report_id]
    ref_columns = [table.fund_report.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  index "company_report_company_idx" {
    columns = [column.company_id]
  }
  index "company_report_date_idx" {
    columns = [column.report_date]
  }
  index "company_report_fr_idx" {
    columns = [column.fund_report_id]
  }
  check "company_report_status_check" {
    expr = "((status)::text = ANY ((ARRAY['Realized'::character varying, 'Unrealized'::character varying])::text[]))"
  }
  check "company_report_valuation_basis_check" {
    expr = "((valuation_basis)::text = ANY ((ARRAY['EBITDA'::character varying, 'Revenue'::character varying])::text[]))"
  }
  unique "uq_company_report_per_period" {
    columns = [column.company_id, column.report_date]
  }
}

table "fund" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "vintage" {
    null = true
    type = integer
  }
  primary_key {
    columns = [column.id]
  }
  index "fund_name_key" {
    unique  = true
    columns = [column.name]
  }
}
table "fund_report" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "organization_id" {
    null = false
    type = uuid
  }
  column "fund_id" {
    null = true
    type = uuid
  }
  column "fund_manager_id" {
    null = true
    type = uuid
  }
  column "report_date" {
    null = false
    type = date
  }
  column "fund_size" {
    null = true
    type = numeric(20,2)
  }
  column "num_investments" {
    null    = true
    type    = integer
    default = 0
  }
  column "capital_called" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "unrealized_value" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "realized_value" {
    null    = true
    type    = numeric(20,2)
    default = 0
  }
  column "total_value" {
    null = true
    type = numeric(20,2)
  }
  column "moic" {
    null = true
    type = numeric(20,6)
  }
  column "net_irr" {
    null = true
    type = numeric(7,4)
  }
  column "dpi" {
    null = true
    type = numeric(20,6)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "fund_report_fund_id_fkey" {
    columns     = [column.fund_id]
    ref_columns = [table.fund.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "fund_report_organization_id_fkey" {
    columns     = [column.organization_id]
    ref_columns = [table.organizations.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "fund_report_fund_manager_id_fkey" {
    columns     = [column.fund_manager_id]
    ref_columns = [table.fund_manager.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  index "fund_report_date_idx" {
    columns = [column.report_date]
  }
  index "fund_report_fund_idx" {
    columns = [column.fund_id]
  }
  index "fund_report_org_idx" {
    columns = [column.organization_id]
  }
  index "fund_report_manager_idx" {
    columns = [column.fund_manager_id]
  }
  unique "uq_fund_report_per_period" {
    columns = [column.fund_id, column.report_date]
  }
}
table "organizations" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  primary_key {
    columns = [column.id]
  }
  index "organizations_name_key" {
    unique  = true
    columns = [column.name]
  }
}

schema "public" {
  comment = "standard public schema"
}

table "fund_manager" {
  schema = schema.public
  column "id" {
    null    = false
    type    = uuid
    default = sql("gen_random_uuid()")
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "created_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  column "updated_at" {
    null    = true
    type    = timestamptz
    default = sql("now()")
  }
  primary_key {
    columns = [column.id]
  }
  index "fund_manager_name_name_key" {
    unique  = true
    columns = [column.name]
  }
}
