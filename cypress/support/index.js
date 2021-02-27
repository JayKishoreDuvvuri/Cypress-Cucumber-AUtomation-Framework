import './commands'
require('cypress-get-it');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

