---
title: DataprocJob
menu:
  docs_v0.0.1:
    identifier: dataprocjob-google.kubeform.com
    name: DataprocJob
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DataprocJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `DataprocJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataprocJobSpec](#DataprocJobSpec)***||
| `status` | ***[DataprocJobStatus](#DataprocJobStatus)***||
## DataprocJobSpec
##### (Appears on:[DataprocJob](#DataprocJob), [DataprocJobStatus](#DataprocJobStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `driverControlsFilesURI` | ***string***| ***(Optional)*** Output-only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.|
| `driverOutputResourceURI` | ***string***| ***(Optional)*** Output-only. A URI pointing to the location of the stdout of the job's driver program|
| `forceDelete` | ***bool***| ***(Optional)*** |
| `hadoopConfig` | ***[[]DataprocJobSpecHadoopConfig](#DataprocJobSpecHadoopConfig)***| ***(Optional)*** |
| `hiveConfig` | ***[[]DataprocJobSpecHiveConfig](#DataprocJobSpecHiveConfig)***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** Optional. The labels to associate with this job.|
| `pigConfig` | ***[[]DataprocJobSpecPigConfig](#DataprocJobSpecPigConfig)***| ***(Optional)*** |
| `placement` | ***[[]DataprocJobSpecPlacement](#DataprocJobSpecPlacement)***||
| `project` | ***string***| ***(Optional)*** |
| `pysparkConfig` | ***[[]DataprocJobSpecPysparkConfig](#DataprocJobSpecPysparkConfig)***| ***(Optional)*** |
| `reference` | ***[[]DataprocJobSpecReference](#DataprocJobSpecReference)***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `scheduling` | ***[[]DataprocJobSpecScheduling](#DataprocJobSpecScheduling)***| ***(Optional)*** Optional. Job scheduling configuration.|
| `sparkConfig` | ***[[]DataprocJobSpecSparkConfig](#DataprocJobSpecSparkConfig)***| ***(Optional)*** |
| `sparksqlConfig` | ***[[]DataprocJobSpecSparksqlConfig](#DataprocJobSpecSparksqlConfig)***| ***(Optional)*** |
| `status` | ***[[]DataprocJobSpecStatus](#DataprocJobSpecStatus)***| ***(Optional)*** |
## DataprocJobSpecHadoopConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `archiveUris` | ***[]string***| ***(Optional)*** |
| `args` | ***[]string***| ***(Optional)*** |
| `fileUris` | ***[]string***| ***(Optional)*** |
| `jarFileUris` | ***[]string***| ***(Optional)*** |
| `loggingConfig` | ***[[]DataprocJobSpecHadoopConfigLoggingConfig](#DataprocJobSpecHadoopConfigLoggingConfig)***| ***(Optional)*** The runtime logging config of the job|
| `mainClass` | ***string***| ***(Optional)*** |
| `mainJarFileURI` | ***string***| ***(Optional)*** |
| `properties` | ***map[string]string***| ***(Optional)*** |
## DataprocJobSpecHadoopConfigLoggingConfig
##### (Appears on:[DataprocJobSpecHadoopConfig](#DataprocJobSpecHadoopConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `driverLogLevels` | ***map[string]string***| ***(Optional)*** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.|
## DataprocJobSpecHiveConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `continueOnFailure` | ***bool***| ***(Optional)*** |
| `jarFileUris` | ***[]string***| ***(Optional)*** |
| `properties` | ***map[string]string***| ***(Optional)*** |
| `queryFileURI` | ***string***| ***(Optional)*** |
| `queryList` | ***[]string***| ***(Optional)*** |
| `scriptVariables` | ***map[string]string***| ***(Optional)*** |
## DataprocJobSpecPigConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `continueOnFailure` | ***bool***| ***(Optional)*** |
| `jarFileUris` | ***[]string***| ***(Optional)*** |
| `loggingConfig` | ***[[]DataprocJobSpecPigConfigLoggingConfig](#DataprocJobSpecPigConfigLoggingConfig)***| ***(Optional)*** The runtime logging config of the job|
| `properties` | ***map[string]string***| ***(Optional)*** |
| `queryFileURI` | ***string***| ***(Optional)*** |
| `queryList` | ***[]string***| ***(Optional)*** |
| `scriptVariables` | ***map[string]string***| ***(Optional)*** |
## DataprocJobSpecPigConfigLoggingConfig
##### (Appears on:[DataprocJobSpecPigConfig](#DataprocJobSpecPigConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `driverLogLevels` | ***map[string]string***| ***(Optional)*** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.|
## DataprocJobSpecPlacement
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `clusterName` | ***string***|The name of the cluster where the job will be submitted|
| `clusterUUID` | ***string***| ***(Optional)*** Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted|
## DataprocJobSpecPysparkConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `archiveUris` | ***[]string***| ***(Optional)*** Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip|
| `args` | ***[]string***| ***(Optional)*** Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission|
| `fileUris` | ***[]string***| ***(Optional)*** Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks|
| `jarFileUris` | ***[]string***| ***(Optional)*** Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks|
| `loggingConfig` | ***[[]DataprocJobSpecPysparkConfigLoggingConfig](#DataprocJobSpecPysparkConfigLoggingConfig)***| ***(Optional)*** The runtime logging config of the job|
| `mainPythonFileURI` | ***string***|Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file|
| `properties` | ***map[string]string***| ***(Optional)*** Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code|
| `pythonFileUris` | ***[]string***| ***(Optional)*** Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip|
## DataprocJobSpecPysparkConfigLoggingConfig
##### (Appears on:[DataprocJobSpecPysparkConfig](#DataprocJobSpecPysparkConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `driverLogLevels` | ***map[string]string***| ***(Optional)*** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.|
## DataprocJobSpecReference
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `jobID` | ***string***| ***(Optional)*** The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a means to perform retries without creating duplicate jobs|
## DataprocJobSpecScheduling
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxFailuresPerHour` | ***int***| ***(Optional)*** Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported failed.|
## DataprocJobSpecSparkConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `archiveUris` | ***[]string***| ***(Optional)*** |
| `args` | ***[]string***| ***(Optional)*** |
| `fileUris` | ***[]string***| ***(Optional)*** |
| `jarFileUris` | ***[]string***| ***(Optional)*** |
| `loggingConfig` | ***[[]DataprocJobSpecSparkConfigLoggingConfig](#DataprocJobSpecSparkConfigLoggingConfig)***| ***(Optional)*** The runtime logging config of the job|
| `mainClass` | ***string***| ***(Optional)*** |
| `mainJarFileURI` | ***string***| ***(Optional)*** |
| `properties` | ***map[string]string***| ***(Optional)*** |
## DataprocJobSpecSparkConfigLoggingConfig
##### (Appears on:[DataprocJobSpecSparkConfig](#DataprocJobSpecSparkConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `driverLogLevels` | ***map[string]string***| ***(Optional)*** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.|
## DataprocJobSpecSparksqlConfig
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `jarFileUris` | ***[]string***| ***(Optional)*** |
| `loggingConfig` | ***[[]DataprocJobSpecSparksqlConfigLoggingConfig](#DataprocJobSpecSparksqlConfigLoggingConfig)***| ***(Optional)*** The runtime logging config of the job|
| `properties` | ***map[string]string***| ***(Optional)*** |
| `queryFileURI` | ***string***| ***(Optional)*** |
| `queryList` | ***[]string***| ***(Optional)*** |
| `scriptVariables` | ***map[string]string***| ***(Optional)*** |
## DataprocJobSpecSparksqlConfigLoggingConfig
##### (Appears on:[DataprocJobSpecSparksqlConfig](#DataprocJobSpecSparksqlConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `driverLogLevels` | ***map[string]string***| ***(Optional)*** Optional. The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'.|
## DataprocJobSpecStatus
##### (Appears on:[DataprocJobSpec](#DataprocJobSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `details` | ***string***| ***(Optional)*** Output-only. Optional job state details, such as an error description if the state is ERROR|
| `state` | ***string***| ***(Optional)*** Output-only. A state message specifying the overall job state|
| `stateStartTime` | ***string***| ***(Optional)*** Output-only. The time when this state was entered|
| `substate` | ***string***| ***(Optional)*** Output-only. Additional state information, which includes status reported by the agent|
## DataprocJobStatus
##### (Appears on:[DataprocJob](#DataprocJob))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataprocJobSpec](#DataprocJobSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
