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
  /** BigInt value */
  GraphQLBigInt: { input: string; output: string; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: string | number; output: string | number; }
  /** Hashed string values */
  Hash: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename: 'Mutation';
  create_company_item?: Maybe<Company>;
  create_company_items: Array<Company>;
  create_company_report_item?: Maybe<Company_Report>;
  create_company_report_items: Array<Company_Report>;
  create_fund_item?: Maybe<Fund>;
  create_fund_items: Array<Fund>;
  create_fund_report_item?: Maybe<Fund_Report>;
  create_fund_report_items: Array<Fund_Report>;
  create_organizations_item?: Maybe<Organizations>;
  create_organizations_items: Array<Organizations>;
  delete_company_item?: Maybe<Delete_One>;
  delete_company_items?: Maybe<Delete_Many>;
  delete_company_report_item?: Maybe<Delete_One>;
  delete_company_report_items?: Maybe<Delete_Many>;
  delete_fund_item?: Maybe<Delete_One>;
  delete_fund_items?: Maybe<Delete_Many>;
  delete_fund_report_item?: Maybe<Delete_One>;
  delete_fund_report_items?: Maybe<Delete_Many>;
  delete_organizations_item?: Maybe<Delete_One>;
  delete_organizations_items?: Maybe<Delete_Many>;
  update_company_batch: Array<Company>;
  update_company_item?: Maybe<Company>;
  update_company_items: Array<Company>;
  update_company_report_batch: Array<Company_Report>;
  update_company_report_item?: Maybe<Company_Report>;
  update_company_report_items: Array<Company_Report>;
  update_fund_batch: Array<Fund>;
  update_fund_item?: Maybe<Fund>;
  update_fund_items: Array<Fund>;
  update_fund_report_batch: Array<Fund_Report>;
  update_fund_report_item?: Maybe<Fund_Report>;
  update_fund_report_items: Array<Fund_Report>;
  update_organizations_batch: Array<Organizations>;
  update_organizations_item?: Maybe<Organizations>;
  update_organizations_items: Array<Organizations>;
};


export type MutationCreate_Company_ItemArgs = {
  data: Create_Company_Input;
};


export type MutationCreate_Company_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Input>>;
  filter?: InputMaybe<Company_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Company_Report_ItemArgs = {
  data: Create_Company_Report_Input;
};


