import React, {Component} from 'react';
import {Form, FormGroup, Input, ButtonGroup, } from 'reactstrap';


class contentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:"Style",
            category: 'typography',
            slug: 'text',
            content: 'test'

        }
        this.onTypeClick = this.onTypeClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    onTypeClick = (type) => {
        this.setState({ type });
      }
      validateForm() {
        return this.state.category.length > 0 && this.state.slug.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { onSubmit, history } = this.props;
        console.log("component", this.props)
        onSubmit(this.state)
          .then((res) => {
              console.log("success",res)
              history.push('/dashboard');
          })
          .catch(e =>{ 
            console.log(`Error: ${e}`)
          });
      }
    

    render(){
        return(
            <div className="form-container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <ButtonGroup>
                            <button  onClick={() => this.onTypeClick(0)} className={this.state.type === 0 ? "active": ""}>Component</button>
                            <button  onClick={() => this.onTypeClick(1)} className={this.state.type === 1 ? "active": ""}>Style</button>
                        </ButtonGroup>

                    </FormGroup>
                    <FormGroup>
                        <Input placeholder="Enter Content"/>
                    </FormGroup>
                        <button
                        disabled={!this.validateForm()}
                        className={!this.validateForm()? "disable-btn": ""}
                        type="submit">
                            Save
                        </button>
                </Form>
            </div>
           
        )
    }
}

export default contentForm;