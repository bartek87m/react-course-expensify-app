import {login, logout} from '../../actions/auth';


test('should login action', () =>{
    const action = login('abc123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc123'
    });
});

test('should logout action', () =>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT',
    });
});