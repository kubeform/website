---
title: DxGatewayAssociationProposal
menu:
  docs_v2020.10.30:
    identifier: dxgatewayassociationproposal-aws.kubeform.com
    name: DxGatewayAssociationProposal
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## DxGatewayAssociationProposal
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxGatewayAssociationProposal` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxGatewayAssociationProposalSpec](#dxgatewayassociationproposalspec)***||
| `status` | ***[DxGatewayAssociationProposalStatus](#dxgatewayassociationproposalstatus)***||
## DxGatewayAssociationProposalSpec

Appears on:[DxGatewayAssociationProposal](#dxgatewayassociationproposal), [DxGatewayAssociationProposalStatus](#dxgatewayassociationproposalstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowedPrefixes` | ***[]string***| ***(Optional)*** |
| `associatedGatewayID` | ***string***| ***(Optional)*** |
| `associatedGatewayOwnerAccountID` | ***string***| ***(Optional)*** |
| `associatedGatewayType` | ***string***| ***(Optional)*** |
| `dxGatewayID` | ***string***||
| `dxGatewayOwnerAccountID` | ***string***||
| `vpnGatewayID` | ***string***| ***(Optional)*** Deprecated|
## DxGatewayAssociationProposalStatus

Appears on:[DxGatewayAssociationProposal](#dxgatewayassociationproposal)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxGatewayAssociationProposalSpec](#dxgatewayassociationproposalspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DxGatewayAssociationProposalStatus](#dxgatewayassociationproposalstatus)

---
