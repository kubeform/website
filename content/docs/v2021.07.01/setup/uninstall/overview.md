---
title: Uninstall Kubeform
description: Uninstallation guide for Kubeform
menu:
  docs_v2021.07.01:
    identifier: uninstall-kubeform-overview
    name: Overview
    parent: uninstallation-guide
    weight: 10
product_name: kubeform
menu_name: docs_v2021.07.01
section_menu_id: setup
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

# Uninstall Kubeform

To uninstall Kubeform, run the following command:

<ul class="nav nav-tabs" id="installerTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="helm3-tab" data-toggle="tab" href="#helm3" role="tab" aria-controls="helm3" aria-selected="true">Helm 3</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="script-tab" data-toggle="tab" href="#script" role="tab" aria-controls="script" aria-selected="false">YAML</a>
  </li>
</ul>
<div class="tab-content" id="installerTabContent">
  <div class="tab-pane fade show active" id="helm3" role="tabpanel" aria-labelledby="helm3-tab">

## Using Helm 3

In Helm 3, release names are [scoped to a namespace](https://v3.helm.sh/docs/faq/#release-names-are-now-scoped-to-the-namespace). So, provide the namespace you used to install the operator when installing.

```bash
$ helm uninstall kubeform-provider-*** --namespace kubeform
```

</div>
<div class="tab-pane fade" id="script" role="tabpanel" aria-labelledby="script-tab">

## Using YAML (with helm 3)

If you prefer to not use Helm, you can generate YAMLs from Kubeform chart and uninstall using `kubectl`.

```bash
$ helm template kubeform-provider-*** appscode/kubeform-provider-*** --namespace kubeform | kubectl delete -f -
```

</div>
</div>
