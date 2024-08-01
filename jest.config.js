module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mock__/jestSetupFile.js'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/lib/',
  ],
};
