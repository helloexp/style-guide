import React, {Component} from 'react';
import ContentForm from '../Forms/contentForm';

const editItem = (props) =>{
    console.log(props)
    const section = props.match.params.slug;
    const type = props.match.params.type;

    const data = props.contents.contents[type][section];
    console.log(data)
    return(
        <div>
            <h3>Edit Item</h3>
            <ContentForm 
                content={data}
                onSubmit={props.onSubmitEdit} 
                history={props.history}/>
        </div> 
    )
 }
 
 export default editItem;