const jest = require('@jest/globals').jest;

jest.mock('@rnpack/utils', () => require('./../../jest/rnpack-utils-mock'));
