---
title: Loadbalancer
menu:
  docs_v0.1.0:
    identifier: loadbalancer-digitalocean.kubeform.com
    name: Loadbalancer
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## Loadbalancer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Loadbalancer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoadbalancerSpec](#loadbalancerspec)***||
| `status` | ***[LoadbalancerStatus](#loadbalancerstatus)***||
## LoadbalancerSpec

Appears on:[Loadbalancer](#loadbalancer), [LoadbalancerStatus](#loadbalancerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `algorithm` | ***string***| ***(Optional)*** |
| `dropletIDS` | ***[]int64***| ***(Optional)*** |
| `dropletTag` | ***string***| ***(Optional)*** |
| `enableProxyProtocol` | ***bool***| ***(Optional)*** |
| `forwardingRule` | ***[[]LoadbalancerSpecForwardingRule](#loadbalancerspecforwardingrule)***||
| `healthcheck` | ***[[]LoadbalancerSpecHealthcheck](#loadbalancerspechealthcheck)***| ***(Optional)*** |
| `ip` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `redirectHTTPToHTTPS` | ***bool***| ***(Optional)*** |
| `region` | ***string***||
| `status` | ***string***| ***(Optional)*** |
| `stickySessions` | ***[[]LoadbalancerSpecStickySessions](#loadbalancerspecstickysessions)***| ***(Optional)*** |
| `urn` | ***string***| ***(Optional)*** the uniform resource name for the load balancer|
## LoadbalancerSpecForwardingRule

Appears on:[LoadbalancerSpec](#loadbalancerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificateID` | ***string***| ***(Optional)*** |
| `entryPort` | ***int64***||
| `entryProtocol` | ***string***||
| `targetPort` | ***int64***||
| `targetProtocol` | ***string***||
| `tlsPassthrough` | ***bool***| ***(Optional)*** |
## LoadbalancerSpecHealthcheck

Appears on:[LoadbalancerSpec](#loadbalancerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `checkIntervalSeconds` | ***int64***| ***(Optional)*** |
| `healthyThreshold` | ***int64***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***int64***||
| `protocol` | ***string***||
| `responseTimeoutSeconds` | ***int64***| ***(Optional)*** |
| `unhealthyThreshold` | ***int64***| ***(Optional)*** |
## LoadbalancerSpecStickySessions

Appears on:[LoadbalancerSpec](#loadbalancerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cookieName` | ***string***| ***(Optional)*** |
| `cookieTtlSeconds` | ***int64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## LoadbalancerStatus

Appears on:[Loadbalancer](#loadbalancer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoadbalancerSpec](#loadbalancerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoadbalancerStatus](#loadbalancerstatus)

---
