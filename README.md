# Kubernetes The Mindful Way

This e-book serves as a guide inspired by the [Kubernetes The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way)
tutorial. Just like the original tutorial, its goal is to enhance understanding
of Kubernetes' fundamentals and inner workings. However, unlike the original
guide, the Mindful Way overlooks deep details and tailored for real-world
production environments and the development of custom managed services (such as
those used by cloud providers). In other words, this e-book offers a more
in-depth exploration.

It uncovers the necessary knowledge of running reliable and secure self-hosted
Kubernetes clusters. Additionally, it provides a concise yet comprehensive set
of guidelines for effective operations, including best practices for security
hardening, upgrading, patching, maintenance, and valuable tips for security and
platform engineers, and developers.

For the better experience, use the following portal:

https://kubernetes.the-mindful-way.io

## Target Audience

This e-book is a must-read for software and platform architects or those aiming
to become one. Of course, it’s also highly useful for developers, DevOps engineers,
site reliability engineers, security engineers, and cloud practitioners.

## Difference with The Hard Way

Long story short, this is deeper and more detailed version of the original tutorial.

[The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) reveals
how to bootstrap a simple self-hosted Kubernetes cluster, and "The Mindful Way"
uncovers deep details and thin configurations of the production self-hosted
clusters.

This set of articles explain the theory and practice of running self-hosted
Kubernetes clusters, whether in cloud, hybrid, or completely on-premise. It goes
a way deeper in configuration, reliability, security, software design, internal
controllers, etc. This digital book demonstrates concepts through the use of well
organized Ansible code, which can sometimes provide a more effective explanation
than written word. In addition, this code or some of its parts can be used for
the real self-hosted deployments with minimal changes.

[The Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) doesn't
cover high availability, maintenance procedures, security, threat modeling, or best
practices. This book should raise this gap and serve as an advancement of the
[Kubernetes CIS benchmark](https://www.cisecurity.org/benchmark/kubernetes).

## Author's Motivation

The main purpose of this digital book is making the software engineers around the
Earth more aware of how to apply Kubernetes. Most of all engineers use only 10% of
this powerful technology. Moreover, for some cases, inappropriate configuration of
some component might be harmful for the business. This book is designed to prevent
such issues. And, of course, to simplify software engineer's job and reduce amount
of work for architects and technical teams' managers.

## Contribution

Any contribution is very welcome! Feel free to leave a pull request, but always
remember about the following simple things:

* This book is versioned! Every new release might be a patch, minor, or major
release, as same as for software. It's sort of norm when you don't see your merged
changes in the online book, please have some patience

* For the code, snippets, and scripts, please don't forget to check the linters
and autotests (if any for the context of change). This repository also has some
pipeline automation

* For the articles, please keep the similar to other pages structure and tone

* English version is multinational one. To make it easier for the readers, please
keep the language on B1 academic level (when possible)

* Other languages are free from this recommendation. And of course, any
localization is very welcome!
