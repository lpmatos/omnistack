# Be the Hero

This is [Be the Hero](https://github.com/lpmatos/omnistack) Helm Chart.

## Introduction

This chart creates a API, Frontend and Database deployment on a [Kubernetes](http://kubernetes.io) cluster using the [Helm](https://helm.sh) package manager.

It is also possible to upload a Flyway Pod to easily load data, as well as control many resources by Rancher Answers.

## Organization

* **/templates** is a directory of templates that, when combined with values.
* **/templates/_helpers.tpl** file where we define custom templates.
* **/templates/NOTES.txt** OPTIONAL: A plain text file containing short usage notes.
* **Chart.yml** A YAML file containing information about the chart.
* **values.yml** The default configuration values for this chart.
* **README.md** OPTIONAL: A human-readable README file.

## Services

* MySQL Database.
* Frontend.
* Backend.

## Kubernetes

* StatefulSet:
  * MySQL Database.
* Deployment:
  * Frontend.
  * Backend.
* Ingress:
  * Frontend.
  * Backend.
* Service:
  * MySQL Database.
  * Frontend.
  * Backend.
* Secret:
  * Mysql Secret.
  * Docker Registry Secret.
* ConfigMap:
  * Initialization Scripts.
  * Test Mysql Script.
* PersistentVolumeClaim:
  * MySQL Database.
* Pod:
  * Mysql Test.

## Validate Helm

To valite your Helm Template you can run this command:

```bash
helm install --debug --dry-run . --generate-name
```

## Exemple Answers 

```yaml
  global:
    replicaCount: 2
  ingress:
    enable: "true"
    host: "ingress.exemple.com"
  liveness: 
    enable: "true"
  readiness: 
    enable: "true"
  strategy: 
    enable: "true"
  mysql:
    root:
      password: "123456"
    db:
      password: "123456"
```

## Built with

- [Helm](https://helm.sh/)
- [YAML](https://yaml.org/)

## Add to git and push

You must send the project to your GitHub after the modifications

```bash
git add -f .
git commit -m "Added - initial files in the project"
git push origin master
```

## Versioning

- [CHANGELOG](CHANGELOG.md)

## Project Status

* 🔛 In production
