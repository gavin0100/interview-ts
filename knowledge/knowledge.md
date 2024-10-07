# File Angular.json
```
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
# The angular.json file contains configurations for the Angular CLI. When making updates, these new configurations must 
# comply with the requirements of the Angular CLI. These requirements are specified in the schema.json file


  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "jwt-ng-client": {
    # Typically, this is the name of the project. It will create a `projects` directory as a workspace and add a project named `jwt-ng-client` into this workspace at the terminal path where the CLI command is run. 
    # However, since this workspace only has one project, the jwt-ng-client directory will not be created. 
    # If the user moves this single-project workspace elsewhere, the projects directory will not be found.

      "projectType": "application",
        # this means this project is an Angular application or an library.

      "schematics": {
      # This section configures the automatic code generation commands in Angular.
        "@schematics/angular:component": {
        # his is the configuration for generating a new component.
          "style": "scss"
           # This specifies that the style files for the new component will use SCSS instead of the default CSS format
        }
      },


      "root": "",
      # This specifies the root directory of the project, which contains the source code and other files such as .github workflows, Dockerfile, package installation files, and the node_modules directory.

      "sourceRoot": "src",
      # contains the source code, other relevent file such as image, enviroments

      "prefix": "app",
      # contains the source code

      "architect": {
      # this contains configurations for different build and development tasks.

        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          # This specifies the builder to use for building the project for the browser.

          "options": {
            "allowedCommonJsDependencies": [
              "highcharts",          # A charting library.
              "date-format",         # A library for formatting dates.
              "ng-apexcharts",       # Libraries for creating charts.
              "apexcharts",          # Libraries for creating charts.
              "moment",              # A library for parsing, validating, manipulating, and formatting dates.
              "quill",               # A rich text editor. (be familiar with the tools table in word, powerpoint application)
              "jspdf-autotable",     # A plugin for jsPDF to create tables.
              "raf",                 # A polyfill for requestAnimationFrame (Creating animations, when zooming in and out of components, will be smoother, similar to 60 frames per second.)
                                     # A polyfill is a JavaScript snippet that provides functionality for features that are not supported in older browsers.
              "core-js",             # A library that provides polyfills for JavaScript features.
              "crypto"               # A library for cryptographic functions.
            ],
            # This is a list of CommonJS modules that are allowed in the project. CommonJS is a module format used in Node.js,
            # and sometimes these modules are used in Angular projects. Listing them here prevents Angular from showing warnings about these dependencies.

           "outputPath": "dist/jwt-ng-client",
            # The path to the folder that contains compiled files.

           "index": "src/index.html",
            # The main HTML file that will be served when the application is accessed through a browser.

           "main": "src/main.ts",
            # The main TypeScript file that runs when the server starts.

           "polyfills": [
              "zone.js"
           ],
           # The polyfills used to support modern JavaScript features in older browsers.

           "tsConfig": "tsconfig.app.json",
           # The configuration file for TypeScript compilation.

           "assets": [
              "src/favicon.ico",
              "src/assets"
           ],
           # Static files that will be copied to the output directory and used in the HTML.

           "styles": [
               "@angular/material/prebuilt-themes/deeppurple-amber.css",
               "src/styles.scss"
           ],
           # A list of CSS files that will be included in the application.

           "scripts": []
           # A list of JavaScript files that will be included in the application.
          },


          "configurations": {
          # this section defines configurations for enviroments such as production, development

            "production": {
            # this enviroments is used when user run `ng build --configuration=development`. In Angular, the build process will convert files to static files that run in browsers.

              "budgets": [
              # this set the max capacity of warnings, errors, component.
                {
                  "type": "initial",
                  "maximumWarning": "5mb",
                  "maximumError": "9mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2mb",
                  "maximumError": "5mb"
                }
              ],

              "outputHashing": "all"
              # always get the new version of source code.
            },
            "development": {
              "buildOptimizer": false,     #  Disables build optimization, which can reduce build time but may increase file size.

              "optimization": false,       # Disables optimization, including build optimization and minification, making debugging easier but potentially increasing file size.
              
              "vendorChunk": true,         # Enables splitting vendor files (third-party libraries) into a separate chunk, improving page load performance.

              "extractLicenses": false,    # Disables extracting licenses from JavaScript files into a separate file such as MIT, GNU, reducing the number of generated files.

              "sourceMap": true,           # Enables source maps in browser's developer tool, making it easier to debug by mapping the original source code to the compiled code.

              "namedChunks": true          # Enables naming chunks, making it easier to identify chunks during debugging.
            }
          },
          # a chunk is a block of code or a library snippet.

          "defaultConfiguration": "production"
          # set the default configurations when run projects.
        },

        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          # Specifies the builder to use for serving the application. In this case, it uses the default Angular development server builder.

          "configurations": {
          # Defines different build configurations that can be used when serving the application.

            "production": {
              "browserTarget": "jwt-ng-client:build:production"
            },
            "development": {
              "browserTarget": "jwt-ng-client:build:development"
            }
          },
          "defaultConfiguration": "development"
        },

        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "jwt-ng-client:build"
          }
        },
        # this section is configed that run properly with many languages without source code changing.

        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "@angular/material/prebuilt-themes/deeppurple-amber.css",
              "src/styles.scss"
            ],
            "scripts": [],
            "karmaConfig": "karma.conf.js"
          }
        },

        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "src/**/*.ts",
              "src/**/*.html"
            ]
          }
        }
        # Use this builder to detect problems related to coding style and conventions (the way of coding) in .ts and .html files.
      }
    },
  },
  "cli": {
  # This section is related to the Angular CLI (Command Line Interface) configuration.

    "analytics": "e344684c-4dca-46a7-9bff-b92056897bc9",
    # This field contains a unique identifier (UUID) for analytics tracking

    "schematicCollections": [
      "@angular-eslint/schematics"
    ]
    # This is an array that lists the schematic collections to be used by the Angular CLI. Schematics are templates or blueprints for generating or modifying code.
    # That means all schematics will come from builder @angular-eslint
  }
}

```


