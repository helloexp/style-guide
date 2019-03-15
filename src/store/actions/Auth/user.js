import Firebase from 'firebase';


export function login(email, password) {

    Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    return { type: SET_VISIBILITY_FILTER, filter }
}