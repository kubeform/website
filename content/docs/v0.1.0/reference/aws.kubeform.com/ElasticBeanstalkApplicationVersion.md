---
title: ElasticBeanstalkApplicationVersion
menu:
  docs_v0.1.0:
    identifier: elasticbeanstalkapplicationversion-aws.kubeform.com
    name: ElasticBeanstalkApplicationVersion
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ElasticBeanstalkApplicationVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticBeanstalkApplicationVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticBeanstalkApplicationVersionSpec](#elasticbeanstalkapplicationversionspec)***||
| `status` | ***[ElasticBeanstalkApplicationVersionStatus](#elasticbeanstalkapplicationversionstatus)***||
## ElasticBeanstalkApplicationVersionSpec

Appears on:[ElasticBeanstalkApplicationVersion](#elasticbeanstalkapplicationversion), [ElasticBeanstalkApplicationVersionStatus](#elasticbeanstalkapplicationversionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `application` | ***string***||
| `bucket` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `forceDelete` | ***bool***| ***(Optional)*** |
| `key` | ***string***||
| `name` | ***string***||
## ElasticBeanstalkApplicationVersionStatus

Appears on:[ElasticBeanstalkApplicationVersion](#elasticbeanstalkapplicationversion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticBeanstalkApplicationVersionSpec](#elasticbeanstalkapplicationversionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticBeanstalkApplicationVersionStatus](#elasticbeanstalkapplicationversionstatus)

---
