[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Lifecycle:Maturing](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# Showcase for Verifiable Credentials

## Overview

This application provides a showcase to illustrate the use cases for verifiable credentials. This application will take users through multiple steps to demonstrate how verifiable credentials are issued and verified using a compatible wallet of your choosing.

## Running

### .env files

Copy the files `api/.env.example` and `web/.env.example` to `api/.env ` and `web/.env`. Edit the `.env` files to match your project needs.

### Option 1 - Native

Please make sure you have a recent version of node and yarn installed. These steps are executed from the root folder of the project:

```console
yarn install
```

Run the `api` and any of the front end components (e.g. `web`) in separate terminals:

To start the `api`:

```console
cd api
yarn run dev
```

To start the `web` or `verifier` just use the `start` script that comes standard with a React Native project:

```console
cd web
yarn start
```

The showcase application will now be running at `http://localhost:3000` which you can open in your browser if it doesn't open automatically.

```console
cd verifier
yarn start
```

The verifier application will now be running at `http://localhost:3001` which you can open in your browser if it doesn't open automatically.

### Option 2 - Docker

This project comes with a `docker-compose.yaml` file which can be used to run the project in a docker container. This is the recommended way to run the project.

You can run each container seporatly if you wish. Running docker containers is outside the scope of this document. Please refer to the [Docker documentation](https://docs.docker.com/) for more information.

```console
docker compose up
```

🤓 Pro-tip

- Older version of Docker may need to use `docker-compose up` instead of `docker compose up`.
- If you want to run the containers in the background use `docker compose up -d`.

## Contributing

**Pull requests are always welcome!**

Please see the [Contributions Guide](CONTRIBUTING.md) for the repo.

Before contributing please run `yarn lint --fix` and fix any linter warnings in your code contribution.

You may also create an issue if you would like to suggest additional resources to include in this repository.

All contrbutions to this repository should adhere to our [Code of Conduct](./CODE_OF_CONDUCT).
