module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mock__/jestSetupFile.js'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/example/__test__',
    '<rootDir>/example/__mock__',
    '<rootDir>/lib/',
  ],
};
