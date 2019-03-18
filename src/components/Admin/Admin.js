import React from 'react';
import {Jumbotron} from 'reactstrap';
import AddItemForm from './Forms/AddItem'
// import ContentTemplate from '../ContentTemplate';


const Components = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Admin Dashboard</h1> 
            </Jumbotron>
            <div>
                <AddItemForm />
            </div>
            
            
        </div>
    )
}

export default Components;