const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct msg object', () => {
        let message = generateMessage('TestUser', 'Text');

        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe('TestUser');
        expect(message.text).toBe('Text');

    })
});