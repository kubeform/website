---
title: ServicecatalogPortfolio
menu:
  docs_v0.0.1:
    identifier: servicecatalogportfolio-aws.kubeform.com
    name: ServicecatalogPortfolio
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ServicecatalogPortfolio
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ServicecatalogPortfolio` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServicecatalogPortfolioSpec](#ServicecatalogPortfolioSpec)***||
| `status` | ***[ServicecatalogPortfolioStatus](#ServicecatalogPortfolioStatus)***||
## ServicecatalogPortfolioSpec
##### (Appears on:[ServicecatalogPortfolio](#ServicecatalogPortfolio), [ServicecatalogPortfolioStatus](#ServicecatalogPortfolioStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `createdTime` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `providerName` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ServicecatalogPortfolioStatus
##### (Appears on:[ServicecatalogPortfolio](#ServicecatalogPortfolio))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServicecatalogPortfolioSpec](#ServicecatalogPortfolioSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
