## 1. [Pre-requirements](#1-pre-requirements)
- node: +18 - latest
- yarn: +1.18 ~ latest
## 2. [Project setup and running](#2-project-setup-and-running)
clone repository
#### 2.1 `yarn` commands
- `yarn` install the dependencies in the local node_modules folder
- `yarn start` build a development version of the project and start dev server on localhost:3000
- `yarn build` build a development version of the project

#### 2.2 `husky` with these hooks is configured on the project:
`husky install` - Enables Git hooks

Husky hooks configuration is located in the root directory, in the `.husky` folder
- `pre-commit` uses `yarn lint` , `yarn test:unit` , `yarn tsc`
## 3. [Tech design](#4-tech-design)

### Structure quick overview.
- .babelrc.json - Configuration Babel file.
- .eslintrc.json - Configuration file for ESLint.
- .gitignore - ignore files or folders when commit
- .prettierrc - Configuration file for prettier.
- jest.config.ts - Configuration file for Jest.
- jest.setup.ts - Setup file for Jest.
- package.json - Managing the project's dependencies, scripts, version, etc.
- tsconfig.json - Specifies the root files, and the compiler options required to compile the project.
- src/ - Contains all of our React codebase.
- src/api - Fetch data.
- src/components - Base components.
- src/styles/ - Global styles for components.
- src/utils/ - Common project utils.

The folder structure of each component should look like this:
SomeComponent/
|-- index.tsx
|-- index.test.tsx
## 5. [Tech stack](#5-tech-stack)

SPA (single page application)

Javascript - [Typescript](https://www.typescriptlang.org/), [React](https://react.dev/)

Styling - [CSS](https://www.w3schools.com/css/)

APIs - [Axios](https://www.npmjs.com/package/axios);

## 6. [Testing](#6-testing)

To run tests locally, please run the following commands:

`yarn test:unit` - runs unit tests
`yarn test` - runs typescript checks , unit tests

Unit testing
packages: [Jest](https://jestjs.io/) | testing-library/react | testing-library/jest-dom | jest-environment-jsdom
## 7. [Project code style](#7-project-code-style)

The project uses _Airbnb React/JSX Style Guide_ [for React](https://airbnb.io/javascript/react/) and prettier

Before the deployment on servers all source code should be checked using the .eslintrc config

### 7.1 Code style settings

- Set line separators
    1. Set line separator in IDE to \n.\
       Ex. for PhpStorm/WebStorm set Editor | Code Style | Line separator to Unix and OS X (\n)
    2. Set line separator in Git by command git config core.autocrlf input

- Configure absolute paths in projects
    1. PhpStorm/Webstorm: Right-click on src folder and choose Mark Directory As | Resource Root
    2. PhpStorm/Webstorm: go to Settings | Editor | Code Style | JavaScript, choose Imports tab and tick Use paths relative to the project, resource or sources roots

- Configure Prettier
    1. PhpStorm/Webstorm: go to Settings | Languages & Frameworks | JavaScript | Prettier, and set:\
       Prettier package: `${YOUR_PATH}\admin\node_modules\prettier`\
       Run for files: {**/*,*}.{js,ts,jsx,tsx}
    2. Set if necessary: On code reformat or On save for automatically code reformat.
