const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct msg object', () => {
        let message = generateMessage('TestUser', 'Text');

        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe('TestUser');
        expect(message.text).toBe('Text');

    })
});

describe('generateLocationMessage', () => {
    it('should generate the correct location message', () => {
        let latitude = 19.447078;
        let longitude = 98.976589;
        let location = generateLocationMessage('TestUserLocation', latitude, longitude);

        // url: `https://www.google.com/maps?q=${latitude},${longitude}`,

        expect(location.createdAt).toBeA('number');
        expect(location.url).toBe('https://www.google.com/maps?q=19.447078,98.976589');

    })
});