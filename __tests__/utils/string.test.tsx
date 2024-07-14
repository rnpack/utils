import { isEmpty } from '../../src/utils';

describe('Utils', () => {
  describe('String', () => {
    describe('isEmpty', () => {
      it('Undefined', () => {
        const isValid: boolean = isEmpty(undefined);

        expect(isValid).toBeTruthy();
      });

      it('Null', () => {
        const isValid: boolean = isEmpty(null);

        expect(isValid).toBeTruthy();
      });

      it('Empty string', () => {
        const isValid: boolean = isEmpty('');

        expect(isValid).toBeTruthy();
      });

      it('Empty spaces', () => {
        const isValid: boolean = isEmpty('        ');

        expect(isValid).toBeTruthy();
      });
    });
  });
});
