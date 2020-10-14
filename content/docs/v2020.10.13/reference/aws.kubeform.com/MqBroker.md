---
title: MqBroker
menu:
  docs_v2020.10.13:
    identifier: mqbroker-aws.kubeform.com
    name: MqBroker
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## MqBroker
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `MqBroker` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MqBrokerSpec](#mqbrokerspec)***||
| `status` | ***[MqBrokerStatus](#mqbrokerstatus)***||
## MqBrokerSpec

Appears on:[MqBroker](#mqbroker), [MqBrokerStatus](#mqbrokerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `applyImmediately` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `autoMinorVersionUpgrade` | ***bool***| ***(Optional)*** |
| `brokerName` | ***string***||
| `configuration` | ***[[]MqBrokerSpecConfiguration](#mqbrokerspecconfiguration)***| ***(Optional)*** |
| `deploymentMode` | ***string***| ***(Optional)*** |
| `engineType` | ***string***||
| `engineVersion` | ***string***||
| `hostInstanceType` | ***string***||
| `instances` | ***[[]MqBrokerSpecInstances](#mqbrokerspecinstances)***| ***(Optional)*** |
| `logs` | ***[[]MqBrokerSpecLogs](#mqbrokerspeclogs)***| ***(Optional)*** |
| `maintenanceWindowStartTime` | ***[[]MqBrokerSpecMaintenanceWindowStartTime](#mqbrokerspecmaintenancewindowstarttime)***| ***(Optional)*** |
| `publiclyAccessible` | ***bool***| ***(Optional)*** |
| `securityGroups` | ***[]string***||
| `subnetIDS` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `user` | ***[[]MqBrokerSpecUser](#mqbrokerspecuser)***||
## MqBrokerSpecConfiguration

Appears on:[MqBrokerSpec](#mqbrokerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `revision` | ***int64***| ***(Optional)*** |
## MqBrokerSpecInstances

Appears on:[MqBrokerSpec](#mqbrokerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consoleURL` | ***string***| ***(Optional)*** |
| `endpoints` | ***[]string***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
## MqBrokerSpecLogs

Appears on:[MqBrokerSpec](#mqbrokerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `audit` | ***bool***| ***(Optional)*** |
| `general` | ***bool***| ***(Optional)*** |
## MqBrokerSpecMaintenanceWindowStartTime

Appears on:[MqBrokerSpec](#mqbrokerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dayOfWeek` | ***string***||
| `timeOfDay` | ***string***||
| `timeZone` | ***string***||
## MqBrokerSpecUser

Appears on:[MqBrokerSpec](#mqbrokerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consoleAccess` | ***bool***| ***(Optional)*** |
| `groups` | ***[]string***| ***(Optional)*** |
| `username` | ***string***||
## MqBrokerStatus

Appears on:[MqBroker](#mqbroker)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MqBrokerSpec](#mqbrokerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MqBrokerStatus](#mqbrokerstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `user.<index>.password` | ***string*** ||
