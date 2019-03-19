import React from 'react';
import {Jumbotron} from 'reactstrap';
import AddItemForm from './Forms/AddItem';
import EditItemForm from './Forms/EditItem'
// import ContentTemplate from '../ContentTemplate';


const Components = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Admin Dashboard</h1> 
            </Jumbotron>
            <div>
                <AddItemForm onSubmitAdd={props.onSubmitAdd}/>
            </div>
            <div>
                <EditItemForm onSubmitEdit={props.onSubmitEdit}/>
            </div>
            
            
        </div>
    )
}

export default Components;