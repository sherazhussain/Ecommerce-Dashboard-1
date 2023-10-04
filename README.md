# E-Commerce Dashboard

# Overview

This is an E-Commerce Dashboard developed using the Angular framework for the frontend. It leverages Chart.js for graph visualization, Tailwind CSS for styling the layout, and fxLayout for aligning elements on web pages. This readme provides an overview of the project, its features, and instructions for setup and usage.

# Features

#### Dashboard Overview:

Get a quick overview of your e-commerce business with key metrics and summaries.

#### Sales Analytics:

Visualize your sales data with interactive charts powered by Chart.js. Analyze sales trends, product performance, and customer behavior.

#### Product Management:

Manage your product catalog, view product details, and track inventory.

#### Order Processing:

Handle incoming orders, update order statuses, and manage customer interactions.

#### Responsive Design:

The dashboard is designed to work seamlessly on various screen sizes, from desktops to mobile devices.

# Technologies Used

#### Angular:

The frontend of this dashboard is developed using Angular, a popular JavaScript framework for building dynamic web applications.

#### Chart.js:

Chart.js is used for data visualization, allowing you to create interactive and informative charts to analyze your e-commerce data.

#### Tailwind CSS:

Tailwind CSS is used for styling the layout of the dashboard. It offers a utility-first approach to CSS, making it easy to create responsive and consistent designs.

#### fxLayout:

Angular Flex Layout (fxLayout) is used for managing alignments and layout on web pages. It provides a flexible and responsive way to arrange page elements.

# Getting started

1. Go to project folder and install dependencies:

```sh
npm install
```

2. Launch development server, and open `localhost:4200` in your browser:

```sh
npm start
```

# Project structure

```
dist/                        web app production build
docs/                        project docs and coding guides
cypress/                     end-to-end tests (Cypress)
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

# Main tasks

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Task                                            | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm start`                                     | Run development server on `http://localhost:4200/`                                                               |
| `npm run serve:sw`                              | Run test server on `http://localhost:4200/` with service worker enabled                                          |
| `npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder |
| `npm test`                                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode                                         |
| `npm run test:ci`                               | Lint code and run unit tests once for continuous integration                                                     |
| `npm run e2e`                                   | Run e2e tests using [Cypress](https://www.cypress.io/)                                                           |
| `npm run lint`                                  | Lint code                                                                                                        |
| `npm run translations:extract`                  | Extract strings from code and templates to `src/app/translations/template.json`                                  |
| `npm run docs`                                  | Display project documentation and coding guides                                                                  |
| `npm run prettier`                              | Automatically format all `.ts`, `.js` & `.scss` files                                                            |

When building the application, you can specify the target configuration using the additional flag
`--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build configuration is `prod`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

#### Libraries

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex Layout](https://github.com/angular/flex-layout)
- [Material Icons](https://material.io/icons/)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Moment.js](https://momentjs.com)

#### Coding guides

- [Angular](docs/coding-guides/angular.md)
- [TypeScript](docs/coding-guides/typescript.md)
- [Sass](docs/coding-guides/sass.md)
- [HTML](docs/coding-guides/html.md)
