---
title: WafregionalSQLInjectionMatchSet
menu:
  docs_v0.0.1:
    identifier: wafregionalsqlinjectionmatchset-aws.kubeform.com
    name: WafregionalSQLInjectionMatchSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## WafregionalSQLInjectionMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalSQLInjectionMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalSQLInjectionMatchSetSpec](#wafregionalsqlinjectionmatchsetspec)***||
| `status` | ***[WafregionalSQLInjectionMatchSetStatus](#wafregionalsqlinjectionmatchsetstatus)***||
## WafregionalSQLInjectionMatchSetSpec

Appears on:[WafregionalSQLInjectionMatchSet](#wafregionalsqlinjectionmatchset), [WafregionalSQLInjectionMatchSetStatus](#wafregionalsqlinjectionmatchsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `sqlInjectionMatchTuple` | ***[[]WafregionalSQLInjectionMatchSetSpecSqlInjectionMatchTuple](#wafregionalsqlinjectionmatchsetspecsqlinjectionmatchtuple)***| ***(Optional)*** |
## WafregionalSQLInjectionMatchSetSpecSqlInjectionMatchTuple

Appears on:[WafregionalSQLInjectionMatchSetSpec](#wafregionalsqlinjectionmatchsetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fieldToMatch` | ***[[]WafregionalSQLInjectionMatchSetSpecSqlInjectionMatchTupleFieldToMatch](#wafregionalsqlinjectionmatchsetspecsqlinjectionmatchtuplefieldtomatch)***||
| `textTransformation` | ***string***||
## WafregionalSQLInjectionMatchSetSpecSqlInjectionMatchTupleFieldToMatch

Appears on:[WafregionalSQLInjectionMatchSetSpecSqlInjectionMatchTuple](#wafregionalsqlinjectionmatchsetspecsqlinjectionmatchtuple)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafregionalSQLInjectionMatchSetStatus

Appears on:[WafregionalSQLInjectionMatchSet](#wafregionalsqlinjectionmatchset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalSQLInjectionMatchSetSpec](#wafregionalsqlinjectionmatchsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
