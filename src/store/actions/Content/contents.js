import Firebase from '../../../lib/Firebase';
let FirebaseRef = Firebase.database();

export function getComponents(){
    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.ref(`Components/`).
        then(()=>{
            console.log("got data")
        })
        .catch((err) => console.log(err) )
    })
}

export function addItem(formData){
    const {
        category,
        slug,
        content,
        type
    } = formData

    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.ref(`${type}/${category}/${slug}/`).set({
            content
        })
        .then(()=>console.log('new content added'))
        .catch(() => console.log("content update err"))
    })
}

export function editItem(formData){
    const {
        category,
        slug,
        content,
        type
    } = formData
    console.log(formData)

    return dispatch => new Promise((resolve, reject) => {
        return FirebaseRef.ref(`${type}/${category}/${slug}/`).update({
            content
        })
        .then(()=>console.log('new content edited'))
        .catch(() => console.log("content update err"))
    })
}

export function deleteItem(type, category, slug){
    return dispatch => new Promise ((resolve, reject) =>{
        return FirebaseRef.ref(`${type}/${category}/${slug}/`).delete();
    })
}