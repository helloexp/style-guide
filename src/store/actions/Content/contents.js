import Firebase from '../../../lib/Firebase';
var FirebaseRef = Firebase.database.ref();


export default function addItem(formData){
    const {
        category,
        slug,
        content
    } = formData


    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.child(`Components/${category}/${slug}/`).set(
            category,
            slug,
            content
        )
        .then(()=>console.log('new content added'))
        .catch(() => console.log("content update err"))

    })
}

export default function addItem(formData){
    const {
        category,
        slug,
        content
    } = formData


    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.child(`Components/${category}/${slug}/`).update(
            category,
            slug,
            content
        )
        .then(()=>console.log('new content updated'))
        .catch(() => console.log("content update err"))

    })
}