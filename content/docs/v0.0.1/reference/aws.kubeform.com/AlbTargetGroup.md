---
title: AlbTargetGroup
menu:
  docs_v0.0.1:
    identifier: albtargetgroup-aws.kubeform.com
    name: AlbTargetGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AlbTargetGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AlbTargetGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbTargetGroupSpec](#AlbTargetGroupSpec)***||
| `status` | ***[AlbTargetGroupStatus](#AlbTargetGroupStatus)***||
## AlbTargetGroupSpec
##### (Appears on:[AlbTargetGroup](#AlbTargetGroup), [AlbTargetGroupStatus](#AlbTargetGroupStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `arnSuffix` | ***string***| ***(Optional)*** |
| `deregistrationDelay` | ***int***| ***(Optional)*** |
| `healthCheck` | ***[[]AlbTargetGroupSpecHealthCheck](#AlbTargetGroupSpecHealthCheck)***| ***(Optional)*** |
| `lambdaMultiValueHeadersEnabled` | ***bool***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `proxyProtocolV2` | ***bool***| ***(Optional)*** |
| `slowStart` | ***int***| ***(Optional)*** |
| `stickiness` | ***[[]AlbTargetGroupSpecStickiness](#AlbTargetGroupSpecStickiness)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `targetType` | ***string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## AlbTargetGroupSpecHealthCheck
##### (Appears on:[AlbTargetGroupSpec](#AlbTargetGroupSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
| `healthyThreshold` | ***int***| ***(Optional)*** |
| `interval` | ***int***| ***(Optional)*** |
| `matcher` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***string***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `timeout` | ***int***| ***(Optional)*** |
| `unhealthyThreshold` | ***int***| ***(Optional)*** |
## AlbTargetGroupSpecStickiness
##### (Appears on:[AlbTargetGroupSpec](#AlbTargetGroupSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `cookieDuration` | ***int***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `type` | ***string***||
## AlbTargetGroupStatus
##### (Appears on:[AlbTargetGroup](#AlbTargetGroup))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbTargetGroupSpec](#AlbTargetGroupSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
