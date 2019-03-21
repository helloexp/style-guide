import React, {Component} from 'react';
import ContentForm from '../Forms/contentForm';


const AddItem = (props) =>{
    console.log(props)
    
   return(
        <div>
            <h3>Add new item</h3>
            <ContentForm onSubmit={props.onSubmitAdd} history={props.history}/>
        </div> 
   )
}

export default AddItem;