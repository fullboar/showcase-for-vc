[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Lifecycle:Maturing](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# Showcase for Verifiable Credentials

## Overview

This application provides a showcase to illustrate the use cases for verifiable credentials. This application will take users through multiple steps to demonstrate how verifiable credentials are issued and verified using a compatible wallet of your choosing.

## Running 
### Copy env files
Copy the files server/.env.example  and client/.env.example to server/.env  and client/.env  
Edit the .env files to match your project needs  
  

### Option 1 - Native
Please make sure you have a recent version of node, npm, and yarn installed
These steps are executed from the root folder of the project:
  
> yarn install  
  
> yarn dev  
  
The application will now be running at http://localhost:3000

### Option 2 - Docker
These steps assume that you have docker installed  
  
These steps are executed from the root folder of the project: 
  
Build the client and server: 
> docker-compose build
  
Start the server:
> docker-compose up

Shutdown the server:
> docker-compose down

The application will now be running at http://localhost:3000/digital-trust/showcase

## Contributing

**Pull requests are always welcome!**

Please see the [Contributions Guide](CONTRIBUTING.md) for the repo.

Before contributing please run `yarn lint --fix` and fix any linter warnings in your code contribution.

You may also create an issue if you would like to suggest additional resources to include in this repository.

All contrbutions to this repository should adhere to our [Code of Conduct](./CODE_OF_CONDUCT).