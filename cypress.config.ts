/* eslint-disable import/no-anonymous-default-export */

export default {
  e2e: {
    setupNodeEvents(on, config) {
        config.baseUrl = 'http://localhost:5173';
        config.specPattern = '__tests__/E2E';
        return config;
    },
  },
};
