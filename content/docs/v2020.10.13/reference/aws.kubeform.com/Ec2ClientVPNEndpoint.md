---
title: Ec2ClientVPNEndpoint
menu:
  docs_v2020.10.13:
    identifier: ec2clientvpnendpoint-aws.kubeform.com
    name: Ec2ClientVPNEndpoint
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## Ec2ClientVPNEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2ClientVPNEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2ClientVPNEndpointSpec](#ec2clientvpnendpointspec)***||
| `status` | ***[Ec2ClientVPNEndpointStatus](#ec2clientvpnendpointstatus)***||
## Ec2ClientVPNEndpointSpec

Appears on:[Ec2ClientVPNEndpoint](#ec2clientvpnendpoint), [Ec2ClientVPNEndpointStatus](#ec2clientvpnendpointstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `authenticationOptions` | ***[[]Ec2ClientVPNEndpointSpecAuthenticationOptions](#ec2clientvpnendpointspecauthenticationoptions)***||
| `clientCIDRBlock` | ***string***||
| `connectionLogOptions` | ***[[]Ec2ClientVPNEndpointSpecConnectionLogOptions](#ec2clientvpnendpointspecconnectionlogoptions)***||
| `description` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `dnsServers` | ***[]string***| ***(Optional)*** |
| `serverCertificateArn` | ***string***||
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `transportProtocol` | ***string***| ***(Optional)*** |
## Ec2ClientVPNEndpointSpecAuthenticationOptions

Appears on:[Ec2ClientVPNEndpointSpec](#ec2clientvpnendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `activeDirectoryID` | ***string***| ***(Optional)*** |
| `rootCertificateChainArn` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## Ec2ClientVPNEndpointSpecConnectionLogOptions

Appears on:[Ec2ClientVPNEndpointSpec](#ec2clientvpnendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cloudwatchLogGroup` | ***string***| ***(Optional)*** |
| `cloudwatchLogStream` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
## Ec2ClientVPNEndpointStatus

Appears on:[Ec2ClientVPNEndpoint](#ec2clientvpnendpoint)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2ClientVPNEndpointSpec](#ec2clientvpnendpointspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2ClientVPNEndpointStatus](#ec2clientvpnendpointstatus)

---
