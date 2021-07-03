---
title: DomainRecord
menu:
  docs_v2021.07.01:
    identifier: domainrecord-linode.kubeform.com
    name: DomainRecord
    parent: linode.kubeform.com-reference
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

## DomainRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `DomainRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DomainRecordSpec](#domainrecordspec)***||
| `status` | ***[DomainRecordStatus](#domainrecordstatus)***||
## DomainRecordSpec

Appears on:[DomainRecord](#domainrecord), [DomainRecordStatus](#domainrecordstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `domainID` | ***int64***|The ID of the Domain to access.|
| `name` | ***string***| ***(Optional)*** The name of this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the subdomain being associated with an IP address. Generated for SRV records.|
| `port` | ***int64***| ***(Optional)*** The port this Record points to.|
| `priority` | ***int64***| ***(Optional)*** The priority of the target host. Lower values are preferred.|
| `protocol` | ***string***| ***(Optional)*** The protocol this Record's service communicates with. Only valid for SRV records.|
| `recordType` | ***string***|The type of Record this is in the DNS system. For example, A records associate a domain name with an IPv4 address, and AAAA records associate a domain name with an IPv6 address.|
| `service` | ***string***| ***(Optional)*** The service this Record identified. Only valid for SRV records.|
| `tag` | ***string***| ***(Optional)*** The tag portion of a CAA record. It is invalid to set this on other record types.|
| `target` | ***string***|The target for this Record. This field's actual usage depends on the type of record this represents. For A and AAAA records, this is the address the named Domain should resolve to.|
| `ttlSec` | ***int64***| ***(Optional)*** 'Time to Live' - the amount of time in seconds that this Domain's records may be cached by resolvers or other domain servers. Valid values are 0, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200 - any other value will be rounded to the nearest valid value.|
| `weight` | ***int64***| ***(Optional)*** The relative weight of this Record. Higher values are preferred.|
## DomainRecordStatus

Appears on:[DomainRecord](#domainrecord)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DomainRecordSpec](#domainrecordspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DomainRecordStatus](#domainrecordstatus)

---
