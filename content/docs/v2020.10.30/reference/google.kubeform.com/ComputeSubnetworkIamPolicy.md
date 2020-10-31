---
title: ComputeSubnetworkIamPolicy
menu:
  docs_v2020.10.30:
    identifier: computesubnetworkiampolicy-google.kubeform.com
    name: ComputeSubnetworkIamPolicy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ComputeSubnetworkIamPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSubnetworkIamPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSubnetworkIamPolicySpec](#computesubnetworkiampolicyspec)***||
| `status` | ***[ComputeSubnetworkIamPolicyStatus](#computesubnetworkiampolicystatus)***||
## ComputeSubnetworkIamPolicySpec

Appears on:[ComputeSubnetworkIamPolicy](#computesubnetworkiampolicy), [ComputeSubnetworkIamPolicyStatus](#computesubnetworkiampolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `policyData` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***||
## ComputeSubnetworkIamPolicyStatus

Appears on:[ComputeSubnetworkIamPolicy](#computesubnetworkiampolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSubnetworkIamPolicySpec](#computesubnetworkiampolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeSubnetworkIamPolicyStatus](#computesubnetworkiampolicystatus)

---
