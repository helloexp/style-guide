import Firebase from '../../../lib/Firebase';
let FirebaseRef = Firebase.database();

export function getComponents(){
    console.log("components")
    return dispatch => new Promise((resolve, reject) => {
        return Firebase.database().ref('Components/').once('value').then((snapshot) => {
            const components = snapshot.val() || [];
            return resolve(dispatch({
                type: 'CONTENTS_COMPONENTS',
                data: components
            }));
        }) 
        
    })
}

export function getStyle(){
    return dispatch => new Promise((resolve, reject) => {
        return Firebase.database().ref('Style/').once('value').then((snapshot) => {
            const style = snapshot.val() || [];
            return resolve(dispatch({
                type: 'CONTENTS_STYLE',
                data: style
            }));
        }) 
        
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