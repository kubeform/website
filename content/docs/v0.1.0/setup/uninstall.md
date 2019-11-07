---
title: Uninstall | Kubeform
menu:
  docs_v0.1.0:
    identifier: uninstall-kubeform
    name: Uninstall
    parent: setup
    weight: 20
menu_name: docs_v0.1.0
section_menu_id: setup
info:
  version: v0.1.0
---

# Uninstall Kubeform

To uninstall Kubeform installed using helm, use the following command.

```console
$ helm delete kfc
```

If you want to remove the release from the store and make its name free for later use, Then provide the `--purge` flag:

```console
$ helm delete kfc --purge
```