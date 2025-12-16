table "directus_access" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "role" {
    null = true
    type = uuid
  }
  column "user" {
    null = true
    type = uuid
  }
  column "policy" {
    null = false
    type = uuid
  }
  column "sort" {
    null = true
    type = integer
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_access_policy_foreign" {
    columns     = [column.policy]
    ref_columns = [table.directus_policies.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_access_role_foreign" {
    columns     = [column.role]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_access_user_foreign" {
    columns     = [column.user]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
}


table "directus_activity" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "action" {
    null = false
    type = character_varying(45)
  }
  column "user" {
    null = true
    type = uuid
  }
  column "timestamp" {
    null    = false
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "ip" {
    null = true
    type = character_varying(50)
  }
  column "user_agent" {
    null = true
    type = text
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "item" {
    null = false
    type = character_varying(255)
  }
  column "origin" {
    null = true
    type = character_varying(255)
  }
  primary_key {
    columns = [column.id]
  }
  index "directus_activity_timestamp_index" {
    columns = [column.timestamp]
  }
}

table "directus_collections" {
  schema = schema.public
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "icon" {
    null = true
    type = character_varying(64)
  }
  column "note" {
    null = true
    type = text
  }
  column "display_template" {
    null = true
    type = character_varying(255)
  }
  column "hidden" {
    null    = false
    type    = boolean
    default = false
  }
  column "singleton" {
    null    = false
    type    = boolean
    default = false
  }
  column "translations" {
    null = true
    type = json
  }
  column "archive_field" {
    null = true
    type = character_varying(64)
  }
  column "archive_app_filter" {
    null    = false
    type    = boolean
    default = true
  }
  column "archive_value" {
    null = true
    type = character_varying(255)
  }
  column "unarchive_value" {
    null = true
    type = character_varying(255)
  }
  column "sort_field" {
    null = true
    type = character_varying(64)
  }
  column "accountability" {
    null    = true
    type    = character_varying(255)
    default = "all"
  }
  column "color" {
    null = true
    type = character_varying(255)
  }
  column "item_duplication_fields" {
    null = true
    type = json
  }
  column "sort" {
    null = true
    type = integer
  }
  column "group" {
    null = true
    type = character_varying(64)
  }
  column "collapse" {
    null    = false
    type    = character_varying(255)
    default = "open"
  }
  column "preview_url" {
    null = true
    type = character_varying(255)
  }
  column "versioning" {
    null    = false
    type    = boolean
    default = false
  }
  primary_key {
    columns = [column.collection]
  }
  foreign_key "directus_collections_group_foreign" {
    columns     = [column.group]
    ref_columns = [table.directus_collections.column.collection]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}

table "directus_comments" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "item" {
    null = false
    type = character_varying(255)
  }
  column "comment" {
    null = false
    type = text
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "date_updated" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  column "user_updated" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_comments_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "directus_comments_user_updated_foreign" {
    columns     = [column.user_updated]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}

table "directus_dashboards" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "icon" {
    null    = false
    type    = character_varying(64)
    default = "dashboard"
  }
  column "note" {
    null = true
    type = text
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  column "color" {
    null = true
    type = character_varying(255)
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_dashboards_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
}
table "directus_extensions" {
  schema = schema.public
  column "enabled" {
    null    = false
    type    = boolean
    default = true
  }
  column "id" {
    null = false
    type = uuid
  }
  column "folder" {
    null = false
    type = character_varying(255)
  }
  column "source" {
    null = false
    type = character_varying(255)
  }
  column "bundle" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
}
table "directus_fields" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "field" {
    null = false
    type = character_varying(64)
  }
  column "special" {
    null = true
    type = character_varying(64)
  }
  column "interface" {
    null = true
    type = character_varying(64)
  }
  column "options" {
    null = true
    type = json
  }
  column "display" {
    null = true
    type = character_varying(64)
  }
  column "display_options" {
    null = true
    type = json
  }
  column "readonly" {
    null    = false
    type    = boolean
    default = false
  }
  column "hidden" {
    null    = false
    type    = boolean
    default = false
  }
  column "sort" {
    null = true
    type = integer
  }
  column "width" {
    null    = true
    type    = character_varying(30)
    default = "full"
  }
  column "translations" {
    null = true
    type = json
  }
  column "note" {
    null = true
    type = text
  }
  column "conditions" {
    null = true
    type = json
  }
  column "required" {
    null    = true
    type    = boolean
    default = false
  }
  column "group" {
    null = true
    type = character_varying(64)
  }
  column "validation" {
    null = true
    type = json
  }
  column "validation_message" {
    null = true
    type = text
  }
  column "searchable" {
    null    = false
    type    = boolean
    default = true
  }
  primary_key {
    columns = [column.id]
  }
}
table "directus_files" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "storage" {
    null = false
    type = character_varying(255)
  }
  column "filename_disk" {
    null = true
    type = character_varying(255)
  }
  column "filename_download" {
    null = false
    type = character_varying(255)
  }
  column "title" {
    null = true
    type = character_varying(255)
  }
  column "type" {
    null = true
    type = character_varying(255)
  }
  column "folder" {
    null = true
    type = uuid
  }
  column "uploaded_by" {
    null = true
    type = uuid
  }
  column "created_on" {
    null    = false
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "modified_by" {
    null = true
    type = uuid
  }
  column "modified_on" {
    null    = false
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "charset" {
    null = true
    type = character_varying(50)
  }
  column "filesize" {
    null = true
    type = bigint
  }
  column "width" {
    null = true
    type = integer
  }
  column "height" {
    null = true
    type = integer
  }
  column "duration" {
    null = true
    type = integer
  }
  column "embed" {
    null = true
    type = character_varying(200)
  }
  column "description" {
    null = true
    type = text
  }
  column "location" {
    null = true
    type = text
  }
  column "tags" {
    null = true
    type = text
  }
  column "metadata" {
    null = true
    type = json
  }
  column "focal_point_x" {
    null = true
    type = integer
  }
  column "focal_point_y" {
    null = true
    type = integer
  }
  column "tus_id" {
    null = true
    type = character_varying(64)
  }
  column "tus_data" {
    null = true
    type = json
  }
  column "uploaded_on" {
    null = true
    type = timestamptz
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_files_folder_foreign" {
    columns     = [column.folder]
    ref_columns = [table.directus_folders.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "directus_files_modified_by_foreign" {
    columns     = [column.modified_by]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_files_uploaded_by_foreign" {
    columns     = [column.uploaded_by]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}
table "directus_flows" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "icon" {
    null = true
    type = character_varying(64)
  }
  column "color" {
    null = true
    type = character_varying(255)
  }
  column "description" {
    null = true
    type = text
  }
  column "status" {
    null    = false
    type    = character_varying(255)
    default = "active"
  }
  column "trigger" {
    null = true
    type = character_varying(255)
  }
  column "accountability" {
    null    = true
    type    = character_varying(255)
    default = "all"
  }
  column "options" {
    null = true
    type = json
  }
  column "operation" {
    null = true
    type = uuid
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_flows_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  unique "directus_flows_operation_unique" {
    columns = [column.operation]
  }
}
table "directus_folders" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "parent" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_folders_parent_foreign" {
    columns     = [column.parent]
    ref_columns = [table.directus_folders.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}
table "directus_migrations" {
  schema = schema.public
  column "version" {
    null = false
    type = character_varying(255)
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "timestamp" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  primary_key {
    columns = [column.version]
  }
}
table "directus_notifications" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "timestamp" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "status" {
    null    = true
    type    = character_varying(255)
    default = "inbox"
  }
  column "recipient" {
    null = false
    type = uuid
  }
  column "sender" {
    null = true
    type = uuid
  }
  column "subject" {
    null = false
    type = character_varying(255)
  }
  column "message" {
    null = true
    type = text
  }
  column "collection" {
    null = true
    type = character_varying(64)
  }
  column "item" {
    null = true
    type = character_varying(255)
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_notifications_recipient_foreign" {
    columns     = [column.recipient]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_notifications_sender_foreign" {
    columns     = [column.sender]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}
table "directus_operations" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = true
    type = character_varying(255)
  }
  column "key" {
    null = false
    type = character_varying(255)
  }
  column "type" {
    null = false
    type = character_varying(255)
  }
  column "position_x" {
    null = false
    type = integer
  }
  column "position_y" {
    null = false
    type = integer
  }
  column "options" {
    null = true
    type = json
  }
  column "resolve" {
    null = true
    type = uuid
  }
  column "reject" {
    null = true
    type = uuid
  }
  column "flow" {
    null = false
    type = uuid
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_operations_flow_foreign" {
    columns     = [column.flow]
    ref_columns = [table.directus_flows.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_operations_reject_foreign" {
    columns     = [column.reject]
    ref_columns = [table.directus_operations.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_operations_resolve_foreign" {
    columns     = [column.resolve]
    ref_columns = [table.directus_operations.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_operations_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  unique "directus_operations_reject_unique" {
    columns = [column.reject]
  }
  unique "directus_operations_resolve_unique" {
    columns = [column.resolve]
  }
}
table "directus_panels" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "dashboard" {
    null = false
    type = uuid
  }
  column "name" {
    null = true
    type = character_varying(255)
  }
  column "icon" {
    null    = true
    type    = character_varying(64)
    default = sql("NULL::character varying")
  }
  column "color" {
    null = true
    type = character_varying(10)
  }
  column "show_header" {
    null    = false
    type    = boolean
    default = false
  }
  column "note" {
    null = true
    type = text
  }
  column "type" {
    null = false
    type = character_varying(255)
  }
  column "position_x" {
    null = false
    type = integer
  }
  column "position_y" {
    null = false
    type = integer
  }
  column "width" {
    null = false
    type = integer
  }
  column "height" {
    null = false
    type = integer
  }
  column "options" {
    null = true
    type = json
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_panels_dashboard_foreign" {
    columns     = [column.dashboard]
    ref_columns = [table.directus_dashboards.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_panels_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
}
table "directus_permissions" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "action" {
    null = false
    type = character_varying(10)
  }
  column "permissions" {
    null = true
    type = json
  }
  column "validation" {
    null = true
    type = json
  }
  column "presets" {
    null = true
    type = json
  }
  column "fields" {
    null = true
    type = text
  }
  column "policy" {
    null = false
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_permissions_policy_foreign" {
    columns     = [column.policy]
    ref_columns = [table.directus_policies.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
}
table "directus_policies" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = false
    type = character_varying(100)
  }
  column "icon" {
    null    = false
    type    = character_varying(64)
    default = "badge"
  }
  column "description" {
    null = true
    type = text
  }
  column "ip_access" {
    null = true
    type = text
  }
  column "enforce_tfa" {
    null    = false
    type    = boolean
    default = false
  }
  column "admin_access" {
    null    = false
    type    = boolean
    default = false
  }
  column "app_access" {
    null    = false
    type    = boolean
    default = false
  }
  primary_key {
    columns = [column.id]
  }
}
table "directus_presets" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "bookmark" {
    null = true
    type = character_varying(255)
  }
  column "user" {
    null = true
    type = uuid
  }
  column "role" {
    null = true
    type = uuid
  }
  column "collection" {
    null = true
    type = character_varying(64)
  }
  column "search" {
    null = true
    type = character_varying(100)
  }
  column "layout" {
    null    = true
    type    = character_varying(100)
    default = "tabular"
  }
  column "layout_query" {
    null = true
    type = json
  }
  column "layout_options" {
    null = true
    type = json
  }
  column "refresh_interval" {
    null = true
    type = integer
  }
  column "filter" {
    null = true
    type = json
  }
  column "icon" {
    null    = true
    type    = character_varying(64)
    default = "bookmark"
  }
  column "color" {
    null = true
    type = character_varying(255)
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_presets_role_foreign" {
    columns     = [column.role]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_presets_user_foreign" {
    columns     = [column.user]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
}
table "directus_relations" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "many_collection" {
    null = false
    type = character_varying(64)
  }
  column "many_field" {
    null = false
    type = character_varying(64)
  }
  column "one_collection" {
    null = true
    type = character_varying(64)
  }
  column "one_field" {
    null = true
    type = character_varying(64)
  }
  column "one_collection_field" {
    null = true
    type = character_varying(64)
  }
  column "one_allowed_collections" {
    null = true
    type = text
  }
  column "junction_field" {
    null = true
    type = character_varying(64)
  }
  column "sort_field" {
    null = true
    type = character_varying(64)
  }
  column "one_deselect_action" {
    null    = false
    type    = character_varying(255)
    default = "nullify"
  }
  primary_key {
    columns = [column.id]
  }
}
table "directus_revisions" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "activity" {
    null = false
    type = integer
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "item" {
    null = false
    type = character_varying(255)
  }
  column "data" {
    null = true
    type = json
  }
  column "delta" {
    null = true
    type = json
  }
  column "parent" {
    null = true
    type = integer
  }
  column "version" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_revisions_activity_foreign" {
    columns     = [column.activity]
    ref_columns = [table.directus_activity.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_revisions_parent_foreign" {
    columns     = [column.parent]
    ref_columns = [table.directus_revisions.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_revisions_version_foreign" {
    columns     = [column.version]
    ref_columns = [table.directus_versions.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  index "directus_revisions_parent_index" {
    columns = [column.parent]
  }
}
table "directus_roles" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = false
    type = character_varying(100)
  }
  column "icon" {
    null    = false
    type    = character_varying(64)
    default = "supervised_user_circle"
  }
  column "description" {
    null = true
    type = text
  }
  column "parent" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_roles_parent_foreign" {
    columns     = [column.parent]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}
table "directus_sessions" {
  schema = schema.public
  column "token" {
    null = false
    type = character_varying(64)
  }
  column "user" {
    null = true
    type = uuid
  }
  column "expires" {
    null = false
    type = timestamptz
  }
  column "ip" {
    null = true
    type = character_varying(255)
  }
  column "user_agent" {
    null = true
    type = text
  }
  column "share" {
    null = true
    type = uuid
  }
  column "origin" {
    null = true
    type = character_varying(255)
  }
  column "next_token" {
    null = true
    type = character_varying(64)
  }
  primary_key {
    columns = [column.token]
  }
  foreign_key "directus_sessions_share_foreign" {
    columns     = [column.share]
    ref_columns = [table.directus_shares.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_sessions_user_foreign" {
    columns     = [column.user]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
}
table "directus_settings" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "project_name" {
    null    = false
    type    = character_varying(100)
    default = "Directus"
  }
  column "project_url" {
    null = true
    type = character_varying(255)
  }
  column "project_color" {
    null    = false
    type    = character_varying(255)
    default = "#6644FF"
  }
  column "project_logo" {
    null = true
    type = uuid
  }
  column "public_foreground" {
    null = true
    type = uuid
  }
  column "public_background" {
    null = true
    type = uuid
  }
  column "public_note" {
    null = true
    type = text
  }
  column "auth_login_attempts" {
    null    = true
    type    = integer
    default = 25
  }
  column "auth_password_policy" {
    null = true
    type = character_varying(100)
  }
  column "storage_asset_transform" {
    null    = true
    type    = character_varying(7)
    default = "all"
  }
  column "storage_asset_presets" {
    null = true
    type = json
  }
  column "custom_css" {
    null = true
    type = text
  }
  column "storage_default_folder" {
    null = true
    type = uuid
  }
  column "basemaps" {
    null = true
    type = json
  }
  column "mapbox_key" {
    null = true
    type = character_varying(255)
  }
  column "module_bar" {
    null = true
    type = json
  }
  column "project_descriptor" {
    null = true
    type = character_varying(100)
  }
  column "default_language" {
    null    = false
    type    = character_varying(255)
    default = "en-US"
  }
  column "custom_aspect_ratios" {
    null = true
    type = json
  }
  column "public_favicon" {
    null = true
    type = uuid
  }
  column "default_appearance" {
    null    = false
    type    = character_varying(255)
    default = "auto"
  }
  column "default_theme_light" {
    null = true
    type = character_varying(255)
  }
  column "theme_light_overrides" {
    null = true
    type = json
  }
  column "default_theme_dark" {
    null = true
    type = character_varying(255)
  }
  column "theme_dark_overrides" {
    null = true
    type = json
  }
  column "report_error_url" {
    null = true
    type = character_varying(255)
  }
  column "report_bug_url" {
    null = true
    type = character_varying(255)
  }
  column "report_feature_url" {
    null = true
    type = character_varying(255)
  }
  column "public_registration" {
    null    = false
    type    = boolean
    default = false
  }
  column "public_registration_verify_email" {
    null    = false
    type    = boolean
    default = true
  }
  column "public_registration_role" {
    null = true
    type = uuid
  }
  column "public_registration_email_filter" {
    null = true
    type = json
  }
  column "visual_editor_urls" {
    null = true
    type = json
  }
  column "project_id" {
    null = true
    type = uuid
  }
  column "mcp_enabled" {
    null    = false
    type    = boolean
    default = false
  }
  column "mcp_allow_deletes" {
    null    = false
    type    = boolean
    default = false
  }
  column "mcp_prompts_collection" {
    null    = true
    type    = character_varying(255)
    default = sql("NULL::character varying")
  }
  column "mcp_system_prompt_enabled" {
    null    = false
    type    = boolean
    default = true
  }
  column "mcp_system_prompt" {
    null = true
    type = text
  }
  column "project_owner" {
    null = true
    type = character_varying(255)
  }
  column "project_usage" {
    null = true
    type = character_varying(255)
  }
  column "org_name" {
    null = true
    type = character_varying(255)
  }
  column "product_updates" {
    null = true
    type = boolean
  }
  column "project_status" {
    null = true
    type = character_varying(255)
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_settings_project_logo_foreign" {
    columns     = [column.project_logo]
    ref_columns = [table.directus_files.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_settings_public_background_foreign" {
    columns     = [column.public_background]
    ref_columns = [table.directus_files.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_settings_public_favicon_foreign" {
    columns     = [column.public_favicon]
    ref_columns = [table.directus_files.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_settings_public_foreground_foreign" {
    columns     = [column.public_foreground]
    ref_columns = [table.directus_files.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
  foreign_key "directus_settings_public_registration_role_foreign" {
    columns     = [column.public_registration_role]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "directus_settings_storage_default_folder_foreign" {
    columns     = [column.storage_default_folder]
    ref_columns = [table.directus_folders.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
}
table "directus_shares" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "name" {
    null = true
    type = character_varying(255)
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "item" {
    null = false
    type = character_varying(255)
  }
  column "role" {
    null = true
    type = uuid
  }
  column "password" {
    null = true
    type = character_varying(255)
  }
  column "user_created" {
    null = true
    type = uuid
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "date_start" {
    null = true
    type = timestamptz
  }
  column "date_end" {
    null = true
    type = timestamptz
  }
  column "times_used" {
    null    = true
    type    = integer
    default = 0
  }
  column "max_uses" {
    null = true
    type = integer
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_shares_collection_foreign" {
    columns     = [column.collection]
    ref_columns = [table.directus_collections.column.collection]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_shares_role_foreign" {
    columns     = [column.role]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_shares_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
}
table "directus_translations" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "language" {
    null = false
    type = character_varying(255)
  }
  column "key" {
    null = false
    type = character_varying(255)
  }
  column "value" {
    null = false
    type = text
  }
  primary_key {
    columns = [column.id]
  }
}
table "directus_users" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "first_name" {
    null = true
    type = character_varying(50)
  }
  column "last_name" {
    null = true
    type = character_varying(50)
  }
  column "email" {
    null = true
    type = character_varying(128)
  }
  column "password" {
    null = true
    type = character_varying(255)
  }
  column "location" {
    null = true
    type = character_varying(255)
  }
  column "title" {
    null = true
    type = character_varying(50)
  }
  column "description" {
    null = true
    type = text
  }
  column "tags" {
    null = true
    type = json
  }
  column "avatar" {
    null = true
    type = uuid
  }
  column "language" {
    null    = true
    type    = character_varying(255)
    default = sql("NULL::character varying")
  }
  column "tfa_secret" {
    null = true
    type = character_varying(255)
  }
  column "status" {
    null    = false
    type    = character_varying(16)
    default = "active"
  }
  column "role" {
    null = true
    type = uuid
  }
  column "token" {
    null = true
    type = character_varying(255)
  }
  column "last_access" {
    null = true
    type = timestamptz
  }
  column "last_page" {
    null = true
    type = character_varying(255)
  }
  column "provider" {
    null    = false
    type    = character_varying(128)
    default = "default"
  }
  column "external_identifier" {
    null = true
    type = character_varying(255)
  }
  column "auth_data" {
    null = true
    type = json
  }
  column "email_notifications" {
    null    = true
    type    = boolean
    default = true
  }
  column "appearance" {
    null = true
    type = character_varying(255)
  }
  column "theme_dark" {
    null = true
    type = character_varying(255)
  }
  column "theme_light" {
    null = true
    type = character_varying(255)
  }
  column "theme_light_overrides" {
    null = true
    type = json
  }
  column "theme_dark_overrides" {
    null = true
    type = json
  }
  column "text_direction" {
    null    = false
    type    = character_varying(255)
    default = "auto"
  }
  column "organization_id" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_users_organization_id_fkey" {
    columns     = [column.organization_id]
    ref_columns = [table.organizations.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "directus_users_role_foreign" {
    columns     = [column.role]
    ref_columns = [table.directus_roles.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  index "directus_users_org_idx" {
    columns = [column.organization_id]
  }
  unique "directus_users_email_unique" {
    columns = [column.email]
  }
  unique "directus_users_external_identifier_unique" {
    columns = [column.external_identifier]
  }
  unique "directus_users_token_unique" {
    columns = [column.token]
  }
}
table "directus_versions" {
  schema = schema.public
  column "id" {
    null = false
    type = uuid
  }
  column "key" {
    null = false
    type = character_varying(64)
  }
  column "name" {
    null = true
    type = character_varying(255)
  }
  column "collection" {
    null = false
    type = character_varying(64)
  }
  column "item" {
    null = false
    type = character_varying(255)
  }
  column "hash" {
    null = true
    type = character_varying(255)
  }
  column "date_created" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "date_updated" {
    null    = true
    type    = timestamptz
    default = sql("CURRENT_TIMESTAMP")
  }
  column "user_created" {
    null = true
    type = uuid
  }
  column "user_updated" {
    null = true
    type = uuid
  }
  column "delta" {
    null = true
    type = json
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_versions_collection_foreign" {
    columns     = [column.collection]
    ref_columns = [table.directus_collections.column.collection]
    on_update   = NO_ACTION
    on_delete   = CASCADE
  }
  foreign_key "directus_versions_user_created_foreign" {
    columns     = [column.user_created]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
  foreign_key "directus_versions_user_updated_foreign" {
    columns     = [column.user_updated]
    ref_columns = [table.directus_users.column.id]
    on_update   = NO_ACTION
    on_delete   = NO_ACTION
  }
}
table "directus_webhooks" {
  schema = schema.public
  column "id" {
    null = false
    type = serial
  }
  column "name" {
    null = false
    type = character_varying(255)
  }
  column "method" {
    null    = false
    type    = character_varying(10)
    default = "POST"
  }
  column "url" {
    null = false
    type = character_varying(255)
  }
  column "status" {
    null    = false
    type    = character_varying(10)
    default = "active"
  }
  column "data" {
    null    = false
    type    = boolean
    default = true
  }
  column "actions" {
    null = false
    type = character_varying(100)
  }
  column "collections" {
    null = false
    type = character_varying(255)
  }
  column "headers" {
    null = true
    type = json
  }
  column "was_active_before_deprecation" {
    null    = false
    type    = boolean
    default = false
  }
  column "migrated_flow" {
    null = true
    type = uuid
  }
  primary_key {
    columns = [column.id]
  }
  foreign_key "directus_webhooks_migrated_flow_foreign" {
    columns     = [column.migrated_flow]
    ref_columns = [table.directus_flows.column.id]
    on_update   = NO_ACTION
    on_delete   = SET_NULL
  }
}
