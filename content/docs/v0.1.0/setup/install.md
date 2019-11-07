---
title: Install | Kubeform
menu:
  docs_v0.1.0:
    identifier: install-kubeform
    name: Install
    parent: setup
    weight: 10
menu_name: docs_v0.1.0
section_menu_id: setup
info:
  version: v0.1.0
---

# Installation Guide

Kubeform controller can be installed via Helm.

## Using Helm
Kubeform can be installed via [Helm](https://helm.sh/) using the [chart](https://github.com/kubeform/installer/tree/{{< param "info.version" >}}/chart/kubeform) from [AppsCode Charts Repository](https://github.com/appscode/charts). To install the chart with the release name `my-release`:

```console
$ helm repo add appscode https://charts.appscode.com/stable/
$ helm repo update
$ helm search appscode/kubeform
NAME                CHART VERSION  APP VERSION  DESCRIPTION
appscode/kubeform   {{< param "info.version" >}}         {{< param "info.version" >}}       Kubeform by AppsCode - Build Cloud Infrastructure from Kubernetes

$ helm install appscode/kubeform --name kfc --version {{< param "info.version" >}} --namespace kube-system --set secretKey="$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 31 | head -n 1 | base64)"
```

To see the detailed configuration options, visit [here](https://github.com/kubeform/installer/tree/{{< param "info.version" >}}/chart/kubeform).
