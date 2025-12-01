const jest = require('@jest/globals').jest;

jest.mock('@rnpack/utils', () =>
  require('./../../src/__mock__/rnpack-utils-mock.js')
);
