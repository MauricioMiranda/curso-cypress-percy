const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ticketbox-backstopjs-tat.s3.eu-central-1.amazonaws.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});