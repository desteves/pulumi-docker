# Template to build *any* Docker image with Docker Build Cloud (DBC)

Builds a Docker Image from *any* repository (or URL via remote context). This template prompts the user for an existing Pulumi ESC Environment with the variables shown below.

Last revision: June 2024.

## 📋 Pre-requisites

- [Docker Build Cloud (DBC) builder](https://build.docker.com/)
- 🚨 You **must** complete the [DBC builder setup steps](https://docs.docker.com/build/cloud/setup/#steps) 🚨
- Docker Desktop / CLI
- [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)
- *Recommended* [Pulumi Cloud account](https://app.pulumi.com/signup)
- [npm](https://www.npmjs.com/get-npm)

## 👩‍🏫 Get started

This Pulumi program is written as a template. It is meant to be copied via `pulumi new`.

### Copy the template

```bash
pulumi new https://github.com/desteves/pulumi-docker/tree/main/template
npm install
```

Once copied to your machine, feel free to edit as needed. I've added [./example](./example/) for an instance of the template to compare.

### Setup a ESC Environment

- Create a [Pulumi ESC Environment](https://www.pulumi.com/docs/esc/) named `docker-env`:

  ```yaml
  values:
    environmentVariables:
      DOCKER_PAT:
        fn::secret: dckr_pat_abc123
      DOCKER_DBC_ORG: "pulumidockerdemo"
      DOCKER_DBC_BUILDER_NAME: "my-cool-builder"
      DOCKER_TAG: "madlib-chatbot:latest"
      DOCKER_USR: "nullstring"
      DOCKERFILE_REPO: "http://github.com/mikesir87/madlib-chatbot.git"
  ```

- Add to your `Pulumi.<stack>.yaml` file:

  ```bash
  pulumi config env add docker-env
  ```

### (Optional) Add Pulumi Deployments

```bash
echo "TODO"
```

## 🎬 How to run

To deploy your infrastructure, run:

```bash
$ pulumi up
# select 'yes' to confirm the expected changes
# 🎉 Ta-Da!
```

## 🧹 Clean up

To clean up your infrastructure, run:

```bash
$ pulumi destroy
# select 'yes' to confirm the expected changes
```
