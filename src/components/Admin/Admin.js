import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import AddItemForm from './Forms/AddItem';
import EditItemForm from './Forms/EditItem';
import ErrorPage from '../PageTemplates/Error'


class Admin extends Component{
    render(){
        console.log(this.props)
        if(this.props.user.admin === false){
            return <ErrorPage />
        }
        return (
            <div>
                <Jumbotron>
                    <h1>Admin Dashboard</h1> 
                </Jumbotron>
                
            </div>
        )
    }
}

export default Admin;