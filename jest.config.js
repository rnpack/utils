module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./jest/jestSetupFile.js'],
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/example/node_modules',
    '<rootDir>/example/__test__',
    '<rootDir>/example/__mock__',
    '<rootDir>/lib/',
  ],
};
