---
title: GlobalacceleratorEndpointGroup
menu:
  docs_v2020.10.30:
    identifier: globalacceleratorendpointgroup-aws.kubeform.com
    name: GlobalacceleratorEndpointGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## GlobalacceleratorEndpointGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlobalacceleratorEndpointGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlobalacceleratorEndpointGroupSpec](#globalacceleratorendpointgroupspec)***||
| `status` | ***[GlobalacceleratorEndpointGroupStatus](#globalacceleratorendpointgroupstatus)***||
## GlobalacceleratorEndpointGroupSpec

Appears on:[GlobalacceleratorEndpointGroup](#globalacceleratorendpointgroup), [GlobalacceleratorEndpointGroupStatus](#globalacceleratorendpointgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `endpointConfiguration` | ***[[]GlobalacceleratorEndpointGroupSpecEndpointConfiguration](#globalacceleratorendpointgroupspecendpointconfiguration)***| ***(Optional)*** |
| `endpointGroupRegion` | ***string***| ***(Optional)*** |
| `healthCheckIntervalSeconds` | ***int64***| ***(Optional)*** |
| `healthCheckPath` | ***string***| ***(Optional)*** |
| `healthCheckPort` | ***int64***| ***(Optional)*** |
| `healthCheckProtocol` | ***string***| ***(Optional)*** |
| `listenerArn` | ***string***||
| `thresholdCount` | ***int64***| ***(Optional)*** |
| `trafficDialPercentage` | ***float64***| ***(Optional)*** |
## GlobalacceleratorEndpointGroupSpecEndpointConfiguration

Appears on:[GlobalacceleratorEndpointGroupSpec](#globalacceleratorendpointgroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `endpointID` | ***string***| ***(Optional)*** |
| `weight` | ***int64***| ***(Optional)*** |
## GlobalacceleratorEndpointGroupStatus

Appears on:[GlobalacceleratorEndpointGroup](#globalacceleratorendpointgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlobalacceleratorEndpointGroupSpec](#globalacceleratorendpointgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlobalacceleratorEndpointGroupStatus](#globalacceleratorendpointgroupstatus)

---
