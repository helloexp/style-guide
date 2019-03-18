import Firebase from '../../../lib/Firebase';

export function login(formData) {
    const {
        email,
        password
    } = formData


    return dispatch => new Promise((resolve, reject) => {
        if (!email) return reject({
            message: "Missing Email"
          });
          if (!password) return reject({
            message: "Missing Password"
          });
        return Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            return resolve(dispatch({
                type: 'USER_LOGIN',
                data: true
            }));
        }).catch((reject)=>{
            console.log(reject)
        });
    })
}