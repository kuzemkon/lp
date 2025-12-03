```shell
terraform apply -var-file=<(sops -d secrets.sops.tfvars)
```
