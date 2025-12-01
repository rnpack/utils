const jest = require('@jest/globals').jest;

jest.mock('@rnpack/utils', () =>
  require('./../../__mock__/rnpack-utils-mock.js')
);
