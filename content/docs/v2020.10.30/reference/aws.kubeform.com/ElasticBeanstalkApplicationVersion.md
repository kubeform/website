---
title: ElasticBeanstalkApplicationVersion
menu:
  docs_v2020.10.30:
    identifier: elasticbeanstalkapplicationversion-aws.kubeform.com
    name: ElasticBeanstalkApplicationVersion
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ElasticBeanstalkApplicationVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticBeanstalkApplicationVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticBeanstalkApplicationVersionSpec](#elasticbeanstalkapplicationversionspec)***||
| `status` | ***[ElasticBeanstalkApplicationVersionStatus](#elasticbeanstalkapplicationversionstatus)***||
## ElasticBeanstalkApplicationVersionSpec

Appears on:[ElasticBeanstalkApplicationVersion](#elasticbeanstalkapplicationversion), [ElasticBeanstalkApplicationVersionStatus](#elasticbeanstalkapplicationversionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `application` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `bucket` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `forceDelete` | ***bool***| ***(Optional)*** |
| `key` | ***string***||
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
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
