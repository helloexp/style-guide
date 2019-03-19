import React, {Component} from 'react';
import {Form, FormGroup, Input, ButtonGroup, } from 'reactstrap';


class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            type: 0

        }
        this.onTypeClick = this.onTypeClick.bind(this)
    }
    onTypeClick(type)  {
        this.setState({ type });
      }

    render(){
        console.log(this.state.type)
        return(
            <div className="form-container">
                <h3>Add new item</h3>
                <Form>
                    <FormGroup>
                        <ButtonGroup>
                            <button  onClick={() => this.onTypeClick(0)} className={this.state.type === 0 ? "active": ""}>Component</button>
                            <button  onClick={() => this.onTypeClick(1)} className={this.state.type === 1 ? "active": ""}>Style</button>
                        </ButtonGroup>

                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Enter Content"/>
                    </FormGroup>
                </Form>
            </div>
           
        )
    }
}

export default AddItem;