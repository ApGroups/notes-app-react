const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Base URL for your application under test
    baseUrl: 'http://localhost:3000',

    // Directory where Cypress will look for test files
    specPattern: '/home/runner/work/notes-app-react/notes-app-react/cypress/e2e/tests.cy.js',

    // Disable the support file if not used
    supportFile: false,

    // Node event listeners for Cypress
    setupNodeEvents(on, config) {
      // You can add plugins or custom event listeners here, if needed
      // Example: require('cypress-mochawesome-reporter/plugin')(on);
    },

    // Additional configuration options
    viewportWidth: 1280,  // Default viewport width
    viewportHeight: 720,  // Default viewport height
    video: true,          // Record videos of the tests
    screenshotsFolder: 'cypress/screenshots', // Location for screenshots
    videosFolder: 'cypress/videos',           // Location for videos
    reporter: 'mochawesome',                  // Use mochawesome for reporting
    reporterOptions: {
      reportDir: 'cypress/reports',           // Directory for reports
      overwrite: false,                       // Do not overwrite existing reports
      html: true,                             // Generate HTML reports
      json: true,                             // Generate JSON reports
    },
  },
});
