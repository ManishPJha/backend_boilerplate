# Node.js Backend Boilerplate in TypeScript
This is a Node.js backend boilerplate written in TypeScript. It includes a basic file structure and a set of modules to help you get started building a backend application.

## Pre Requirements
To run this app you need ts-node in your system. To install it run the this command:

```
npm install -g ts-node
```
or with yarn

```
yarn add global ts-node
```

## Getting Started
To get started, clone the repository and install the dependencies:

```
git clone https://github.com/ManishPJha/backend_boilerplate.git
cd backend_boilerplate
npm install
```

## File Structure
The file structure of the boilerplate is organized as follows:
```
.
├── src
│   ├── config
│       ├── config.env
│   ├── controllers
│   ├── middlewares
│   ├── routes
│   ├── models
│   └── utils
├── app.ts
├── index.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Running the Application
To start the application, use the following command:
```
npm start
```

## Build the Application
To build the application, use the following command:
```
npm run build
```
your build files exported to `build` directory.

## Built With
* Node.js - JavaScript runtime
* TypeScript - TypeScript is a superset of JavaScript which primarily provides optional static typing, classes, and interfaces.
* Express - Node.js web application framework
