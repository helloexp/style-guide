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
                contents={data}
                onSubmit={props.onSubmitEdit} 
                history={props.history}
                match={props.match}
                />
        </div> 
    )
 }
 
 export default editItem;