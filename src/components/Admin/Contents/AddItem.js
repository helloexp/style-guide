import React, {Component} from 'react';
import ContentForm from '../Forms/contentForm';


const AddItem = (props) =>{
   return(
        <div>
            <h3>Add new item</h3>
            <ContentForm onSubmit={props.onSubmitAdd} history={props.history} match={props.match}/>
        </div> 
   )
}
export default AddItem;