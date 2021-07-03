---
title: RecoveryServicesProtectionPolicyVm
menu:
  docs_v2021.07.01:
    identifier: recoveryservicesprotectionpolicyvm-azurerm.kubeform.com
    name: RecoveryServicesProtectionPolicyVm
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## RecoveryServicesProtectionPolicyVm
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RecoveryServicesProtectionPolicyVm` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)***||
| `status` | ***[RecoveryServicesProtectionPolicyVmStatus](#recoveryservicesprotectionpolicyvmstatus)***||
## Phase(`string` alias)

Appears on:[RecoveryServicesProtectionPolicyVmStatus](#recoveryservicesprotectionpolicyvmstatus)

## RecoveryServicesProtectionPolicyVmSpec

Appears on:[RecoveryServicesProtectionPolicyVm](#recoveryservicesprotectionpolicyvm), [RecoveryServicesProtectionPolicyVmStatus](#recoveryservicesprotectionpolicyvmstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backup` | ***[[]RecoveryServicesProtectionPolicyVmSpecBackup](#recoveryservicesprotectionpolicyvmspecbackup)***||
| `name` | ***string***||
| `recoveryVaultName` | ***string***||
| `resourceGroupName` | ***string***||
| `retentionDaily` | ***[[]RecoveryServicesProtectionPolicyVmSpecRetentionDaily](#recoveryservicesprotectionpolicyvmspecretentiondaily)***| ***(Optional)*** |
| `retentionMonthly` | ***[[]RecoveryServicesProtectionPolicyVmSpecRetentionMonthly](#recoveryservicesprotectionpolicyvmspecretentionmonthly)***| ***(Optional)*** |
| `retentionWeekly` | ***[[]RecoveryServicesProtectionPolicyVmSpecRetentionWeekly](#recoveryservicesprotectionpolicyvmspecretentionweekly)***| ***(Optional)*** |
| `retentionYearly` | ***[[]RecoveryServicesProtectionPolicyVmSpecRetentionYearly](#recoveryservicesprotectionpolicyvmspecretentionyearly)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `timezone` | ***string***| ***(Optional)*** |
## RecoveryServicesProtectionPolicyVmSpecBackup

Appears on:[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `frequency` | ***string***||
| `time` | ***string***||
| `weekdays` | ***[]string***| ***(Optional)*** |
## RecoveryServicesProtectionPolicyVmSpecRetentionDaily

Appears on:[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
## RecoveryServicesProtectionPolicyVmSpecRetentionMonthly

Appears on:[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `weekdays` | ***[]string***||
| `weeks` | ***[]string***||
## RecoveryServicesProtectionPolicyVmSpecRetentionWeekly

Appears on:[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `weekdays` | ***[]string***||
## RecoveryServicesProtectionPolicyVmSpecRetentionYearly

Appears on:[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `months` | ***[]string***||
| `weekdays` | ***[]string***||
| `weeks` | ***[]string***||
## RecoveryServicesProtectionPolicyVmStatus

Appears on:[RecoveryServicesProtectionPolicyVm](#recoveryservicesprotectionpolicyvm)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RecoveryServicesProtectionPolicyVmSpec](#recoveryservicesprotectionpolicyvmspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
