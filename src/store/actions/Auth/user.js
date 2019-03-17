import Firebase from '../../../lib/Firebase';

export function login(formData) {
    const {
        email,
        password
    } = formData
    return dispatch => new Promise((resolve, reject) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            dispatch({
                type: 'USER_LOGIN',
                data: true
            });
        }).catch((reject=>{
            console.log(reject)
            console.log('err', email)
        }));
    })
}