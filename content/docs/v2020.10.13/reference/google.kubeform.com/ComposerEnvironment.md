---
title: ComposerEnvironment
menu:
  docs_v2020.10.13:
    identifier: composerenvironment-google.kubeform.com
    name: ComposerEnvironment
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ComposerEnvironment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComposerEnvironment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComposerEnvironmentSpec](#composerenvironmentspec)***||
| `status` | ***[ComposerEnvironmentStatus](#composerenvironmentstatus)***||
## ComposerEnvironmentSpec

Appears on:[ComposerEnvironment](#composerenvironment), [ComposerEnvironmentStatus](#composerenvironmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `config` | ***[[]ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
## ComposerEnvironmentSpecConfig

Appears on:[ComposerEnvironmentSpec](#composerenvironmentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `airflowURI` | ***string***| ***(Optional)*** |
| `dagGcsPrefix` | ***string***| ***(Optional)*** |
| `gkeCluster` | ***string***| ***(Optional)*** |
| `nodeConfig` | ***[[]ComposerEnvironmentSpecConfigNodeConfig](#composerenvironmentspecconfignodeconfig)***| ***(Optional)*** |
| `nodeCount` | ***int64***| ***(Optional)*** |
| `softwareConfig` | ***[[]ComposerEnvironmentSpecConfigSoftwareConfig](#composerenvironmentspecconfigsoftwareconfig)***| ***(Optional)*** |
## ComposerEnvironmentSpecConfigNodeConfig

Appears on:[ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `machineType` | ***string***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `oauthScopes` | ***[]string***| ***(Optional)*** |
| `serviceAccount` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComposerEnvironmentSpecConfigSoftwareConfig

Appears on:[ComposerEnvironmentSpecConfig](#composerenvironmentspecconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `airflowConfigOverrides` | ***map[string]string***| ***(Optional)*** |
| `envVariables` | ***map[string]string***| ***(Optional)*** |
| `imageVersion` | ***string***| ***(Optional)*** |
| `pypiPackages` | ***map[string]string***| ***(Optional)*** |
## ComposerEnvironmentStatus

Appears on:[ComposerEnvironment](#composerenvironment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComposerEnvironmentSpec](#composerenvironmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComposerEnvironmentStatus](#composerenvironmentstatus)

---
