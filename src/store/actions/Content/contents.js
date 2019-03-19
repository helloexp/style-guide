import Firebase from '../../../lib/Firebase';
let FirebaseRef = Firebase.database();


export function addItem(formData){
    const {
        category,
        slug,
        content
    } = formData
    console.log(formData)


    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.ref(`Components/${category}/${slug}/`).set(
            category,
            slug,
            content
        )
        .then(()=>console.log('new content added'))
        .catch(() => console.log("content update err"))
    })
}

export function editItem(formData){
    const {
        category,
        slug,
        content
    } = formData


    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.ref(`Components/${category}/${slug}/`).update(
            category,
            slug,
            content
        )
        .then(()=>console.log('new content updated'))
        .catch(() => console.log("content update err"))
    })
}