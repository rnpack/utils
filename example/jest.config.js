const path = require('path');

module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mocks__/jestSetupFile.js'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/node_modules'],
  moduleNameMapper: {
    // Regex that matches '@rnpack/utils' and any subpath
    '^@rnpack/utils(.*)$': path.resolve(__dirname, '../src$1'),
  },
};
