# Limited Partner Data Platform

Export Schema:
```shell
npx get-graphql-schema http://localhost:8055/graphql \
  -h "Authorization=Bearer lgile_fmu-K1s8gc8iaRejSMtuN-42uw" \
  > schema.graphql
```

Start docker compose
```shell
sops exec-env config/secrets.env 'docker compose --env-file config/config.env up'
```

## DB Migrations

Check the schema-migration diff:

```shell
atlas schema diff \
  --from "postgres://usr:pswd@localhost:5432/db?sslmode=disable" \
  --to file://db-schemas --dev-url "docker://postgres/17"
```

Apply the DB migrations:

```shell
atlas schema diff \
  --url "postgres://usr:pswd@localhost:5432/db?sslmode=disable" \
  --to file://db-schemas --dev-url "docker://postgres/17"
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4ZTEyMTA0LWM4ZjQtNDY1NC04ZWQ1LWEwZjA2NGRiY2M2YSIsInJvbGUiOiJmZWRhNTczYS1lMWRmLTRhYzUtYjAzOC04NTBiOWY4NjU5MGEiLCJhcHBfYWNjZXNzIjpmYWxzZSwiYWRtaW5fYWNjZXNzIjpmYWxzZSwiaWF0IjoxNzY1ODg0ODA2LCJleHAiOjE3NjU4ODU3MDYsImlzcyI6ImRpcmVjdHVzIn0.4gxTsJf8VySaouGnT7z0mhz8lEVSrC8GQMkVX44yc8A