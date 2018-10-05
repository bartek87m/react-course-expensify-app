import authReducer from '../../reducers/auth';

test('should login', () => {
    const action = {
        type: 'LOGIN',
        uid: 1
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uuid for logout', () => {
    const action = {
        type: 'LOGOUT',
    };
    const state = authReducer('aaaa22', action);
    expect(state).toEqual({});
});