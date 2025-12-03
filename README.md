# Limited Partner Data Platform

Export Schema:
```shell
npx get-graphql-schema http://localhost:8055/graphql \
  -h "Authorization=Bearer lgile_fmu-K1s8gc8iaRejSMtuN-42uw" \
  > schema.graphql
```

Ansible deploy:

```shell
ansible-playbook -i ansible/hosts.ini ansible/deploy.yml
```
