---
title: RedisCache
menu:
  docs_v0.0.1:
    identifier: rediscache-azurerm.kubeform.com
    name: RedisCache
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## RedisCache
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RedisCache` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedisCacheSpec](#rediscachespec)***||
| `status` | ***[RedisCacheStatus](#rediscachestatus)***||
## RedisCacheSpec

Appears on:[RedisCache](#rediscache), [RedisCacheStatus](#rediscachestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `capacity` | ***int***||
| `enableNonSSLPort` | ***bool***| ***(Optional)*** |
| `family` | ***string***||
| `hostname` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `minimumTLSVersion` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `patchSchedule` | ***[[]RedisCacheSpecPatchSchedule](#rediscachespecpatchschedule)***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `privateStaticIPAddress` | ***string***| ***(Optional)*** |
| `redisConfiguration` | ***[[]RedisCacheSpecRedisConfiguration](#rediscachespecredisconfiguration)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `shardCount` | ***int***| ***(Optional)*** |
| `skuName` | ***string***||
| `sslPort` | ***int***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zones` | ***[]string***| ***(Optional)*** |
## RedisCacheSpecPatchSchedule

Appears on:[RedisCacheSpec](#rediscachespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dayOfWeek` | ***string***||
| `startHourUtc` | ***int***| ***(Optional)*** |
## RedisCacheSpecRedisConfiguration

Appears on:[RedisCacheSpec](#rediscachespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `aofBackupEnabled` | ***bool***| ***(Optional)*** |
| `enableAuthentication` | ***bool***| ***(Optional)*** |
| `maxclients` | ***int***| ***(Optional)*** |
| `maxfragmentationmemoryReserved` | ***int***| ***(Optional)*** |
| `maxmemoryDelta` | ***int***| ***(Optional)*** |
| `maxmemoryPolicy` | ***string***| ***(Optional)*** |
| `maxmemoryReserved` | ***int***| ***(Optional)*** |
| `notifyKeyspaceEvents` | ***string***| ***(Optional)*** |
| `rdbBackupEnabled` | ***bool***| ***(Optional)*** |
| `rdbBackupFrequency` | ***int***| ***(Optional)*** |
| `rdbBackupMaxSnapshotCount` | ***int***| ***(Optional)*** |
## RedisCacheStatus

Appears on:[RedisCache](#rediscache)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedisCacheSpec](#rediscachespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_access_key` | ***string*** ||
| `redis_configuration.<index>.aof_storage_connection_string_0` | ***string*** ||
| `redis_configuration.<index>.aof_storage_connection_string_1` | ***string*** ||
| `redis_configuration.<index>.rdb_storage_connection_string` | ***string*** ||
| `secondary_access_key` | ***string*** ||