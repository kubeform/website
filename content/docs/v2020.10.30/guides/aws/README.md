---
title: AWS
menu:
  docs_v2020.10.30:
    identifier: readme-aws
    name: Overview
    parent: aws-guides
    weight: 10
menu_name: docs_v2020.10.30
section_menu_id: guides
url: /docs/v2020.10.30/guides/aws/
aliases:
- /docs/v2020.10.30/guides/aws/README/
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

# AWS

This guide will show you how to provision a AWS RDS (Relational Database Service) using Kubeform.

> Examples used in this guide can be found [here](https://github.com/kubeform/docs/tree/{{< param "info.version" >}}/docs/examples/aws).

Look at the `Terraform` configuration below:

```
provider "aws" {
    access_key = "ACCESS_KEY"

    region = "us-east-1"

    secret_key = "SECRET_KEY"
}

resource "aws_db_instance" "test1" {
    allocated_storage = 5

    engine = "mysql"

    engine_version = "5.7"

    instance_class = "db.t2.micro"

    name = "mydb"

    parameter_group_name = "default.mysql5.7"

    password = "foobar1234"

    storage_type = "gp2"

    username = "foo"
}⏎
```

This config creates an AWS RDS instance. We'll create the exact configuration using `kubeform`. The steps are given below:

## 1. Create CRD:

At first, create the CRD of AWS RDS using the following kubectl command:

```console
$ kubectl apply -f https://github.com/kubeform/kubeform/raw/master/api/crds/aws.kubeform.com_dbinstances.yaml
```

## 2. Create AWS Provider Secret

Then create the secret which is necessary for provisioning the RDS instance in AWS.

```yaml
apiVersion: v1
kind: Secret
metadata:
    name: aws
type: kubeform.com/aws
data:
    region: dXMtZWFzdC0xCg==  # base64 encoded value of `us-east-1`
    access_key: '<base64 encoded access key>'
    secret_key: '<base64 encoded secret key>'
```

Here we can see that, the data of the secret is same as the field of the provider part in the terraform config file. Save it in a file (eg. `secret.yaml`) then apply it using kubectl.

```console
$ kubectl apply -f secret.yaml
```

> **Note:** here, data key (eg. `access_key`, `access_key` ) must be in snake case format (same as the tf configuration file)


## 3. Create Secrets for Sensitive Data

If we look at the terraform config, We can see that there is a field called password. This is a sensitive field. So, we should not use this kind of sensitive value directly in the yaml. We'll create a secret to store the sensitive value like this:

```yaml
apiVersion: v1
kind: Secret
metadata:
    name: rds-pass
type: kubeform.com/aws
data:
    password: Zm9vYmFyMTIzNAo=  # base64 encoded value of `foobar1234`
```

we'll reference this secret from the RDS CRD. Save it in a file (eg. `provider.yaml`) then apply it using kubectl.

```console
$ kubectl apply -f provider.yaml
```

> **Note:** here, data key (eg. `password`) must be in snake case format (same as the tf configuration file)

## 4. Create RDS

Now, we'll create the RDS CRD. The yaml is given below:

```yaml
apiVersion: aws.kubeform.com/v1alpha1
kind: DbInstance
metadata:
    name: test1
spec:
    allocatedStorage: 5
    storageType: gp2
    engine: mysql
    engineVersion: '5.7'
    instanceClass: db.t2.micro
    name: mydb
    username: foo
    parameterGroupName: default.mysql5.7
    providerRef:
        name: aws
    secretRef:
        name: rds-pass
```

Here, we can see that the provider secret is referenced using a field called `providerRef` and the sensitive value secret is referenced using a field called `secretRef`.

Save it in a file (eg. `rds.yaml`) then apply it using kubectl.

```console
$ kubectl apply -f rds.yaml
```

After that, an AWS RDS will be created!

## Delete RDS

To delete the RDS just run:

```console
kubectl delete -f rds.yaml
```
