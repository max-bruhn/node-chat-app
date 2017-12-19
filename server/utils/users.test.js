const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Room 1'
        },
        {
            id: '2',
            name: 'Ben',
            room: 'Room 2'
        },
        {
            id: '3',
            name: 'Julie',
            room: 'Room 1'
        }];
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andrew',
            room: 'room 1'
        };

        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        // let users = new Users();
        
        // expect(users.removeUser('1').toBe('Mike'));
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '99';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
        
    });

    it('should find a user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '99';
        let user = users.getUser(userId);

        expect(user).toNotExist();
    });

    it('should return names for room 1', () => {
        let userList = users.getUserList('Room 1');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for room 2', () => {
        let userList = users.getUserList('Room 2');

        expect(userList).toEqual(['Ben']);
    });
})