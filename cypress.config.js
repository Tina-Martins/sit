const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "k16222",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
