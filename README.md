# Cypress-Cucumber: Page Objects Automation Framework

An example project demonstrating automated UI tests using JavaScript-based end-to-end testing with Cypress-Cucumber with Page Object Design Framework.

## Application Under Test

We are using http://localhost:3000 as the Application Under Test.

* URL : http://localhost:3000

### Installation

Install the dependencies and devDependencies to run the test.
- Clone this repo on your local machine
- Navigate to project's directory on terminal and run the following commands:

```sh
npm install
```

### Start ReactJS Application

Run the following command on Terminal to open the website

```sh
npm start
```

### Execute Tests

Run the following command in Terminal to execute tests in Headless mode:

```sh
npm run cy:run:headless
```

Run the following command in Terminal to execute tests in Chrome, Firefox and Electron:

```sh
npm run cy:run:chrome
npm run cy:run:firefox
npm run cy:run:electron
```

Run the following command on Terminal to open Cypress Test Runner:

```sh
npm run cy:open  (OR) npx cypress open
```

### Folder Structure
In the folder cypress > integration, all the info related to the application is found, like features, pages and step definitions.

Top - Level Directory Layout

```sh
.
├── CY-BDD-TESTS                              # Here you can find the entire project.
|    ├── cypress                              # This folder contains all the cypress structure
│           ├── fixtures                      # Fixtures are used as external pieces of static data that can be used by your tests   
|           ├── integration                   # Folder that includes the whole framework structure
|                   ├── Cucumber-bdd-tests    # Folder with all the Feature files which are actual tests to execute with '.feature' extension
|                   ├── pages                 # all the pages for respective features
|                   ├── selectors             # Locators with respective to specific page
|                   └── step_definitions      # Step Definitions for each Feauture file/ Test
| 
| 
| 
| 
|       ├── plugins                          # Plugins that enable to modify the internal behavior of Cypress
|       ├── Screenshots                      # Screenshots on error and exceptions
|       ├── support                          # Place for reusable behavior or Custom Commands. Opening url is re-used from here
|       ├── report.js                        # Config file to generate cucumber HTML Report
|       ├── cucumber-report                  # Test results and report on HTML        
|                   
|
|   ├── node_modules                                      
|   ├── .prettierrc                  
|   ├── cypress.json                         # Configuration file for Cypress
|   ├── package-lock.json            
|   ├── package.json                         # Lists of packages
|   └── README.md
```

### Test Report

You can find the cucumber-html-report in the following directory of the Project.

```sh
cucumber_report\html\cucumber_report.html
```

Open 'cucumber_report.html' file to view the test report
             (OR)
On terminal type 'node report.js' and hit { Enter } to view the test report

