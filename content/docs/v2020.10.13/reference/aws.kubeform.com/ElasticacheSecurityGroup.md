---
title: ElasticacheSecurityGroup
menu:
  docs_v2020.10.13:
    identifier: elasticachesecuritygroup-aws.kubeform.com
    name: ElasticacheSecurityGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ElasticacheSecurityGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticacheSecurityGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticacheSecurityGroupSpec](#elasticachesecuritygroupspec)***||
| `status` | ***[ElasticacheSecurityGroupStatus](#elasticachesecuritygroupstatus)***||
## ElasticacheSecurityGroupSpec

Appears on:[ElasticacheSecurityGroup](#elasticachesecuritygroup), [ElasticacheSecurityGroupStatus](#elasticachesecuritygroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `securityGroupNames` | ***[]string***||
## ElasticacheSecurityGroupStatus

Appears on:[ElasticacheSecurityGroup](#elasticachesecuritygroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticacheSecurityGroupSpec](#elasticachesecuritygroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticacheSecurityGroupStatus](#elasticachesecuritygroupstatus)

---
