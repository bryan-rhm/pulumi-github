import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";
import * as aws from "@pulumi/aws";
import { main } from "@pulumi/pulumi/provider";

const current = github.getUser({
    username : ""
});

const repo = github.getRepository({
    name: "pulumi-github",
});

const repositoryEnvironment = new github.RepositoryEnvironment("repositoryEnvironment", {
    environment: "dev",
    repository: repo.then(repo => repo.name),
});

// const exampleVariable = new github.ActionsEnvironmentVariable("exampleVariable", {
//     repository: repo.then(repo => repo.name),
//     environment: repositoryEnvironment.environment,
//     variableName: "example_variable_name",
//     value: "example_variable_value",
// });