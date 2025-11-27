import {
  base64ToString,
  byteArrayToString,
  convertStringToNumber,
  isEmpty,
  isNotEmpty,
  removeNullCharactersFromText,
  splitString,
  stringToBase64,
  stringToByteArray,
} from '../../src/utils';

const basicString = 'Basic';
const basicStringByteArray = [66, 97, 115, 105, 99];
const basicStringBase64 = 'QmFzaWM=';
const basicStringWithNullCharacters = '\0B\0as\0ic%s%s\0';
const basicNumberString = '999.0787';
const basicNumber = 999.0787;
const basicStringSplit = ['B', 'a', 's', 'i', 'c'];

describe('RNPackUtils', () => {
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

    describe('isNotEmpty', () => {
      it('Undefined', () => {
        const isValid: boolean = isNotEmpty(undefined);

        expect(isValid).toBeFalsy();
      });

      it('Null', () => {
        const isValid: boolean = isNotEmpty(null);

        expect(isValid).toBeFalsy();
      });

      it('Empty string', () => {
        const isValid: boolean = isNotEmpty('');

        expect(isValid).toBeFalsy();
      });

      it('Empty spaces', () => {
        const isValid: boolean = isNotEmpty('        ');

        expect(isValid).toBeFalsy();
      });
    });

    describe('stringToByteArray', () => {
      it('Basic', () => {
        expect(stringToByteArray(basicString)?.toString()).toEqual(
          basicStringByteArray?.toString()
        );
      });
    });

    describe('byteArrayToString', () => {
      it('Basic', () => {
        expect(byteArrayToString(basicStringByteArray)).toEqual(basicString);
      });
    });

    describe('stringToBase64', () => {
      it('Basic', () => {
        expect(stringToBase64(basicString)).toEqual(basicStringBase64);
      });
    });

    describe('base64ToString', () => {
      it('Basic', () => {
        expect(base64ToString(basicStringBase64)).toEqual(basicString);
      });
    });

    describe('removeNullCharactorsFromText', () => {
      it('Basic', () => {
        expect(
          removeNullCharactersFromText(basicStringWithNullCharacters)
        ).toEqual(basicString);
      });
    });

    describe('convertStringToNumber', () => {
      it('Basic', () => {
        expect(convertStringToNumber(basicNumberString)).toEqual(basicNumber);
      });
    });

    describe('splitString', () => {
      it('Basic', () => {
        expect(splitString(basicString, '')).toEqual(basicStringSplit);
      });
    });
  });
});
