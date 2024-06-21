// Copyright 2024, Pulumi Corporation.  All rights reserved.
import * as dockerBuild from "@pulumi/docker-build";
import * as pulumi from "@pulumi/pulumi"; // Required for Config

const config = new pulumi.Config();
const builder = "cloud-" + config.require("DOCKER_DBC_ORG") + "-" + config.require("DOCKER_DBC_BUILDER_NAME");
const dockerUsr = config.require("DOCKER_USR");
const registryAddress = "docker.io";

const gputag = registryAddress + "/" + dockerUsr + "/mike:latest";
new dockerBuild.Image("image", {
    exec: true,
    builder: {
        name: builder, // Example, "cloud-pulumidockerdemo-my-cool-builder",
    },
    push: true,
    platforms: [
        dockerBuild.Platform.Linux_amd64,
        dockerBuild.Platform.Linux_arm64,
    ],
    registries: [{
        address: registryAddress,
        username: dockerUsr,
        password: config.require("DOCKER_PAT"),
    }],
    tags: [gputag],
    context: {
        location: "https://github.com/mikesir87/hackathon-ai-app.git",
    },
    // dockerfile: {
    //     location: "Dockerfile",
    // }
});


// const remoteContextTag = registryAddress + "/" + dockerUsr + "/jan:remote-latest";
// new dockerBuild.Image("remoteContextImage", {
//     exec: true,
//     builder: {
//         name: builder,
//     },
//     push: true,
//     platforms: [
//         dockerBuild.Platform.Linux_amd64,
//         dockerBuild.Platform.Linux_arm64,
//     ],
//     registries: [{
//         address: registryAddress,
//         username: dockerUsr,
//         password: config.require("DOCKER_PAT"),
//     }],
//     tags: [remoteContextTag],
//     context: {
//         location: "https://github.com/janhq/jan.git"
//     },
// });

// const gputag = registryAddress + "/" + dockerUsr + "/jan:remote-gpu-latest";
// new dockerBuild.Image("gpuimage", {
//     exec: true,
//     builder: {
//         name: builder, // Example, "cloud-pulumidockerdemo-my-cool-builder",
//     },
//     push: true,
//     platforms: [
//         dockerBuild.Platform.Linux_amd64,
//         dockerBuild.Platform.Linux_arm64,
//     ],
//     registries: [{
//         address: registryAddress,
//         username: dockerUsr,
//         password: config.require("DOCKER_PAT"),
//     }],
//     tags: [gputag],
//     context: {
//         location: "https://github.com/janhq/jan.git",
//     },
//     dockerfile: {
//         location: "Dockerfile.gpu",
//     }
// });
