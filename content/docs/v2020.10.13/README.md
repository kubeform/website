---
title: Welcome | Kubeform
description: Welcome to Kubeform
menu:
  docs_v2020.10.13:
    identifier: readme
    name: Readme
    parent: welcome
    weight: -1
menu_name: docs_v2020.10.13
section_menu_id: welcome
url: /docs/v2020.10.13/welcome/
aliases:
- /docs/v2020.10.13/
- /docs/v2020.10.13/README/
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

# Kubeform

Kubeform by AppsCode is a Kubernetes operator for [Terraform](https://www.terraform.io/). Kubeform provides auto-generated Kubernetes CRDs for Terraform resources and modules so that you can manage any cloud infrastructure in a Kubernetes native way. You just write a CRD for a cloud infrastructure, apply it and Kubeform will create it for you! Kubeform currently supports 5 top cloud platforms. These are AWS, Google Cloud, Azure, Digitalocean and Linode.

The key features of Kubeform are:

- Native kubernetes support
- Built on Terraform
- Supports Terraform resources and modules
- Use cloud infrastructures as code
- Define & Manage cloud infrastructures as Kubernetes `CRD` (Custom Resource Definition)
- Supports multiple cloud platform
- 100% open source

From here you can learn all about Kubeform's architecture and how to deploy and use Kubeform.

- [Concepts](/docs/v2020.10.13/concepts/). Concepts explain some significant aspect of Kubeform. This is where you can learn about what Kubeform does and how it does it.

- [Setup](/docs/v2020.10.13/setup/). Setup contains instructions for installing
  the Kubeform in various cloud providers.

- [Guides](/docs/v2020.10.13/guides). Guides show you how to perform tasks with Kubeform.

- [Reference](/docs/v2020.10.13/reference/). Detailed exhaustive lists of
command-line options, configuration options, API definitions, and procedures.

We're always looking for help improving our documentation, so please don't hesitate to [file an issue](https://github.com/kubeform/project/issues/new) if you see some problem. Or better yet, submit your own [contributions](/docs/v2020.10.13/CONTRIBUTING) to help make our docs better.