export type MutationCreate_Company_Report_ItemsArgs = {
  data?: InputMaybe<Array<Create_Company_Report_Input>>;
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Fund_ItemArgs = {
  data: Create_Fund_Input;
};


export type MutationCreate_Fund_ItemsArgs = {
  data?: InputMaybe<Array<Create_Fund_Input>>;
  filter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Fund_Report_ItemArgs = {
  data: Create_Fund_Report_Input;
};


export type MutationCreate_Fund_Report_ItemsArgs = {
  data?: InputMaybe<Array<Create_Fund_Report_Input>>;
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Organizations_ItemArgs = {
  data: Create_Organizations_Input;
};


export type MutationCreate_Organizations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Organizations_Input>>;
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Company_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Company_Report_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Company_Report_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Fund_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Fund_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Fund_Report_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Fund_Report_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Organizations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Organizations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Company_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Input>>;
  filter?: InputMaybe<Company_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_ItemArgs = {
  data: Update_Company_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_ItemsArgs = {
  data: Update_Company_Input;
  filter?: InputMaybe<Company_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Report_BatchArgs = {
  data?: InputMaybe<Array<Update_Company_Report_Input>>;
  filter?: InputMaybe<Company_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Company_Report_ItemArgs = {
  data: Update_Company_Report_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Company_Report_ItemsArgs = {
  data: Update_Company_Report_Input;
  filter?: InputMaybe<Company_Report_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Fund_BatchArgs = {
  data?: InputMaybe<Array<Update_Fund_Input>>;
  filter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Fund_ItemArgs = {
  data: Update_Fund_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Fund_ItemsArgs = {
  data: Update_Fund_Input;
  filter?: InputMaybe<Fund_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Fund_Report_BatchArgs = {
  data?: InputMaybe<Array<Update_Fund_Report_Input>>;
  filter?: InputMaybe<Fund_Report_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Fund_Report_ItemArgs = {
  data: Update_Fund_Report_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Fund_Report_ItemsArgs = {
  data: Update_Fund_Report_Input;
  filter?: InputMaybe<Fund_Report_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_BatchArgs = {
  data?: InputMaybe<Array<Update_Organizations_Input>>;
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Organizations_ItemArgs = {
  data: Update_Organizations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Organizations_ItemsArgs = {
  data: Update_Organizations_Input;
  filter?: InputMaybe<Organizations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

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
  directus_access_mutated?: Maybe<Directus_Access_Mutated>;
  directus_activity_mutated?: Maybe<Directus_Activity_Mutated>;
  directus_comments_mutated?: Maybe<Directus_Comments_Mutated>;
  directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>;
  directus_operations_mutated?: Maybe<Directus_Operations_Mutated>;
  directus_panels_mutated?: Maybe<Directus_Panels_Mutated>;
  directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>;
  directus_policies_mutated?: Maybe<Directus_Policies_Mutated>;
  directus_presets_mutated?: Maybe<Directus_Presets_Mutated>;
  directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>;
  directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
  directus_settings_mutated?: Maybe<Directus_Settings_Mutated>;
  directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
  directus_translations_mutated?: Maybe<Directus_Translations_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  directus_versions_mutated?: Maybe<Directus_Versions_Mutated>;
  directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>;
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


export type SubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Comments_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Policies_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
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

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Create_Company_Input = {
  company_reports?: InputMaybe<Array<InputMaybe<Create_Company_Report_Input>>>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  geography?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  sector?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type Create_Company_Report_Input = {
  company_id?: InputMaybe<Create_Company_Input>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  debt?: InputMaybe<Scalars['Float']['input']>;
  ebitda?: InputMaybe<Scalars['Float']['input']>;
  enterprise_value?: InputMaybe<Scalars['Float']['input']>;
  equity_value?: InputMaybe<Scalars['Float']['input']>;
  fund_report_id?: InputMaybe<Create_Fund_Report_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invested_capital?: InputMaybe<Scalars['Float']['input']>;
  investment_date?: InputMaybe<Scalars['Date']['input']>;
  irr?: InputMaybe<Scalars['Float']['input']>;
  realized_value?: InputMaybe<Scalars['Float']['input']>;
  report_date: Scalars['Date']['input'];
  revenue?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thesis_commentary?: InputMaybe<Scalars['String']['input']>;
  total_value?: InputMaybe<Scalars['Float']['input']>;
  unrealized_value?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  valuation_basis?: InputMaybe<Scalars['String']['input']>;
  valuation_multiple?: InputMaybe<Scalars['Float']['input']>;
};

export type Create_Fund_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  fund_reports?: InputMaybe<Array<InputMaybe<Create_Fund_Report_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  vintage?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Fund_Report_Input = {
  capital_called?: InputMaybe<Scalars['Float']['input']>;
  company_reports?: InputMaybe<Array<InputMaybe<Create_Company_Report_Input>>>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  dpi?: InputMaybe<Scalars['Float']['input']>;
  fund_id?: InputMaybe<Create_Fund_Input>;
  fund_size?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  moic?: InputMaybe<Scalars['Float']['input']>;
  net_irr?: InputMaybe<Scalars['Float']['input']>;
  num_investments?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Create_Organizations_Input>;
  realized_value?: InputMaybe<Scalars['Float']['input']>;
  report_date: Scalars['Date']['input'];
  total_value?: InputMaybe<Scalars['Float']['input']>;
  unrealized_value?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type Create_Organizations_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  fund_reports?: InputMaybe<Array<InputMaybe<Create_Fund_Report_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Date']['input']>;
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

export type Delete_Many = {
  __typename: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Directus_Access = {
  __typename: 'directus_access';
  id: Scalars['ID']['output'];
  policy?: Maybe<Directus_Policies>;
  role?: Maybe<Directus_Roles>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_AccessPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Access_Mutated = {
  __typename: 'directus_access_mutated';
  data?: Maybe<Directus_Access>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Access_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _none?: InputMaybe<Directus_Access_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _some?: InputMaybe<Directus_Access_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Activity = {
  __typename: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func?: Maybe<Count_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
  user?: Maybe<Directus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Quantifier_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
  __typename: 'directus_activity_mutated';
  data?: Maybe<Directus_Activity>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Comments = {
  __typename: 'directus_comments';
  collection: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Directus_CommentsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CommentsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Comments_Mutated = {
  __typename: 'directus_comments_mutated';
  data?: Maybe<Directus_Comments>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Dashboards = {
  __typename: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Quantifier_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
  __typename: 'directus_dashboards_mutated';
  data?: Maybe<Directus_Dashboards>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Files = {
  __typename: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Flows = {
  __typename: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<Directus_Operations>;
  operations?: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Quantifier_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
  __typename: 'directus_flows_mutated';
  data?: Maybe<Directus_Flows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  __typename: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  __typename: 'directus_folders_mutated';
  data?: Maybe<Directus_Folders>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  __typename: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Directus_Users>;
  sender?: Maybe<Directus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
  __typename: 'directus_notifications_mutated';
  data?: Maybe<Directus_Notifications>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations = {
  __typename: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  flow?: Maybe<Directus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<Directus_Operations>;
  resolve?: Maybe<Directus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
  __typename: 'directus_operations_mutated';
  data?: Maybe<Directus_Operations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _none?: InputMaybe<Directus_Operations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _some?: InputMaybe<Directus_Operations_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Panels = {
  __typename: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<Directus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
  __typename: 'directus_panels_mutated';
  data?: Maybe<Directus_Panels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Panels_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _none?: InputMaybe<Directus_Panels_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _some?: InputMaybe<Directus_Panels_Filter>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Permissions = {
  __typename: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<Count_Functions>;
  policy?: Maybe<Directus_Policies>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<Count_Functions>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Permissions_Mutated = {
  __typename: 'directus_permissions_mutated';
  data?: Maybe<Directus_Permissions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Permissions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _none?: InputMaybe<Directus_Permissions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _some?: InputMaybe<Directus_Permissions_Filter>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies = {
  __typename: 'directus_policies';
  admin_access: Scalars['Boolean']['output'];
  app_access: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Directus_Permissions>>>;
  permissions_func?: Maybe<Count_Functions>;
  roles?: Maybe<Array<Maybe<Directus_Access>>>;
  roles_func?: Maybe<Count_Functions>;
  users?: Maybe<Array<Maybe<Directus_Access>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_PoliciesPermissionsArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesRolesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesUsersArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  permissions?: InputMaybe<Directus_Permissions_Quantifier_Filter>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  roles?: InputMaybe<Directus_Access_Quantifier_Filter>;
  roles_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Access_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies_Mutated = {
  __typename: 'directus_policies_mutated';
  data?: Maybe<Directus_Policies>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Presets = {
  __typename: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<Count_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<Count_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<Count_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Directus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
  __typename: 'directus_presets_mutated';
  data?: Maybe<Directus_Presets>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions = {
  __typename: 'directus_revisions';
  activity?: Maybe<Directus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<Directus_Revisions>;
  version?: Maybe<Directus_Versions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsVersionArgs = {
  filter?: InputMaybe<Directus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Revisions_Mutated = {
  __typename: 'directus_revisions_mutated';
  data?: Maybe<Directus_Revisions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _none?: InputMaybe<Directus_Revisions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _some?: InputMaybe<Directus_Revisions_Filter>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Roles = {
  __typename: 'directus_roles';
  children?: Maybe<Array<Maybe<Directus_Roles>>>;
  children_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Roles>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesChildrenArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesParentArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  __typename: 'directus_roles_mutated';
  data?: Maybe<Directus_Roles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Roles_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _none?: InputMaybe<Directus_Roles_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _some?: InputMaybe<Directus_Roles_Filter>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Settings = {
  __typename: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<Count_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<Count_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_appearance?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  default_theme_dark?: Maybe<Scalars['String']['output']>;
  default_theme_light?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_allow_deletes_note */
  mcp_allow_deletes: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_enabled_note */
  mcp_enabled: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_prompts_collection_note */
  mcp_prompts_collection?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_note */
  mcp_system_prompt?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_enabled_note */
  mcp_system_prompt_enabled?: Maybe<Scalars['Boolean']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<Count_Functions>;
  org_name?: Maybe<Scalars['String']['output']>;
  product_updates?: Maybe<Scalars['Boolean']['output']>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['ID']['output']>;
  project_logo?: Maybe<Directus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_owner?: Maybe<Scalars['String']['output']>;
  project_status?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  project_usage?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Directus_Files>;
  public_favicon?: Maybe<Directus_Files>;
  public_foreground?: Maybe<Directus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func?: Maybe<Count_Functions>;
  public_registration_role?: Maybe<Directus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
  report_bug_url?: Maybe<Scalars['String']['output']>;
  report_error_url?: Maybe<Scalars['String']['output']>;
  report_feature_url?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<Count_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<Directus_Folders>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  visual_editor_urls?: Maybe<Scalars['JSON']['output']>;
  visual_editor_urls_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Settings_Mutated = {
  __typename: 'directus_settings_mutated';
  data?: Maybe<Directus_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  __typename: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  __typename: 'directus_shares_mutated';
  data?: Maybe<Directus_Shares>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Translations = {
  __typename: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Directus_Translations_Mutated = {
  __typename: 'directus_translations_mutated';
  data?: Maybe<Directus_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Organizations>;
  password?: Maybe<Scalars['Hash']['output']>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  text_direction?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersOrganization_IdArgs = {
  filter?: InputMaybe<Organizations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  organization_id?: InputMaybe<Organizations_Filter>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename: 'directus_users_mutated';
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _none?: InputMaybe<Directus_Users_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _some?: InputMaybe<Directus_Users_Filter>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  organization_id?: InputMaybe<Organizations_Filter>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Versions = {
  __typename: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Directus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  hash?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Versions_Mutated = {
  __typename: 'directus_versions_mutated';
  data?: Maybe<Directus_Versions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Webhooks = {
  __typename: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  migrated_flow?: Maybe<Directus_Flows>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type Directus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Webhooks_Mutated = {
  __typename: 'directus_webhooks_mutated';
  data?: Maybe<Directus_Webhooks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
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

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Update_Company_Input = {
  company_reports?: InputMaybe<Array<InputMaybe<Update_Company_Report_Input>>>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  geography?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type Update_Company_Report_Input = {
  company_id?: InputMaybe<Update_Company_Input>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  debt?: InputMaybe<Scalars['Float']['input']>;
  ebitda?: InputMaybe<Scalars['Float']['input']>;
  enterprise_value?: InputMaybe<Scalars['Float']['input']>;
  equity_value?: InputMaybe<Scalars['Float']['input']>;
  fund_report_id?: InputMaybe<Update_Fund_Report_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  invested_capital?: InputMaybe<Scalars['Float']['input']>;
  investment_date?: InputMaybe<Scalars['Date']['input']>;
  irr?: InputMaybe<Scalars['Float']['input']>;
  realized_value?: InputMaybe<Scalars['Float']['input']>;
  report_date?: InputMaybe<Scalars['Date']['input']>;
  revenue?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  thesis_commentary?: InputMaybe<Scalars['String']['input']>;
  total_value?: InputMaybe<Scalars['Float']['input']>;
  unrealized_value?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  valuation_basis?: InputMaybe<Scalars['String']['input']>;
  valuation_multiple?: InputMaybe<Scalars['Float']['input']>;
};

export type Update_Fund_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  fund_reports?: InputMaybe<Array<InputMaybe<Update_Fund_Report_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
  vintage?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Fund_Report_Input = {
  capital_called?: InputMaybe<Scalars['Float']['input']>;
  company_reports?: InputMaybe<Array<InputMaybe<Update_Company_Report_Input>>>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  dpi?: InputMaybe<Scalars['Float']['input']>;
  fund_id?: InputMaybe<Update_Fund_Input>;
  fund_size?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  moic?: InputMaybe<Scalars['Float']['input']>;
  net_irr?: InputMaybe<Scalars['Float']['input']>;
  num_investments?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Update_Organizations_Input>;
  realized_value?: InputMaybe<Scalars['Float']['input']>;
  report_date?: InputMaybe<Scalars['Date']['input']>;
  total_value?: InputMaybe<Scalars['Float']['input']>;
  unrealized_value?: InputMaybe<Scalars['Float']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type Update_Organizations_Input = {
  created_at?: InputMaybe<Scalars['Date']['input']>;
  fund_reports?: InputMaybe<Array<InputMaybe<Update_Fund_Report_Input>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Date']['input']>;
};

export type Version_Company = {
  __typename: 'version_company';
  company_reports?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  geography?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type Version_Company_Report = {
  __typename: 'version_company_report';
  company_id?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  debt?: Maybe<Scalars['Float']['output']>;
  ebitda?: Maybe<Scalars['Float']['output']>;
  enterprise_value?: Maybe<Scalars['Float']['output']>;
  equity_value?: Maybe<Scalars['Float']['output']>;
  fund_report_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  invested_capital?: Maybe<Scalars['Float']['output']>;
  investment_date?: Maybe<Scalars['Date']['output']>;
  irr?: Maybe<Scalars['Float']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date?: Maybe<Scalars['Date']['output']>;
  revenue?: Maybe<Scalars['Float']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thesis_commentary?: Maybe<Scalars['String']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  valuation_basis?: Maybe<Scalars['String']['output']>;
  valuation_multiple?: Maybe<Scalars['Float']['output']>;
};

export type Version_Fund = {
  __typename: 'version_fund';
  created_at?: Maybe<Scalars['Date']['output']>;
  fund_reports?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  vintage?: Maybe<Scalars['Int']['output']>;
};

export type Version_Fund_Report = {
  __typename: 'version_fund_report';
  capital_called?: Maybe<Scalars['Float']['output']>;
  company_reports?: Maybe<Scalars['JSON']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  dpi?: Maybe<Scalars['Float']['output']>;
  fund_id?: Maybe<Scalars['JSON']['output']>;
  fund_size?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  moic?: Maybe<Scalars['Float']['output']>;
  net_irr?: Maybe<Scalars['Float']['output']>;
  num_investments?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['JSON']['output']>;
  realized_value?: Maybe<Scalars['Float']['output']>;
  report_date?: Maybe<Scalars['Date']['output']>;
  total_value?: Maybe<Scalars['Float']['output']>;
  unrealized_value?: Maybe<Scalars['Float']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type Version_Organizations = {
  __typename: 'version_organizations';
  created_at?: Maybe<Scalars['Date']['output']>;
  fund_reports?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type DashboardFiltersQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  companyReportFilter?: InputMaybe<Company_Report_Filter>;
}>;


export type DashboardFiltersQuery = { __typename: 'Query', companyReports: Array<{ __typename: 'company_report', id: string, invested_capital?: number | null, company_id?: { __typename: 'company', id: string, geography?: string | null, sector?: string | null } | null }>, fundReports: Array<{ __typename: 'fund_report', id: string, capital_called?: number | null, fund_id?: { __typename: 'fund', id: string, vintage?: number | null } | null, organization_id?: { __typename: 'organizations', id: string, name: string } | null }> };

export type FundCompaniesQueryVariables = Exact<{
  fundId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FundCompaniesQuery = { __typename: 'Query', fund?: { __typename: 'fund', id: string, name: string } | null, latestReport: Array<{ __typename: 'fund_report', id: string, report_date: string, company_reports?: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, unrealized_value?: number | null, realized_value?: number | null, total_value?: number | null, irr?: number | null, company_id?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null } | null> | null, company_reports_func?: { __typename: 'count_functions', count?: number | null } | null }> };

export type FundsListQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  fundFilter?: InputMaybe<Fund_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FundsListQuery = { __typename: 'Query', funds: Array<{ __typename: 'fund', id: string, name: string, vintage?: number | null, fund_reports?: Array<{ __typename: 'fund_report', id: string, report_date: string, fund_size?: number | null, num_investments?: number | null, capital_called?: number | null, unrealized_value?: number | null, realized_value?: number | null, total_value?: number | null, moic?: number | null, net_irr?: number | null, dpi?: number | null, organization_id?: { __typename: 'organizations', id: string, name: string } | null, company_reports?: Array<{ __typename: 'company_report', id: string, company_id?: { __typename: 'company', id: string, name: string, geography?: string | null, sector?: string | null } | null } | null> | null } | null> | null }>, total: Array<{ __typename: 'fund_aggregated', countAll?: number | null }> };

export type MetricDetailQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
}>;


export type MetricDetailQuery = { __typename: 'Query', timeline: Array<{ __typename: 'fund_report_aggregated', group?: Record<string, unknown> | null, sum?: { __typename: 'fund_report_aggregated_fields', total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null, countDistinct?: { __typename: 'fund_report_aggregated_count', fund_id?: number | null } | null }>, funds: Array<{ __typename: 'fund', id: string, name: string, fund_reports?: Array<{ __typename: 'fund_report', id: string, report_date: string, total_value?: number | null, capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, moic?: number | null, net_irr?: number | null, num_investments?: number | null } | null> | null }> };

export type PortfolioDashboardQueryVariables = Exact<{
  fundReportFilter?: InputMaybe<Fund_Report_Filter>;
  companyReportFilter?: InputMaybe<Company_Report_Filter>;
}>;


export type PortfolioDashboardQuery = { __typename: 'Query', fundMetrics: Array<{ __typename: 'fund_report_aggregated', countAll?: number | null, sum?: { __typename: 'fund_report_aggregated_fields', capital_called?: number | null, realized_value?: number | null, unrealized_value?: number | null, total_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null }>, fundMetricsTimeline: Array<{ __typename: 'fund_report_aggregated', group?: Record<string, unknown> | null, sum?: { __typename: 'fund_report_aggregated_fields', capital_called?: number | null, realized_value?: number | null, total_value?: number | null } | null, avg?: { __typename: 'fund_report_aggregated_fields', moic?: number | null, net_irr?: number | null } | null }>, fundsTotal: Array<{ __typename: 'fund_report_aggregated', countDistinct?: { __typename: 'fund_report_aggregated_count', fund_id?: number | null } | null }>, latestReports: Array<{ __typename: 'fund_report', id: string, report_date: string, num_investments?: number | null, total_value?: number | null, capital_called?: number | null, realized_value?: number | null, moic?: number | null }>, cashFlows: Array<{ __typename: 'company_report', id: string, report_date: string, invested_capital?: number | null, realized_value?: number | null, unrealized_value?: number | null }> };


export const DashboardFiltersDocument = gql`
    query DashboardFilters($fundReportFilter: fund_report_filter, $companyReportFilter: company_report_filter) {
  companyReports: company_report(filter: $companyReportFilter, limit: 500) {
    id
    invested_capital
    company_id {
      id
      geography
      sector
    }
  }
  fundReports: fund_report(filter: $fundReportFilter, limit: 500) {
    id
    capital_called
    fund_id {
      id
      vintage
    }
    organization_id {
      id
      name
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
      organization_id {
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