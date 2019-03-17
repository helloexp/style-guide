import Firebase from '../../../lib/Firebase';

export function login(email, password) {
    return dispatch => new Promise((resolve, reject) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            dispatch({
                type: 'USER_LOGIN',
                data: true
            });
        }).catch(reject);
    })
}