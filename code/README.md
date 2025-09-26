# Kubernetes - The Mindful Way

As you probably already guessed, this is the place of code. Here you can find
the (mostly) production grade code for deploying from scratch and maintaining
a Kubernetes cluster with the properties you need.

Please pay attention to the documentation in each folder! It may reveal some
nuances of using this code, including reliability and security things. This
is especially important when you are going to use parts of this code in
production.

## Testing

Whether it's a common code or infrastructure, we can't trust it until it has
been tested out. Since this code is "production ready", it also must be properly
tested and only then could be published. If you are a contributor, please ensure
that at least existing tests are passed. And, when you enable some new feature,
don't forget to add the corresponding tests.

If you just want to adopt this code to your own environment, you can also use it
for testing before applying to production! Follow the guidelines below, they
will help you.

We use [Ansible](https://github.com/ansible/ansible) for almost everything, thus
reasonably use [Molecule](https://github.com/ansible/molecule). Since this code
usually run on top of blank operating system, it's worth to use Molecule with
virtual machines' provisioner. Here we use "libvirt" as a universal interface to
different hypervisor engines.

## How to Use

1. Update configuration in `molecule/default/molecule.yml` file, if necessary.
There are a plenty of settings, you should enjoy.

2. Run routines:

```bash
molecule create         # Boot the instances
molecule converage      # Apply the main playbook to the instances. It's
                        # similar to call "ansible-playbook -i ... main.yaml"
molecule verify         # Run testing part. Tests are also a playbook. It's
                        # similar to call "ansible-playbook -i ... tests.yaml"
molecule side-effect    # Let's smash something :)
molecule verify         # Let's ensure that something doesn't work, or works
                        # because Kubernetes properly handled failover operation
molecule converge       # Again apply the configuration
molecule verify         # Again tests, to ensure that the main playbook can
                        # recover stuff after we broke something
molecule destroy        # Terminate the environment, free resources
```

You can read more about available routines here: [Molecule Usage](https://ansible.readthedocs.io/projects/molecule/usage/)

## Environment Design

`molecule/default/molecule.yml` defines the environment configuration. In this
file we have defined 3 control plane nodes and 2 workers. They are as small as
possible. You can also decrease the number of control plane nodes to 1, it should
also work good.

## What's here

It's always useful to know what's there and for what purpose. The most important
places here:

- `main.yaml` is the main place of it! It defines how to use the main playbook
- `tests.yaml` is also important, because it ensures that all features and
systems work as expected
- `molecule/default/molecule.yml` contains the configuration of instances.
You can specify multiple instances, even simultaneously with different configuration,
operating system, architecture, etc. The YAML structure is documented in `molecule/default/molecule.example.yml`
(for some parameters specific for this molecule driver implementation). The more
global description of this file could be found here: [Molecule Config](https://ansible.readthedocs.io/projects/molecule/configuration/)
- `molecule/default/templates/user-data.j2` container cloud-init configuration.
Yes, it uses cloud-init under the hood, as same as cloud vendors! See details
here: [Cloud-Init Docs and Examples](https://cloudinit.readthedocs.io/en/latest/reference/examples.html)
- `molecule/default/files/flavors.yaml` contains the list of pre-configured
cloud images and their settings. You might be interested to add some different
sources, images, and settings. Feel free to propose PR with changes here!

### Host OS

Install main components:

```bash
brew install ansible molecule
```

#### MacOS

Install QEMU and libvirt for MAC ([source](https://ipv6.rs/tutorial/macOS/KVM/)).
It already supports `hvf` and has UEFI images.

```bash
brew install qemu libvirt virt-manager cdrtools swtpm
brew services start libvirt

python -m venv .venv
( source .venv/bin/activate; python -m pip install -U virt-firmware )
```

<!-- #### Linux

TODO -->

<!-- #### Windows

TODO

https://libvirt.org/windows.html -->

### Guest OS

#### Linux

You shouldn't have any problems with it :) It just works with the pre-defined
images, or you can override image and use your own cloud image (see `./molecule/default/molecule.example.yml`).

If you want to upgrade some images, you can do in `./molecule/default/files/flavors.yaml`.
The structure of the file should be intuitive.

## Contribution

Every contribution is always very welcome! Your contribution can be especially
useful if you provide support of additional guest architectures, OS flavors,
update image versions and sources, etc.

Or course, there are a vast amount of ways to improve this! You are always welcome
to create an Issue, suggest your idea, or make a pull request.

## Known Issues

- Guest Windows isn't supported, however might be added later
- Host Linux and Windows haven't enabled yet, but will be added soon
- It's properly tested only on ARM64 macOS, thus might have some issues with AMD64 macOS
- I haven't succeeded with Secure Boot for AMD64 guest OS yet, most likely because of
limitations of UEFI firmware shipped with QEMU. It should be available later
