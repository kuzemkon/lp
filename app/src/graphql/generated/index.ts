import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: string; output: string; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: string | number; output: string | number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Query = {
  __typename: 'Query';
  company: Array<Company>;
  company_aggregated: Array<Company_Aggregated>;
  company_by_id?: Maybe<Company>;
  company_by_version?: Maybe<Version_Company>;
  company_report: Array<Company_Report>;
  company_report_aggregated: Array<Company_Report_Aggregated>;
  company_report_by_id?: Maybe<Company_Report>;
  company_report_by_version?: Maybe<Version_Company_Report>;
  fund: Array<Fund>;
  fund_aggregated: Array<Fund_Aggregated>;
  fund_by_id?: Maybe<Fund>;
  fund_by_version?: Maybe<Version_Fund>;
  fund_manager: Array<Fund_Manager>;
  fund_manager_aggregated: Array<Fund_Manager_Aggregated>;
  fund_manager_by_id?: Maybe<Fund_Manager>;
  fund_manager_by_version?: Maybe<Version_Fund_Manager>;
  fund_report: Array<Fund_Report>;
  fund_report_aggregated: Array<Fund_Report_Aggregated>;
  fund_report_by_id?: Maybe<Fund_Report>;
  fund_report_by_version?: Maybe<Version_Fund_Report>;
  organizations: Array<Organizations>;
  organizations_aggregated: Array<Organizations_Aggregated>;
  organizations_by_id?: Maybe<Organizations>;
  organizations_by_version?: Maybe<Version_Organizations>;
};


