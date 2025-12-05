# Limited Partner Data Platform

Export Schema:
```shell
npx get-graphql-schema http://localhost:8055/graphql \
  -h "Authorization=Bearer lgile_fmu-K1s8gc8iaRejSMtuN-42uw" \
  > schema.graphql
```

Start docker compose
```shell
docker compose --env-file env/compose.env --env-file=<(sops -d env/secrets.env) up
```
