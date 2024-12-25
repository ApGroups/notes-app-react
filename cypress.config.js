const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL for your application under test
    baseUrl: 'http://localhost:3000',

    // Directory where Cypress will look for test files
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Disable the support file if not used
    supportFile: false,

    // Node event listeners for Cypress
    setupNodeEvents(on, config) {
      // Add your custom event listeners or plugins here if needed
    },

    // Additional configuration options
    viewportWidth: 1280, // Default viewport width
    viewportHeight: 720, // Default viewport height
    video: true,         // Record video of the tests
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    reporter: 'mochawesome', // Set custom reporter
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
    },
  },
})
