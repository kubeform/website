---
title: ApiGatewayDomainName
menu:
  docs_v2020.10.13:
    identifier: apigatewaydomainname-aws.kubeform.com
    name: ApiGatewayDomainName
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ApiGatewayDomainName
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayDomainName` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayDomainNameSpec](#apigatewaydomainnamespec)***||
| `status` | ***[ApiGatewayDomainNameStatus](#apigatewaydomainnamestatus)***||
## ApiGatewayDomainNameSpec

Appears on:[ApiGatewayDomainName](#apigatewaydomainname), [ApiGatewayDomainNameStatus](#apigatewaydomainnamestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `certificateArn` | ***string***| ***(Optional)*** |
| `certificateBody` | ***string***| ***(Optional)*** |
| `certificateChain` | ***string***| ***(Optional)*** |
| `certificateName` | ***string***| ***(Optional)*** |
| `certificateUploadDate` | ***string***| ***(Optional)*** |
| `cloudfrontDomainName` | ***string***| ***(Optional)*** |
| `cloudfrontZoneID` | ***string***| ***(Optional)*** |
| `domainName` | ***string***||
| `endpointConfiguration` | ***[[]ApiGatewayDomainNameSpecEndpointConfiguration](#apigatewaydomainnamespecendpointconfiguration)***| ***(Optional)*** |
| `regionalCertificateArn` | ***string***| ***(Optional)*** |
| `regionalCertificateName` | ***string***| ***(Optional)*** |
| `regionalDomainName` | ***string***| ***(Optional)*** |
| `regionalZoneID` | ***string***| ***(Optional)*** |
## ApiGatewayDomainNameSpecEndpointConfiguration

Appears on:[ApiGatewayDomainNameSpec](#apigatewaydomainnamespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `types` | ***[]string***||
## ApiGatewayDomainNameStatus

Appears on:[ApiGatewayDomainName](#apigatewaydomainname)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayDomainNameSpec](#apigatewaydomainnamespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayDomainNameStatus](#apigatewaydomainnamestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `certificate_private_key` | ***string*** ||