export type QueryCompanyArgs = {
  filter?: InputMaybe<Company_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_AggregatedArgs = {
  filter?: InputMaybe<Company_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompany_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryCompany_ReportArgs = {
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Report_AggregatedArgs = {
  filter?: InputMaybe<Company_Report_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCompany_Report_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCompany_Report_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFundArgs = {
  filter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_AggregatedArgs = {
  filter?: InputMaybe<Fund_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFund_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFund_ManagerArgs = {
  filter?: InputMaybe<Fund_Manager_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_Manager_AggregatedArgs = {
  filter?: InputMaybe<Fund_Manager_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_Manager_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFund_Manager_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryFund_ReportArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_Report_AggregatedArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFund_Report_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFund_Report_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOrganizationsArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_AggregatedArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrganizations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganizations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename: 'Subscription';
  company_mutated?: Maybe<Company_Mutated>;
  company_report_mutated?: Maybe<Company_Report_Mutated>;
  fund_manager_mutated?: Maybe<Fund_Manager_Mutated>;
  fund_mutated?: Maybe<Fund_Mutated>;
  fund_report_mutated?: Maybe<Fund_Report_Mutated>;
  organizations_mutated?: Maybe<Organizations_Mutated>;
};


export type SubscriptionCompany_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionCompany_Report_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFund_Manager_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFund_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionFund_Report_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionOrganizations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Company = {
  __typename: 'company';
  company_reports?: Maybe<Array<Maybe<Company_Report>>>;
  company_reports_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  geography?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sector?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};


export type CompanyCompany_ReportsArgs = {
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Aggregated = {
  __typename: 'company_aggregated';
  count?: Maybe<Company_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Company_Aggregated_Count = {
  __typename: 'company_aggregated_count';
  company_reports?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  geography?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  sector?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

export type Company_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Filter>>>;
  company_reports?: InputMaybe<Company_Report_Quantifier_Filter>;
  company_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  geography?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  sector?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Company_Mutated = {
  __typename: 'company_mutated';
  data?: Maybe<Company>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Company_Report = {
  __typename: 'company_report';
  company_id?: Maybe<Company>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  debt?: Maybe<Scalars['Float']['output']>;
  ebitda?: Maybe<Scalars['Float']['output']>;
  enterprise_value?: Maybe<Scalars['Float']['output']>;
  equity_value?: Maybe<Scalars['Float']['output']>;
  fund_report_id?: Maybe<Fund_Report>;
  id: Scalars['ID']['output'];
  invested_capital?: Maybe<Scalars['Float']['output']>;
  investment_date?: Maybe<Scalars['Date']['output']>;
  investment_date_func?: Maybe<Date_Functions>;
  irr?: Maybe<Scalars['Float']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date: Scalars['Date']['output'];
  report_date_func?: Maybe<Date_Functions>;
  revenue?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thesis_commentary?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  valuation_basis?: Maybe<Scalars['String']['output']>;
  valuation_multiple?: Maybe<Scalars['Float']['output']>;
};


export type Company_ReportCompany_IdArgs = {
  filter?: InputMaybe<Company_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Company_ReportFund_Report_IdArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Company_Report_Aggregated = {
  __typename: 'company_report_aggregated';
  avg?: Maybe<Company_Report_Aggregated_Fields>;
  avgDistinct?: Maybe<Company_Report_Aggregated_Fields>;
  count?: Maybe<Company_Report_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Company_Report_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Company_Report_Aggregated_Fields>;
  min?: Maybe<Company_Report_Aggregated_Fields>;
  sum?: Maybe<Company_Report_Aggregated_Fields>;
  sumDistinct?: Maybe<Company_Report_Aggregated_Fields>;
};

export type Company_Report_Aggregated_Count = {
  __typename: 'company_report_aggregated_count';
  company_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  debt?: Maybe<Scalars['Int']['output']>;
  ebitda?: Maybe<Scalars['Int']['output']>;
  enterprise_value?: Maybe<Scalars['Int']['output']>;
  equity_value?: Maybe<Scalars['Int']['output']>;
  fund_report_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invested_capital?: Maybe<Scalars['Int']['output']>;
  investment_date?: Maybe<Scalars['Int']['output']>;
  irr?: Maybe<Scalars['Int']['output']>;
  realized_value?: Maybe<Scalars['Int']['output']>;
  report_date?: Maybe<Scalars['Int']['output']>;
  revenue?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  thesis_commentary?: Maybe<Scalars['Int']['output']>;
  total_value?: Maybe<Scalars['Int']['output']>;
  unrealized_value?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  valuation_basis?: Maybe<Scalars['Int']['output']>;
  valuation_multiple?: Maybe<Scalars['Int']['output']>;
};

export type Company_Report_Aggregated_Fields = {
  __typename: 'company_report_aggregated_fields';
  debt?: Maybe<Scalars['Float']['output']>;
  ebitda?: Maybe<Scalars['Float']['output']>;
  enterprise_value?: Maybe<Scalars['Float']['output']>;
  equity_value?: Maybe<Scalars['Float']['output']>;
  invested_capital?: Maybe<Scalars['Float']['output']>;
  irr?: Maybe<Scalars['Float']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  valuation_multiple?: Maybe<Scalars['Float']['output']>;
};

export type Company_Report_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Report_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Company_Report_Filter>>>;
  company_id?: InputMaybe<Company_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  debt?: InputMaybe<Number_Filter_Operators>;
  ebitda?: InputMaybe<Number_Filter_Operators>;
  enterprise_value?: InputMaybe<Number_Filter_Operators>;
  equity_value?: InputMaybe<Number_Filter_Operators>;
  fund_report_id?: InputMaybe<Fund_Report_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  invested_capital?: InputMaybe<Number_Filter_Operators>;
  investment_date?: InputMaybe<Date_Filter_Operators>;
  investment_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  irr?: InputMaybe<Number_Filter_Operators>;
  realized_value?: InputMaybe<Number_Filter_Operators>;
  report_date?: InputMaybe<Date_Filter_Operators>;
  report_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  revenue?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  thesis_commentary?: InputMaybe<String_Filter_Operators>;
  total_value?: InputMaybe<Number_Filter_Operators>;
  unrealized_value?: InputMaybe<Number_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  valuation_basis?: InputMaybe<String_Filter_Operators>;
  valuation_multiple?: InputMaybe<Number_Filter_Operators>;
};

export type Company_Report_Mutated = {
  __typename: 'company_report_mutated';
  data?: Maybe<Company_Report>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Company_Report_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Company_Report_Filter>>>;
  _none?: InputMaybe<Company_Report_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Company_Report_Filter>>>;
  _some?: InputMaybe<Company_Report_Filter>;
  company_id?: InputMaybe<Company_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  debt?: InputMaybe<Number_Filter_Operators>;
  ebitda?: InputMaybe<Number_Filter_Operators>;
  enterprise_value?: InputMaybe<Number_Filter_Operators>;
  equity_value?: InputMaybe<Number_Filter_Operators>;
  fund_report_id?: InputMaybe<Fund_Report_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  invested_capital?: InputMaybe<Number_Filter_Operators>;
  investment_date?: InputMaybe<Date_Filter_Operators>;
  investment_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  irr?: InputMaybe<Number_Filter_Operators>;
  realized_value?: InputMaybe<Number_Filter_Operators>;
  report_date?: InputMaybe<Date_Filter_Operators>;
  report_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  revenue?: InputMaybe<Number_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  thesis_commentary?: InputMaybe<String_Filter_Operators>;
  total_value?: InputMaybe<Number_Filter_Operators>;
  unrealized_value?: InputMaybe<Number_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  valuation_basis?: InputMaybe<String_Filter_Operators>;
  valuation_multiple?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename: 'date_functions';
  day?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Fund = {
  __typename: 'fund';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Array<Maybe<Fund_Report>>>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  vintage?: Maybe<Scalars['Int']['output']>;
};


export type FundFund_ReportsArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Fund_Aggregated = {
  __typename: 'fund_aggregated';
  avg?: Maybe<Fund_Aggregated_Fields>;
  avgDistinct?: Maybe<Fund_Aggregated_Fields>;
  count?: Maybe<Fund_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Fund_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Fund_Aggregated_Fields>;
  min?: Maybe<Fund_Aggregated_Fields>;
  sum?: Maybe<Fund_Aggregated_Fields>;
  sumDistinct?: Maybe<Fund_Aggregated_Fields>;
};

export type Fund_Aggregated_Count = {
  __typename: 'fund_aggregated_count';
  created_at?: Maybe<Scalars['Int']['output']>;
  fund_reports?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  vintage?: Maybe<Scalars['Int']['output']>;
};

export type Fund_Aggregated_Fields = {
  __typename: 'fund_aggregated_fields';
  vintage?: Maybe<Scalars['Float']['output']>;
};

export type Fund_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Fund_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Fund_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fund_reports?: InputMaybe<Fund_Report_Quantifier_Filter>;
  fund_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  vintage?: InputMaybe<Number_Filter_Operators>;
};

export type Fund_Manager = {
  __typename: 'fund_manager';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Array<Maybe<Fund_Report>>>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};


export type Fund_ManagerFund_ReportsArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Fund_Manager_Aggregated = {
  __typename: 'fund_manager_aggregated';
  count?: Maybe<Fund_Manager_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Fund_Manager_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Fund_Manager_Aggregated_Count = {
  __typename: 'fund_manager_aggregated_count';
  created_at?: Maybe<Scalars['Int']['output']>;
  fund_reports?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

export type Fund_Manager_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Fund_Manager_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Fund_Manager_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fund_reports?: InputMaybe<Fund_Report_Quantifier_Filter>;
  fund_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Fund_Manager_Mutated = {
  __typename: 'fund_manager_mutated';
  data?: Maybe<Fund_Manager>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Fund_Mutated = {
  __typename: 'fund_mutated';
  data?: Maybe<Fund>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Fund_Report = {
  __typename: 'fund_report';
  capital_called?: Maybe<Scalars['Float']['output']>;
  company_reports?: Maybe<Array<Maybe<Company_Report>>>;
  company_reports_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  dpi?: Maybe<Scalars['Float']['output']>;
  fund_id?: Maybe<Fund>;
  fund_manager_id?: Maybe<Fund_Manager>;
  fund_size?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  moic?: Maybe<Scalars['Float']['output']>;
  net_irr?: Maybe<Scalars['Float']['output']>;
  num_investments?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Organizations>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date: Scalars['Date']['output'];
  report_date_func?: Maybe<Date_Functions>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};


export type Fund_ReportCompany_ReportsArgs = {
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Fund_ReportFund_IdArgs = {
  filter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Fund_ReportFund_Manager_IdArgs = {
  filter?: InputMaybe<Fund_Manager_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Fund_ReportOrganization_IdArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Fund_Report_Aggregated = {
  __typename: 'fund_report_aggregated';
  avg?: Maybe<Fund_Report_Aggregated_Fields>;
  avgDistinct?: Maybe<Fund_Report_Aggregated_Fields>;
  count?: Maybe<Fund_Report_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Fund_Report_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Fund_Report_Aggregated_Fields>;
  min?: Maybe<Fund_Report_Aggregated_Fields>;
  sum?: Maybe<Fund_Report_Aggregated_Fields>;
  sumDistinct?: Maybe<Fund_Report_Aggregated_Fields>;
};

export type Fund_Report_Aggregated_Count = {
  __typename: 'fund_report_aggregated_count';
  capital_called?: Maybe<Scalars['Int']['output']>;
  company_reports?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Int']['output']>;
  dpi?: Maybe<Scalars['Int']['output']>;
  fund_id?: Maybe<Scalars['Int']['output']>;
  fund_manager_id?: Maybe<Scalars['Int']['output']>;
  fund_size?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  moic?: Maybe<Scalars['Int']['output']>;
  net_irr?: Maybe<Scalars['Int']['output']>;
  num_investments?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  realized_value?: Maybe<Scalars['Int']['output']>;
  report_date?: Maybe<Scalars['Int']['output']>;
  total_value?: Maybe<Scalars['Int']['output']>;
  unrealized_value?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
};

export type Fund_Report_Aggregated_Fields = {
  __typename: 'fund_report_aggregated_fields';
  capital_called?: Maybe<Scalars['Float']['output']>;
  dpi?: Maybe<Scalars['Float']['output']>;
  fund_size?: Maybe<Scalars['Float']['output']>;
  moic?: Maybe<Scalars['Float']['output']>;
  net_irr?: Maybe<Scalars['Float']['output']>;
  num_investments?: Maybe<Scalars['Float']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
};

export type Fund_Report_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Fund_Report_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Fund_Report_Filter>>>;
  capital_called?: InputMaybe<Number_Filter_Operators>;
  company_reports?: InputMaybe<Company_Report_Quantifier_Filter>;
  company_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  dpi?: InputMaybe<Number_Filter_Operators>;
  fund_id?: InputMaybe<Fund_Filter>;
  fund_manager_id?: InputMaybe<Fund_Manager_Filter>;
  fund_size?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  moic?: InputMaybe<Number_Filter_Operators>;
  net_irr?: InputMaybe<Number_Filter_Operators>;
  num_investments?: InputMaybe<Number_Filter_Operators>;
  organization_id?: InputMaybe<Organizations_Filter>;
  realized_value?: InputMaybe<Number_Filter_Operators>;
  report_date?: InputMaybe<Date_Filter_Operators>;
  report_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  total_value?: InputMaybe<Number_Filter_Operators>;
  unrealized_value?: InputMaybe<Number_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Fund_Report_Mutated = {
  __typename: 'fund_report_mutated';
  data?: Maybe<Fund_Report>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Fund_Report_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Fund_Report_Filter>>>;
  _none?: InputMaybe<Fund_Report_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Fund_Report_Filter>>>;
  _some?: InputMaybe<Fund_Report_Filter>;
  capital_called?: InputMaybe<Number_Filter_Operators>;
  company_reports?: InputMaybe<Company_Report_Quantifier_Filter>;
  company_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  dpi?: InputMaybe<Number_Filter_Operators>;
  fund_id?: InputMaybe<Fund_Filter>;
  fund_manager_id?: InputMaybe<Fund_Manager_Filter>;
  fund_size?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  moic?: InputMaybe<Number_Filter_Operators>;
  net_irr?: InputMaybe<Number_Filter_Operators>;
  num_investments?: InputMaybe<Number_Filter_Operators>;
  organization_id?: InputMaybe<Organizations_Filter>;
  realized_value?: InputMaybe<Number_Filter_Operators>;
  report_date?: InputMaybe<Date_Filter_Operators>;
  report_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  total_value?: InputMaybe<Number_Filter_Operators>;
  unrealized_value?: InputMaybe<Number_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Organizations = {
  __typename: 'organizations';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Array<Maybe<Fund_Report>>>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  users?: Maybe<Scalars['String']['output']>;
  users_func?: Maybe<Count_Functions>;
};


export type OrganizationsFund_ReportsArgs = {
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Organizations_Aggregated = {
  __typename: 'organizations_aggregated';
  count?: Maybe<Organizations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Organizations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Organizations_Aggregated_Count = {
  __typename: 'organizations_aggregated_count';
  created_at?: Maybe<Scalars['Int']['output']>;
  fund_reports?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Scalars['Int']['output']>;
};

export type Organizations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Organizations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Organizations_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  fund_reports?: InputMaybe<Fund_Report_Quantifier_Filter>;
  fund_reports_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  users?: InputMaybe<String_Filter_Operators>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Organizations_Mutated = {
  __typename: 'organizations_mutated';
  data?: Maybe<Organizations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Version_Company = {
  __typename: 'version_company';
  company_reports?: Maybe<Scalars['JSON']['output']>;
  company_reports_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  geography?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sector?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};

export type Version_Company_Report = {
  __typename: 'version_company_report';
  company_id?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  debt?: Maybe<Scalars['Float']['output']>;
  ebitda?: Maybe<Scalars['Float']['output']>;
  enterprise_value?: Maybe<Scalars['Float']['output']>;
  equity_value?: Maybe<Scalars['Float']['output']>;
  fund_report_id?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  invested_capital?: Maybe<Scalars['Float']['output']>;
  investment_date?: Maybe<Scalars['Date']['output']>;
  investment_date_func?: Maybe<Date_Functions>;
  irr?: Maybe<Scalars['Float']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date: Scalars['Date']['output'];
  report_date_func?: Maybe<Date_Functions>;
  revenue?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thesis_commentary?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  valuation_basis?: Maybe<Scalars['String']['output']>;
  valuation_multiple?: Maybe<Scalars['Float']['output']>;
};

export type Version_Fund = {
  __typename: 'version_fund';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Scalars['JSON']['output']>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  vintage?: Maybe<Scalars['Int']['output']>;
};

export type Version_Fund_Manager = {
  __typename: 'version_fund_manager';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Scalars['JSON']['output']>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};

export type Version_Fund_Report = {
  __typename: 'version_fund_report';
  capital_called?: Maybe<Scalars['Float']['output']>;
  company_reports?: Maybe<Scalars['JSON']['output']>;
  company_reports_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  dpi?: Maybe<Scalars['Float']['output']>;
  fund_id?: Maybe<Scalars['JSON']['output']>;
  fund_manager_id?: Maybe<Scalars['JSON']['output']>;
  fund_size?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  moic?: Maybe<Scalars['Float']['output']>;
  net_irr?: Maybe<Scalars['Float']['output']>;
  num_investments?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['JSON']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date: Scalars['Date']['output'];
  report_date_func?: Maybe<Date_Functions>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
};

export type Version_Organizations = {
  __typename: 'version_organizations';
  created_at?: Maybe<Scalars['Date']['output']>;
  created_at_func?: Maybe<Datetime_Functions>;
  fund_reports?: Maybe<Scalars['JSON']['output']>;
  fund_reports_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  users?: Maybe<Scalars['String']['output']>;
  users_func?: Maybe<Count_Functions>;
};

export type CompanyInsightsAggregationQueryVariables = Exact<{
  filter?: InputMaybe<Company_Report_Filter>;
  groupBy?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type CompanyInsightsAggregationQuery = { __typename: 'Query', companyAggregation: Array<{ __typename: 'company_report_aggregated', group?: Record<string, unknown> | null, countAll?: number | null, avg?: { __typename: 'company_report_aggregated_fields', irr?: number | null, invested_capital?: number | null, total_value?: number | null, revenue?: number | null, ebitda?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null } | null, sum?: { __typename: 'company_report_aggregated_fields', invested_capital?: number | null, total_value?: number | null, revenue?: number | null, ebitda?: number | null, realized_value?: number | null, unrealized_value?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null } | null, min?: { __typename: 'company_report_aggregated_fields', invested_capital?: number | null, total_value?: number | null, revenue?: number | null, ebitda?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null, irr?: number | null, realized_value?: number | null, unrealized_value?: number | null } | null, max?: { __typename: 'company_report_aggregated_fields', invested_capital?: number | null, total_value?: number | null, revenue?: number | null, ebitda?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null, irr?: number | null, realized_value?: number | null, unrealized_value?: number | null } | null }> };

export type CompanyInsightsRecordsQueryVariables = Exact<{
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CompanyInsightsRecordsQuery = { __typename: 'Query', companyReports: Array<{ __typename: 'company_report', id: string, report_date: string, investment_date?: string | null, invested_capital?: number | null, total_value?: number | null, irr?: number | null, revenue?: number | null, ebitda?: number | null, realized_value?: number | null, unrealized_value?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null, status?: string | null, thesis_commentary?: string | null, company_id?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null, fund_report_id?: { __typename: 'fund_report', fund_manager_id?: { __typename: 'fund_manager', name: string } | null } | null }> };

export type CompanyReportsTimelineQueryVariables = Exact<{
  fundId: Scalars['ID']['input'];
  companyId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CompanyReportsTimelineQuery = { __typename: 'Query', reports: Array<{ __typename: 'company_report', id: string, report_date: string, revenue?: number | null, ebitda?: number | null }> };

export type DashboardFiltersQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  companyReportFilter?: InputMaybe<Company_Report_Filter>;
  fundManagerFilter?: InputMaybe<Fund_Manager_Filter>;
}>;


export type DashboardFiltersQuery = { __typename: 'Query', companyReports: Array<{ __typename: 'company_report', id: string, invested_capital?: number | null, company_id?: { __typename: 'company', id: string, geography?: string | null, sector?: string | null } | null, fund_report_id?: { __typename: 'fund_report', fund_manager_id?: { __typename: 'fund_manager', id: string, name: string } | null, fund_id?: { __typename: 'fund', id: string, vintage?: number | null } | null } | null }>, fundReports: Array<{ __typename: 'fund_report', id: string, report_date: string, capital_called?: number | null, total_value?: number | null, fund_id?: { __typename: 'fund', id: string, vintage?: number | null } | null, fund_manager_id?: { __typename: 'fund_manager', id: string, name: string } | null }>, fundManagers: Array<{ __typename: 'fund_manager', id: string, name: string, fund_reports?: Array<{ __typename: 'fund_report', id: string, report_date: string, total_value?: number | null, fund_id?: { __typename: 'fund', id: string } | null } | null> | null }> };

export type FundCompaniesQueryVariables = Exact<{
  fundId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FundCompaniesQuery = { __typename: 'Query', fund?: { __typename: 'fund', id: string, name: string } | null, latestReport: Array<{ __typename: 'fund_report', id: string, report_date: string, company_reports?: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, unrealized_value?: number | null, realized_value?: number | null, total_value?: number | null, irr?: number | null, valuation_multiple?: number | null, company_id?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null } | null> | null, company_reports_func?: { __typename: 'count_functions', count?: number | null } | null }> };

export type FundCompanyDetailQueryVariables = Exact<{
  fundId: Scalars['ID']['input'];
  companyId: Scalars['ID']['input'];
}>;


export type FundCompanyDetailQuery = { __typename: 'Query', fund?: { __typename: 'fund', id: string, name: string } | null, company?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null, latestReport: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, realized_value?: number | null, unrealized_value?: number | null, total_value?: number | null, irr?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null, revenue?: number | null, ebitda?: number | null, status?: string | null }>, earliestReport: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, realized_value?: number | null, unrealized_value?: number | null, total_value?: number | null, irr?: number | null, enterprise_value?: number | null, equity_value?: number | null, debt?: number | null, valuation_multiple?: number | null, revenue?: number | null, ebitda?: number | null, status?: string | null }> };

export type FundInsightsAggregationQueryVariables = Exact<{
  filter?: InputMaybe<Fund_Report_Filter>;
  groupBy?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type FundInsightsAggregationQuery = { __typename: 'Query', fundAggregation: Array<{ __typename: 'fund_report_aggregated', group?: Record<string, unknown> | null, countAll?: number | null, avg?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, moic?: number | null, net_irr?: number | null, fund_size?: number | null, num_investments?: number | null, dpi?: number | null } | null, sum?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, fund_size?: number | null, num_investments?: number | null } | null, min?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, moic?: number | null, net_irr?: number | null, fund_size?: number | null, num_investments?: number | null, dpi?: number | null } | null, max?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, moic?: number | null, net_irr?: number | null, fund_size?: number | null, num_investments?: number | null, dpi?: number | null } | null }> };

export type FundInsightsRecordsQueryVariables = Exact<{
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FundInsightsRecordsQuery = { __typename: 'Query', fundReports: Array<{ __typename: 'fund_report', id: string, report_date: string, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, total_value?: number | null, moic?: number | null, net_irr?: number | null, fund_size?: number | null, num_investments?: number | null, dpi?: number | null, fund_id?: { __typename: 'fund', id: string, name: string, vintage?: number | null } | null, fund_manager_id?: { __typename: 'fund_manager', name: string } | null, company_reports?: Array<{ __typename: 'company_report', company_id?: { __typename: 'company', geography?: string | null, sector?: string | null } | null } | null> | null }> };

export type FundsListQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  fundFilter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FundsListQuery = { __typename: 'Query', funds: Array<{ __typename: 'fund', id: string, name: string, vintage?: number | null, fund_reports?: Array<{ __typename: 'fund_report', id: string, report_date: string, fund_size?: number | null, num_investments?: number | null, capital_called?: number | null, unrealized_value?: number | null, realized_value?: number | null, total_value?: number | null, moic?: number | null, net_irr?: number | null, dpi?: number | null, fund_manager_id?: { __typename: 'fund_manager', id: string, name: string } | null, company_reports?: Array<{ __typename: 'company_report', id: string, company_id?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null } | null> | null } | null> | null }>, total: Array<{ __typename: 'fund_aggregated', countAll?: number | null }> };

export type MetricDetailQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
}>;


export type MetricDetailQuery = { __typename: 'Query', timeline: Array<{ __typename: 'fund_report_aggregated', group?: Record<string, unknown> | null, sum?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null, countDistinct?: { __typename: 'fund_report_aggregated_count', fund_id?: number | null } | null }>, funds: Array<{ __typename: 'fund', id: string, name: string, fund_reports?: Array<{ __typename: 'fund_report', id: string, report_date: string, total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, moic?: number | null, net_irr?: number | null, num_investments?: number | null } | null> | null }> };

export type PortfolioDashboardQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  companyReportFilter?: InputMaybe<Company_Report_Filter>;
}>;


export type PortfolioDashboardQuery = { __typename: 'Query', fundMetrics: Array<{ __typename: 'fund_report_aggregated', countAll?: number | null, sum?: { __typename: 'fund_report_aggregated_fields', capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, total_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null }>, fundMetricsTimeline: Array<{ __typename: 'fund_report_aggregated', group?: Record<string, unknown> | null, sum?: { __typename: 'fund_report_aggregated_fields', capital_called?: number | null, realized_value?: number | null, total_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null }>, fundsTotal: Array<{ __typename: 'fund_report_aggregated', countDistinct?: { __typename: 'fund_report_aggregated_count', fund_id?: number | null } | null }>, latestReports: Array<{ __typename: 'fund_report', id: string, report_date: string, num_investments?: number | null, total_value?: number | null, capital_called?: number | null, realized_value?: number | null, moic?: number | null }>, cashFlows: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, realized_value?: number | null, unrealized_value?: number | null }> };


export const CompanyInsightsAggregationDocument = gql`
    query CompanyInsightsAggregation($filter: company_report_filter, $groupBy: [String!]) {
  companyAggregation: company_report_aggregated(
    filter: $filter
    groupBy: $groupBy
  ) {
    group
    countAll
    avg {
      irr
      invested_capital
      total_value
      revenue
      ebitda
      enterprise_value
      equity_value
      debt
      valuation_multiple
    }
    sum {
      invested_capital
      total_value
      revenue
      ebitda
      realized_value
      unrealized_value
      enterprise_value
      equity_value
      debt
    }
    min {
      invested_capital
      total_value
      revenue
      ebitda
      enterprise_value
      equity_value
      debt
      valuation_multiple
      irr
      realized_value
      unrealized_value
    }
    max {
      invested_capital
      total_value
      revenue
      ebitda
      enterprise_value
      equity_value
      debt
      valuation_multiple
      irr
      realized_value
      unrealized_value
    }
  }
}
    `;

/**
 * __useCompanyInsightsAggregationQuery__
 *
 * To run a query within a React component, call `useCompanyInsightsAggregationQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyInsightsAggregationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyInsightsAggregationQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      groupBy: // value for 'groupBy'
 *   },
 * });
 */
export function useCompanyInsightsAggregationQuery(baseOptions?: Apollo.QueryHookOptions<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>(CompanyInsightsAggregationDocument, options);
      }
export function useCompanyInsightsAggregationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>(CompanyInsightsAggregationDocument, options);
        }
export function useCompanyInsightsAggregationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>(CompanyInsightsAggregationDocument, options);
        }
export type CompanyInsightsAggregationQueryHookResult = ReturnType<typeof useCompanyInsightsAggregationQuery>;
export type CompanyInsightsAggregationLazyQueryHookResult = ReturnType<typeof useCompanyInsightsAggregationLazyQuery>;
export type CompanyInsightsAggregationSuspenseQueryHookResult = ReturnType<typeof useCompanyInsightsAggregationSuspenseQuery>;
export type CompanyInsightsAggregationQueryResult = Apollo.QueryResult<CompanyInsightsAggregationQuery, CompanyInsightsAggregationQueryVariables>;
export const CompanyInsightsRecordsDocument = gql`
    query CompanyInsightsRecords($filter: company_report_filter, $limit: Int = 500) {
  companyReports: company_report(
    filter: $filter
    limit: $limit
    sort: ["-report_date"]
  ) {
    id
    report_date
    investment_date
    invested_capital
    total_value
    irr
    revenue
    ebitda
    realized_value
    unrealized_value
    enterprise_value
    equity_value
    debt
    valuation_multiple
    status
    thesis_commentary
    company_id {
      id
      name
      geography
      sector
    }
    fund_report_id {
      fund_manager_id {
        name
      }
    }
  }
}
    `;

/**
 * __useCompanyInsightsRecordsQuery__
 *
 * To run a query within a React component, call `useCompanyInsightsRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyInsightsRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyInsightsRecordsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCompanyInsightsRecordsQuery(baseOptions?: Apollo.QueryHookOptions<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>(CompanyInsightsRecordsDocument, options);
      }
export function useCompanyInsightsRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>(CompanyInsightsRecordsDocument, options);
        }
export function useCompanyInsightsRecordsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>(CompanyInsightsRecordsDocument, options);
        }
export type CompanyInsightsRecordsQueryHookResult = ReturnType<typeof useCompanyInsightsRecordsQuery>;
export type CompanyInsightsRecordsLazyQueryHookResult = ReturnType<typeof useCompanyInsightsRecordsLazyQuery>;
export type CompanyInsightsRecordsSuspenseQueryHookResult = ReturnType<typeof useCompanyInsightsRecordsSuspenseQuery>;
export type CompanyInsightsRecordsQueryResult = Apollo.QueryResult<CompanyInsightsRecordsQuery, CompanyInsightsRecordsQueryVariables>;
export const CompanyReportsTimelineDocument = gql`
    query CompanyReportsTimeline($fundId: ID!, $companyId: ID!, $limit: Int = 100) {
  reports: company_report(
    filter: {company_id: {id: {_eq: $companyId}}, fund_report_id: {fund_id: {id: {_eq: $fundId}}}}
    sort: ["report_date"]
    limit: $limit
  ) {
    id
    report_date
    revenue
    ebitda
  }
}
    `;

/**
 * __useCompanyReportsTimelineQuery__
 *
 * To run a query within a React component, call `useCompanyReportsTimelineQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyReportsTimelineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyReportsTimelineQuery({
 *   variables: {
 *      fundId: // value for 'fundId'
 *      companyId: // value for 'companyId'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useCompanyReportsTimelineQuery(baseOptions: Apollo.QueryHookOptions<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables> & ({ variables: CompanyReportsTimelineQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>(CompanyReportsTimelineDocument, options);
      }
export function useCompanyReportsTimelineLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>(CompanyReportsTimelineDocument, options);
        }
export function useCompanyReportsTimelineSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>(CompanyReportsTimelineDocument, options);
        }
export type CompanyReportsTimelineQueryHookResult = ReturnType<typeof useCompanyReportsTimelineQuery>;
export type CompanyReportsTimelineLazyQueryHookResult = ReturnType<typeof useCompanyReportsTimelineLazyQuery>;
export type CompanyReportsTimelineSuspenseQueryHookResult = ReturnType<typeof useCompanyReportsTimelineSuspenseQuery>;
export type CompanyReportsTimelineQueryResult = Apollo.QueryResult<CompanyReportsTimelineQuery, CompanyReportsTimelineQueryVariables>;
export const DashboardFiltersDocument = gql`
    query DashboardFilters($fundReportFilter: fund_report_filter, $companyReportFilter: company_report_filter, $fundManagerFilter: fund_manager_filter) {
  companyReports: company_report(filter: $companyReportFilter, limit: 500) {
    id
    invested_capital
    company_id {
      id
      geography
      sector
    }
    fund_report_id {
      fund_manager_id {
        id
        name
      }
      fund_id {
        id
        vintage
      }
    }
  }
  fundReports: fund_report(
    filter: $fundReportFilter
    limit: 500
    sort: ["-report_date"]
  ) {
    id
    report_date
    capital_called
    total_value
    fund_id {
      id
      vintage
    }
    fund_manager_id {
      id
      name
    }
  }
  fundManagers: fund_manager(filter: $fundManagerFilter, limit: 500) {
    id
    name
    fund_reports(filter: $fundReportFilter, limit: 500, sort: ["-report_date"]) {
      id
      report_date
      total_value
      fund_id {
        id
      }
    }
  }
}
    `;

/**
 * __useDashboardFiltersQuery__
 *
 * To run a query within a React component, call `useDashboardFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardFiltersQuery({
 *   variables: {
 *      fundReportFilter: // value for 'fundReportFilter'
 *      companyReportFilter: // value for 'companyReportFilter'
 *      fundManagerFilter: // value for 'fundManagerFilter'
 *   },
 * });
 */
export function useDashboardFiltersQuery(baseOptions?: Apollo.QueryHookOptions<DashboardFiltersQuery, DashboardFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardFiltersQuery, DashboardFiltersQueryVariables>(DashboardFiltersDocument, options);
      }
export function useDashboardFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardFiltersQuery, DashboardFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardFiltersQuery, DashboardFiltersQueryVariables>(DashboardFiltersDocument, options);
        }
export function useDashboardFiltersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DashboardFiltersQuery, DashboardFiltersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DashboardFiltersQuery, DashboardFiltersQueryVariables>(DashboardFiltersDocument, options);
        }
export type DashboardFiltersQueryHookResult = ReturnType<typeof useDashboardFiltersQuery>;
export type DashboardFiltersLazyQueryHookResult = ReturnType<typeof useDashboardFiltersLazyQuery>;
export type DashboardFiltersSuspenseQueryHookResult = ReturnType<typeof useDashboardFiltersSuspenseQuery>;
export type DashboardFiltersQueryResult = Apollo.QueryResult<DashboardFiltersQuery, DashboardFiltersQueryVariables>;
export const FundCompaniesDocument = gql`
    query FundCompanies($fundId: ID!, $limit: Int = 20, $offset: Int = 0) {
  fund: fund_by_id(id: $fundId) {
    id
    name
  }
  latestReport: fund_report(
    filter: {fund_id: {id: {_eq: $fundId}}}
    sort: ["-report_date"]
    limit: 1
  ) {
    id
    report_date
    company_reports(limit: $limit, offset: $offset, sort: ["company_id.name"]) {
      id
      report_date
      invested_capital
      unrealized_value
      realized_value
      total_value
      irr
      valuation_multiple
      company_id {
        id
        name
        geography
        sector
      }
    }
    company_reports_func {
      count
    }
  }
}
    `;

/**
 * __useFundCompaniesQuery__
 *
 * To run a query within a React component, call `useFundCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundCompaniesQuery({
 *   variables: {
 *      fundId: // value for 'fundId'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFundCompaniesQuery(baseOptions: Apollo.QueryHookOptions<FundCompaniesQuery, FundCompaniesQueryVariables> & ({ variables: FundCompaniesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundCompaniesQuery, FundCompaniesQueryVariables>(FundCompaniesDocument, options);
      }
export function useFundCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundCompaniesQuery, FundCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundCompaniesQuery, FundCompaniesQueryVariables>(FundCompaniesDocument, options);
        }
export function useFundCompaniesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FundCompaniesQuery, FundCompaniesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FundCompaniesQuery, FundCompaniesQueryVariables>(FundCompaniesDocument, options);
        }
export type FundCompaniesQueryHookResult = ReturnType<typeof useFundCompaniesQuery>;
export type FundCompaniesLazyQueryHookResult = ReturnType<typeof useFundCompaniesLazyQuery>;
export type FundCompaniesSuspenseQueryHookResult = ReturnType<typeof useFundCompaniesSuspenseQuery>;
export type FundCompaniesQueryResult = Apollo.QueryResult<FundCompaniesQuery, FundCompaniesQueryVariables>;
export const FundCompanyDetailDocument = gql`
    query FundCompanyDetail($fundId: ID!, $companyId: ID!) {
  fund: fund_by_id(id: $fundId) {
    id
    name
  }
  company: company_by_id(id: $companyId) {
    id
    name
    geography
    sector
  }
  latestReport: company_report(
    filter: {company_id: {id: {_eq: $companyId}}, fund_report_id: {fund_id: {id: {_eq: $fundId}}}}
    sort: ["-report_date"]
    limit: 1
  ) {
    id
    report_date
    invested_capital
    realized_value
    unrealized_value
    total_value
    irr
    enterprise_value
    equity_value
    debt
    valuation_multiple
    revenue
    ebitda
    status
  }
  earliestReport: company_report(
    filter: {company_id: {id: {_eq: $companyId}}, fund_report_id: {fund_id: {id: {_eq: $fundId}}}}
    sort: ["report_date"]
    limit: 1
  ) {
    id
    report_date
    invested_capital
    realized_value
    unrealized_value
    total_value
    irr
    enterprise_value
    equity_value
    debt
    valuation_multiple
    revenue
    ebitda
    status
  }
}
    `;

/**
 * __useFundCompanyDetailQuery__
 *
 * To run a query within a React component, call `useFundCompanyDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundCompanyDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundCompanyDetailQuery({
 *   variables: {
 *      fundId: // value for 'fundId'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useFundCompanyDetailQuery(baseOptions: Apollo.QueryHookOptions<FundCompanyDetailQuery, FundCompanyDetailQueryVariables> & ({ variables: FundCompanyDetailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>(FundCompanyDetailDocument, options);
      }
export function useFundCompanyDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>(FundCompanyDetailDocument, options);
        }
export function useFundCompanyDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>(FundCompanyDetailDocument, options);
        }
export type FundCompanyDetailQueryHookResult = ReturnType<typeof useFundCompanyDetailQuery>;
export type FundCompanyDetailLazyQueryHookResult = ReturnType<typeof useFundCompanyDetailLazyQuery>;
export type FundCompanyDetailSuspenseQueryHookResult = ReturnType<typeof useFundCompanyDetailSuspenseQuery>;
export type FundCompanyDetailQueryResult = Apollo.QueryResult<FundCompanyDetailQuery, FundCompanyDetailQueryVariables>;
export const FundInsightsAggregationDocument = gql`
    query FundInsightsAggregation($filter: fund_report_filter, $groupBy: [String!]) {
  fundAggregation: fund_report_aggregated(filter: $filter, groupBy: $groupBy) {
    group
    countAll
    avg {
      total_value
      capital_called
      realized_value
      unrealized_value
      moic
      net_irr
      fund_size
      num_investments
      dpi
    }
    sum {
      total_value
      capital_called
      realized_value
      unrealized_value
      fund_size
      num_investments
    }
    min {
      total_value
      capital_called
      realized_value
      unrealized_value
      moic
      net_irr
      fund_size
      num_investments
      dpi
    }
    max {
      total_value
      capital_called
      realized_value
      unrealized_value
      moic
      net_irr
      fund_size
      num_investments
      dpi
    }
  }
}
    `;

/**
 * __useFundInsightsAggregationQuery__
 *
 * To run a query within a React component, call `useFundInsightsAggregationQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundInsightsAggregationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundInsightsAggregationQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      groupBy: // value for 'groupBy'
 *   },
 * });
 */
export function useFundInsightsAggregationQuery(baseOptions?: Apollo.QueryHookOptions<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>(FundInsightsAggregationDocument, options);
      }
export function useFundInsightsAggregationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>(FundInsightsAggregationDocument, options);
        }
export function useFundInsightsAggregationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>(FundInsightsAggregationDocument, options);
        }
export type FundInsightsAggregationQueryHookResult = ReturnType<typeof useFundInsightsAggregationQuery>;
export type FundInsightsAggregationLazyQueryHookResult = ReturnType<typeof useFundInsightsAggregationLazyQuery>;
export type FundInsightsAggregationSuspenseQueryHookResult = ReturnType<typeof useFundInsightsAggregationSuspenseQuery>;
export type FundInsightsAggregationQueryResult = Apollo.QueryResult<FundInsightsAggregationQuery, FundInsightsAggregationQueryVariables>;
export const FundInsightsRecordsDocument = gql`
    query FundInsightsRecords($filter: fund_report_filter, $limit: Int = 500) {
  fundReports: fund_report(filter: $filter, limit: $limit, sort: ["-report_date"]) {
    id
    report_date
    capital_called
    realized_value
    unrealized_value
    total_value
    moic
    net_irr
    fund_size
    num_investments
    dpi
    fund_id {
      id
      name
      vintage
    }
    fund_manager_id {
      name
    }
    company_reports(limit: 1) {
      company_id {
        geography
        sector
      }
    }
  }
}
    `;

/**
 * __useFundInsightsRecordsQuery__
 *
 * To run a query within a React component, call `useFundInsightsRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundInsightsRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundInsightsRecordsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useFundInsightsRecordsQuery(baseOptions?: Apollo.QueryHookOptions<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>(FundInsightsRecordsDocument, options);
      }
export function useFundInsightsRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>(FundInsightsRecordsDocument, options);
        }
export function useFundInsightsRecordsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>(FundInsightsRecordsDocument, options);
        }
export type FundInsightsRecordsQueryHookResult = ReturnType<typeof useFundInsightsRecordsQuery>;
export type FundInsightsRecordsLazyQueryHookResult = ReturnType<typeof useFundInsightsRecordsLazyQuery>;
export type FundInsightsRecordsSuspenseQueryHookResult = ReturnType<typeof useFundInsightsRecordsSuspenseQuery>;
export type FundInsightsRecordsQueryResult = Apollo.QueryResult<FundInsightsRecordsQuery, FundInsightsRecordsQueryVariables>;
export const FundsListDocument = gql`
    query FundsList($fundReportFilter: fund_report_filter, $fundFilter: fund_filter, $limit: Int = 10, $offset: Int = 0) {
  funds: fund(filter: $fundFilter, limit: $limit, offset: $offset, sort: ["name"]) {
    id
    name
    vintage
    fund_reports(filter: $fundReportFilter, sort: ["-report_date"], limit: 1) {
      id
      report_date
      fund_size
      num_investments
      capital_called
      unrealized_value
      realized_value
      total_value
      moic
      net_irr
      dpi
      fund_manager_id {
        id
        name
      }
      company_reports(limit: 3) {
        id
        company_id {
          id
          name
          geography
          sector
        }
      }
    }
  }
  total: fund_aggregated(filter: $fundFilter) {
    countAll
  }
}
    `;

/**
 * __useFundsListQuery__
 *
 * To run a query within a React component, call `useFundsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundsListQuery({
 *   variables: {
 *      fundReportFilter: // value for 'fundReportFilter'
 *      fundFilter: // value for 'fundFilter'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useFundsListQuery(baseOptions?: Apollo.QueryHookOptions<FundsListQuery, FundsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FundsListQuery, FundsListQueryVariables>(FundsListDocument, options);
      }
export function useFundsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FundsListQuery, FundsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FundsListQuery, FundsListQueryVariables>(FundsListDocument, options);
        }
export function useFundsListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FundsListQuery, FundsListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FundsListQuery, FundsListQueryVariables>(FundsListDocument, options);
        }
export type FundsListQueryHookResult = ReturnType<typeof useFundsListQuery>;
export type FundsListLazyQueryHookResult = ReturnType<typeof useFundsListLazyQuery>;
export type FundsListSuspenseQueryHookResult = ReturnType<typeof useFundsListSuspenseQuery>;
export type FundsListQueryResult = Apollo.QueryResult<FundsListQuery, FundsListQueryVariables>;
export const MetricDetailDocument = gql`
    query MetricDetail($fundReportFilter: fund_report_filter) {
  timeline: fund_report_aggregated(
    filter: $fundReportFilter
    groupBy: ["report_date"]
  ) {
    group
    sum {
      total_value
      capital_called
      realized_value
      unrealized_value
    }
    avg {
      moic
      net_irr
    }
    countDistinct {
      fund_id
    }
  }
  funds: fund(sort: ["name"]) {
    id
    name
    fund_reports(filter: $fundReportFilter, sort: ["-report_date"], limit: 24) {
      id
      report_date
      total_value
      capital_called
      realized_value
      unrealized_value
      moic
      net_irr
      num_investments
    }
  }
}
    `;

/**
 * __useMetricDetailQuery__
 *
 * To run a query within a React component, call `useMetricDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useMetricDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMetricDetailQuery({
 *   variables: {
 *      fundReportFilter: // value for 'fundReportFilter'
 *   },
 * });
 */
export function useMetricDetailQuery(baseOptions?: Apollo.QueryHookOptions<MetricDetailQuery, MetricDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MetricDetailQuery, MetricDetailQueryVariables>(MetricDetailDocument, options);
      }
export function useMetricDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MetricDetailQuery, MetricDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MetricDetailQuery, MetricDetailQueryVariables>(MetricDetailDocument, options);
        }
export function useMetricDetailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MetricDetailQuery, MetricDetailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MetricDetailQuery, MetricDetailQueryVariables>(MetricDetailDocument, options);
        }
export type MetricDetailQueryHookResult = ReturnType<typeof useMetricDetailQuery>;
export type MetricDetailLazyQueryHookResult = ReturnType<typeof useMetricDetailLazyQuery>;
export type MetricDetailSuspenseQueryHookResult = ReturnType<typeof useMetricDetailSuspenseQuery>;
export type MetricDetailQueryResult = Apollo.QueryResult<MetricDetailQuery, MetricDetailQueryVariables>;
export const PortfolioDashboardDocument = gql`
    query PortfolioDashboard($fundReportFilter: fund_report_filter, $companyReportFilter: company_report_filter) {
  fundMetrics: fund_report_aggregated(filter: $fundReportFilter) {
    countAll
    sum {
      capital_called
      realized_value
      unrealized_value
      total_value
    }
    avg {
      moic
      net_irr
    }
  }
  fundMetricsTimeline: fund_report_aggregated(
    filter: $fundReportFilter
    groupBy: ["report_date"]
  ) {
    group
    sum {
      capital_called
      realized_value
      total_value
    }
    avg {
      moic
      net_irr
    }
  }
  fundsTotal: fund_report_aggregated(filter: $fundReportFilter) {
    countDistinct {
      fund_id
    }
  }
  latestReports: fund_report(
    filter: $fundReportFilter
    sort: ["-report_date"]
    limit: 2
  ) {
    id
    report_date
    num_investments
    total_value
    capital_called
    realized_value
    moic
  }
  cashFlows: company_report(
    filter: $companyReportFilter
    sort: ["report_date"]
    limit: 200
  ) {
    id
    report_date
    invested_capital
    realized_value
    unrealized_value
  }
}
    `;

/**
 * __usePortfolioDashboardQuery__
 *
 * To run a query within a React component, call `usePortfolioDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioDashboardQuery({
 *   variables: {
 *      fundReportFilter: // value for 'fundReportFilter'
 *      companyReportFilter: // value for 'companyReportFilter'
 *   },
 * });
 */
export function usePortfolioDashboardQuery(baseOptions?: Apollo.QueryHookOptions<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>(PortfolioDashboardDocument, options);
      }
export function usePortfolioDashboardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>(PortfolioDashboardDocument, options);
        }
export function usePortfolioDashboardSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>(PortfolioDashboardDocument, options);
        }
export type PortfolioDashboardQueryHookResult = ReturnType<typeof usePortfolioDashboardQuery>;
export type PortfolioDashboardLazyQueryHookResult = ReturnType<typeof usePortfolioDashboardLazyQuery>;
export type PortfolioDashboardSuspenseQueryHookResult = ReturnType<typeof usePortfolioDashboardSuspenseQuery>;
export type PortfolioDashboardQueryResult = Apollo.QueryResult<PortfolioDashboardQuery, PortfolioDashboardQueryVariables>;