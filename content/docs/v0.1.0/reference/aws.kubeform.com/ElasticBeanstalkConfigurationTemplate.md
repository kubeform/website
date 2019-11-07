---
title: ElasticBeanstalkConfigurationTemplate
menu:
  docs_v0.1.0:
    identifier: elasticbeanstalkconfigurationtemplate-aws.kubeform.com
    name: ElasticBeanstalkConfigurationTemplate
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ElasticBeanstalkConfigurationTemplate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticBeanstalkConfigurationTemplate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticBeanstalkConfigurationTemplateSpec](#elasticbeanstalkconfigurationtemplatespec)***||
| `status` | ***[ElasticBeanstalkConfigurationTemplateStatus](#elasticbeanstalkconfigurationtemplatestatus)***||
## ElasticBeanstalkConfigurationTemplateSpec

Appears on:[ElasticBeanstalkConfigurationTemplate](#elasticbeanstalkconfigurationtemplate), [ElasticBeanstalkConfigurationTemplateStatus](#elasticbeanstalkconfigurationtemplatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `application` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `environmentID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `setting` | ***[[]ElasticBeanstalkConfigurationTemplateSpecSetting](#elasticbeanstalkconfigurationtemplatespecsetting)***| ***(Optional)*** |
| `solutionStackName` | ***string***| ***(Optional)*** |
## ElasticBeanstalkConfigurationTemplateSpecSetting

Appears on:[ElasticBeanstalkConfigurationTemplateSpec](#elasticbeanstalkconfigurationtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `namespace` | ***string***||
| `resource` | ***string***| ***(Optional)*** |
| `value` | ***string***||
## ElasticBeanstalkConfigurationTemplateStatus

Appears on:[ElasticBeanstalkConfigurationTemplate](#elasticbeanstalkconfigurationtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticBeanstalkConfigurationTemplateSpec](#elasticbeanstalkconfigurationtemplatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticBeanstalkConfigurationTemplateStatus](#elasticbeanstalkconfigurationtemplatestatus)

---
