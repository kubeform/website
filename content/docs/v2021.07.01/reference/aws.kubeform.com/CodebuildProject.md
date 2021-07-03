---
title: CodebuildProject
menu:
  docs_v2021.07.01:
    identifier: codebuildproject-aws.kubeform.com
    name: CodebuildProject
    parent: aws.kubeform.com-reference
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

## CodebuildProject
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodebuildProject` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodebuildProjectSpec](#codebuildprojectspec)***||
| `status` | ***[CodebuildProjectStatus](#codebuildprojectstatus)***||
## CodebuildProjectSpec

Appears on:[CodebuildProject](#codebuildproject), [CodebuildProjectStatus](#codebuildprojectstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `artifacts` | ***[[]CodebuildProjectSpecArtifacts](#codebuildprojectspecartifacts)***||
| `badgeEnabled` | ***bool***| ***(Optional)*** |
| `badgeURL` | ***string***| ***(Optional)*** |
| `buildTimeout` | ***int64***| ***(Optional)*** |
| `cache` | ***[[]CodebuildProjectSpecCache](#codebuildprojectspeccache)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `encryptionKey` | ***string***| ***(Optional)*** |
| `environment` | ***[[]CodebuildProjectSpecEnvironment](#codebuildprojectspecenvironment)***||
| `logsConfig` | ***[[]CodebuildProjectSpecLogsConfig](#codebuildprojectspeclogsconfig)***| ***(Optional)*** |
| `name` | ***string***||
| `secondaryArtifacts` | ***[[]CodebuildProjectSpecSecondaryArtifacts](#codebuildprojectspecsecondaryartifacts)***| ***(Optional)*** |
| `secondarySources` | ***[[]CodebuildProjectSpecSecondarySources](#codebuildprojectspecsecondarysources)***| ***(Optional)*** |
| `serviceRole` | ***string***||
| `source` | ***[[]CodebuildProjectSpecSource](#codebuildprojectspecsource)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcConfig` | ***[[]CodebuildProjectSpecVpcConfig](#codebuildprojectspecvpcconfig)***| ***(Optional)*** |
## CodebuildProjectSpecArtifacts

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `artifactIdentifier` | ***string***| ***(Optional)*** |
| `encryptionDisabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namespaceType` | ***string***| ***(Optional)*** |
| `overrideArtifactName` | ***bool***| ***(Optional)*** |
| `packaging` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## CodebuildProjectSpecCache

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `location` | ***string***| ***(Optional)*** |
| `modes` | ***[]string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## CodebuildProjectSpecEnvironment

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificate` | ***string***| ***(Optional)*** |
| `computeType` | ***string***||
| `environmentVariable` | ***[[]CodebuildProjectSpecEnvironmentEnvironmentVariable](#codebuildprojectspecenvironmentenvironmentvariable)***| ***(Optional)*** |
| `image` | ***string***||
| `imagePullCredentialsType` | ***string***| ***(Optional)*** |
| `privilegedMode` | ***bool***| ***(Optional)*** |
| `registryCredential` | ***[[]CodebuildProjectSpecEnvironmentRegistryCredential](#codebuildprojectspecenvironmentregistrycredential)***| ***(Optional)*** |
| `type` | ***string***||
## CodebuildProjectSpecEnvironmentEnvironmentVariable

Appears on:[CodebuildProjectSpecEnvironment](#codebuildprojectspecenvironment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
| `value` | ***string***||
## CodebuildProjectSpecEnvironmentRegistryCredential

Appears on:[CodebuildProjectSpecEnvironment](#codebuildprojectspecenvironment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `credential` | ***string***||
| `credentialProvider` | ***string***||
## CodebuildProjectSpecLogsConfig

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cloudwatchLogs` | ***[[]CodebuildProjectSpecLogsConfigCloudwatchLogs](#codebuildprojectspeclogsconfigcloudwatchlogs)***| ***(Optional)*** |
| `s3Logs` | ***[[]CodebuildProjectSpecLogsConfigS3Logs](#codebuildprojectspeclogsconfigs3logs)***| ***(Optional)*** |
## CodebuildProjectSpecLogsConfigCloudwatchLogs

Appears on:[CodebuildProjectSpecLogsConfig](#codebuildprojectspeclogsconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `groupName` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `streamName` | ***string***| ***(Optional)*** |
## CodebuildProjectSpecLogsConfigS3Logs

Appears on:[CodebuildProjectSpecLogsConfig](#codebuildprojectspeclogsconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encryptionDisabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
## CodebuildProjectSpecSecondaryArtifacts

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `artifactIdentifier` | ***string***||
| `encryptionDisabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namespaceType` | ***string***| ***(Optional)*** |
| `overrideArtifactName` | ***bool***| ***(Optional)*** |
| `packaging` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## CodebuildProjectSpecSecondarySources

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `auth` | ***[[]CodebuildProjectSpecSecondarySourcesAuth](#codebuildprojectspecsecondarysourcesauth)***| ***(Optional)*** |
| `buildspec` | ***string***| ***(Optional)*** |
| `gitCloneDepth` | ***int64***| ***(Optional)*** |
| `insecureSSL` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `reportBuildStatus` | ***bool***| ***(Optional)*** |
| `sourceIdentifier` | ***string***||
| `type` | ***string***||
## CodebuildProjectSpecSecondarySourcesAuth

Appears on:[CodebuildProjectSpecSecondarySources](#codebuildprojectspecsecondarysources)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## CodebuildProjectSpecSource

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `auth` | ***[[]CodebuildProjectSpecSourceAuth](#codebuildprojectspecsourceauth)***| ***(Optional)*** |
| `buildspec` | ***string***| ***(Optional)*** |
| `gitCloneDepth` | ***int64***| ***(Optional)*** |
| `insecureSSL` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `reportBuildStatus` | ***bool***| ***(Optional)*** |
| `type` | ***string***||
## CodebuildProjectSpecSourceAuth

Appears on:[CodebuildProjectSpecSource](#codebuildprojectspecsource)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## CodebuildProjectSpecVpcConfig

Appears on:[CodebuildProjectSpec](#codebuildprojectspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `securityGroupIDS` | ***[]string***||
| `subnets` | ***[]string***||
| `vpcID` | ***string***||
## CodebuildProjectStatus

Appears on:[CodebuildProject](#codebuildproject)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodebuildProjectSpec](#codebuildprojectspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CodebuildProjectStatus](#codebuildprojectstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `secondary_sources.<index>.auth.<index>.resource` | ***string*** ||
| `source.<index>.auth.<index>.resource` | ***string*** ||
