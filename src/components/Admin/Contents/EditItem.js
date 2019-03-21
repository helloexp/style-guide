import React, {Component} from 'react';
import ContentForm from '../Forms/contentForm';

const editItem = (props) =>{
    return(
        <div>
            <h3>Edit Item</h3>
            <ContentForm onSubmit={props.onSubmitEdit} history={props.history}/>
        </div> 
    )
 }
 
 export default editItem;