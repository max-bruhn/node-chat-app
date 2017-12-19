const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        
        expect(isRealString(3)).toBe(false);

    });

    it('should reject space-string', () => {

        expect(isRealString('   ')).toBe(false);

    });

    it('should allow string with non space characters', () => {

        expect(isRealString('Room 1')). toBe(true);

    });
});