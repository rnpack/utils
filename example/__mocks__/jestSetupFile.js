const jest = require('@jest/globals').jest;

jest.mock('@rnpack/utils', () =>
  require('./../../__mocks__/rnpack-utils-mock')
);