# File package.json
```
{
  # These configurations are used in the jwt-ng-client project.
  "name": "jwt-ng-client",  # The name of your project.
  "version": "1.0.0",       # The current version of your project.
  "scripts": {
    "ng": "ng",
          # Runs the Angular CLI.
    "start": "ng serve --proxy-config proxy.conf.json",
          # Starts the development server with a proxy configuration.
    "build": "ng build",
          # Builds the project.
    "watch": "ng build --watch --configuration development",
          # Builds the project in watch mode for development.
    "test": "ng test",
          # Runs the unit tests.
    "lint": "ng lint",
          #  Lints the project files. This means listing all warnings and errors that appear in each file.
    "test:ci": "ng test --watch=false --browsers=ChromeHeadlessCustom",
          # Runs the tests in a continuous integration environment using a headless Chrome browser.ChromeHeadlessCustom is a version of Chrome without a graphical user interface (GUI). It is used in automated test environments. This test environment use karma server.
    "build:ci": "ng build  --configuration production --aot"
          # Builds the project for production with Ahead-of-Time (AOT) compilation.
          # JIT (Just-in-Time): Compiles TypeScript to JavaScript and loads it into the browser when needed. AOT (Ahead-of-Time): Compiles all TypeScript files into JavaScript before deployment.
  },
  # tThis code snippet is used to shorten command lines. For example, instead of writing `ng build --watch --configuration development`, I can simply write `npm run watch`.

  # these dependencies is used in whole workspace.
  "private": true, 
        # This indicates that the project is private and should not be published to the npm registry. This means that other workspaces running in the same Node.js environment cannot use these dependencies.

  "dependencies": {
    # These are the packages required for your application to run in production.

    "@angular/animations": "^16.0.0",
      # Provides support for animations in Angular applications.
    "@angular/cdk": "^16.2.1",
      # Angular Component Dev Kit, a library of reusable components
    "@angular/common": "^16.0.0",
      # Common Angular directives and services.
      # The @angular/common package provides fundamental Angular framework functionality, including a variety of directives and services. 
      # directives: ngIf, ngFor, ngClass, ngStyle, ngSwitch
      # services: 
            # Interacts with the browser’s URL: Location.back()   
            # Performs HTTP requests: HttpClient.get(`url`).subscribe(data=>{})
    "@angular/compiler": "^16.0.0", 
      # Angular’s template compiler.
    "@angular/core": "^16.0.0",
      # Core Angular framework
    "@angular/fire": "^7.6.1",
      # he official library for Firebase and Angular
    "@angular/forms": "^16.0.0",
      # Support for template-driven and reactive forms that are designed with specified interaction.
      # A template-driven form is defined in the HTML template and interacts with the component class via ngModel.
      # A reactive form is defined using FormBuilder, FormGroup, Validators, etc., from '@angular/forms', meaning you need to use TypeScript to define these forms.
    "@angular/material": "^16.2.1",
      # Angular Material, a UI component library.
    "@angular/material-moment-adapter": "^16.2.3",
      # Adapter for using Moment.js with Angular Material. (bộ chuyển đổi)
    "@angular/platform-browser": "^16.0.0",
      # Services for interacting with the DOM.
    "@angular/platform-browser-dynamic": "^16.0.0",
      # Dynamic browser platform for Angular. This means this platform allows Angular applications to be compiled and executed directly in the browser. And this flatform conbines with JIT compilation that compile necessary components at runtime.
    "@angular/router": "^16.0.0",
      # Angular’s routing library
    "@fortawesome/angular-fontawesome": "^0.13.0",
      # Integration of Font Awesome icons with Angular.
    "@fortawesome/fontawesome-svg-core": "^6.4.0",
      # Core library for Font Awesome SVG icons.
    "@fortawesome/free-brands-svg-icons": "^6.4.0",
      # Free brand icons for Font Awesome.
    "@fortawesome/free-regular-svg-icons": "^6.4.0",
      # Free regular icons for Font Awesome.: biểu tượng thông thường (thường được hay sài)
    "@fortawesome/free-solid-svg-icons": "^6.4.0",
      # Free solid icons for Font Awesome. 
      # You have to add icon into @fortawesome/fontawesome-svg-core to integrate these in HTML.

    "@types/quill": "^1.3.10",
      # TypeScript definitions for Quill. Quill is the rich text editor or the list of tool that is familiar with tools in word, powerpoint.
    "angular-highcharts": "^16.0.0",
      # Angular wrapper for Highcharts
    "apexcharts": "^3.44.2",
      # JavaScript charting library
    "assert": "^2.1.0",
      # Assertion library for Node.js. This is familiar with assess in unit test of Java. If the expression is false, 
      # an AssertionError is thrown, which can help identify issues in your code. This means your test is failed.
    "crypto-browserify": "^3.12.0",
      # Implementation of Node’s crypto module for the browser.
    "crypto-js": "^4.2.0",
      # JavaScript library for cryptographic algorithms
    "firebase": "^10.3.1",
      # Firebase library for web applications
    "hanhchinhvn": "^1.6.0",
      # Vietnamese administrative divisions data. This contains the name of ward, district, province.
    "highcharts": "^11.1.0",
      # JavaScript charting library.
    "highlight.js": "^11.9.0",
      # Syntax highlighting library
    "html2canvas": "^1.4.1",
      # Library to take screenshots of web pages
    "https-browserify": "^1.0.0",
      # HTTPS module for the browser.
    "jspdf": "^2.5.1",
      #  Library to generate PDF files.
    "katex": "^0.16.9",
      # Library for rendering LaTeX math.
    "mapbox-gl": "^3.4.0",
      # JavaScript library for interactive maps similar to gg map.
    "moment": "^2.29.4",
      # Library for parsing, validating, and formatting dates.
    "ng-apexcharts": "^1.8.0",
      # Angular wrapper for ApexCharts. ApexCharts is a good char library.
      # An Angular wrapper is a component or library that encapsulates another library or set of functionalities, 
      # making it easier to use within an Angular application.
    "ngx-quill": "^23.0.0",
      # Angular component for Quill editor.
    "os-browserify": "^0.3.0",
      # OS module for the browser.
    "primeng": "^16.2.0",
      # UI component library for Angular.
    "puppeteer": "^21.6.1",
      # Headless browser automation library. This library use headless browser to execute tests. 
    "quill": "^1.3.7",
      # Rich text editor.
    "rxjs": "~7.8.0",
      # Reactive Extensions for JavaScript.
    "slugify": "^1.6.6",
      # Library to convert strings to URL-friendly slugs.
      # A slug is a part of a URL that is typically used to identify a particular page in a way that is 
      # easy to read and understand for both users and search engines.
    "stream-browserify": "^3.0.0",
      # Stream module for the browser.
      # Processing large files by reading them in chunks and writing small amounts of data into memory, which helps in managing memory usage efficiently.
    "stream-http": "^3.2.0",
      # HTTP module for the browser.
    "swiper": "^10.3.0",
      # ibrary for creating touch sliders.
    "tslib": "^2.3.0",
      # Runtime library for TypeScript    
    "uuid": "^10.0.0",
      # Library for generating UUIDs
    "webpack-bundle-analyzer": "^4.10.1",
      # Tool to analyze the size of webpack bundles.
      # a webpack bundle is a set of JavaScript files.
      # Angular compiles JavaScript files into multiple bundles.
      # If your web application runs slowly, this tool can help identify which bundle is too large.
    "zone.js": "~0.13.0"
      # Library for managing asynchronous operations in Angular
  },
  "devDependencies": {
    # These are the packages needed only during the development and testing phases.

    "@angular-devkit/build-angular": "^16.0.4", 
      # A toolkit for building Angular applications.
    "@angular-eslint/builder": "16.3.1",
      # Integrates ESLint into Angular projects for linting.
    "@angular-eslint/eslint-plugin": "16.3.1",
      # Provides linting specific plugin to Angular's lint.
    "@angular-eslint/eslint-plugin-template": "16.3.1",
      # Linting rules for Angular templates..
    "@angular-eslint/schematics": "16.3.1",
      # Schematics for setting up ESLint in Angular projects.
    "@angular-eslint/template-parser": "16.3.1",
      # Parses Angular templates for linting.
      # template is a piece of HTML that defines the structure and layout of a component’s view.
    "@angular/cli": "^16.2.1",
      # Command-line interface for Angular.
    "@angular/compiler-cli": "^16.0.0",
      # Angular’s compiler for TypeScript.
    "@types/jasmine": "~4.3.0",
      # Type definitions for Jasmine, a testing framework.
    "@typescript-eslint/eslint-plugin": "5.62.0",
      # ESLint plugin for TypeScript.
    "@typescript-eslint/parser": "5.62.0",
      # Parser for TypeScript to work with ESLint: phân tích cú pháp typescript để làm việc với ESLint
    "eslint": "^8.51.0",
      # A tool for identifying and reporting on patterns in JavaScript such as singleton.
    "jasmine-core": "~4.6.0",
      # Core library for Jasmine, a behavior-driven development framework for testing JavaScript code.
      # Behavior-Driven Development (BDD) is a software development methodology in Agile
    "karma": "~6.4.0",
      # A test runner for JavaScript.
    "karma-chrome-launcher": "~3.2.0",
      # Launcher for running tests in Google Chrome. 
      # Launcher is a tool or Extensions that helps you execute tests automatically in Chrome browsers.
    "karma-coverage": "~2.2.0",
      # A tool for generating code coverage reports.
    "karma-jasmine": "~5.1.0",
      #  Adapter for using Jasmine with Karma.
    "karma-jasmine-html-reporter": "~2.0.0",
      # Reporter that shows test results in the browser.
      # Karma is a test runner.
      # Jasmine is a test framework.
    "schematics-scss-migrate": "^2.3.17",
      # A tool for migrating stylesheets to SCSS. this convert css into scss
    "typescript": "~5.0.2"
    # A superset of JavaScript that adds static types. That means Typescript includes all JavaScript features and adds type annotations to help catch errors during development.
  }
}

# a runner is a tool or a service that do task automatically.
# a server is a computer system that provide resources, services, data for other computers.

# When you run commands like ng serve or ng test, the development server uses both dependencies and devDependencies to 
# compile, build, and test your application. However, when you build your application for production using ng build --prod, 
# only the dependencies are included in the final bundle, ensuring a leaner and more efficient production build.
```
