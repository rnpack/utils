module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mocks__/jestSetupFile.js'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/example/__tests__',
    '<rootDir>/example/__mocks__',
    '<rootDir>/lib/',
  ],
};
