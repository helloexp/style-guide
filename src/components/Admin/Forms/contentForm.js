import React, {Component} from 'react';
import {Form, FormGroup, Input, Label } from 'reactstrap';


class contentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            type:"Style",
            category: 'typography',
            slug: 'text',
            content: []

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

      addSection = (e) => {
        this.setState((prevState) => ({
          content: [...prevState.content, {}],
        }));
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
                        <Label>Title</Label>
                        <Input placeholder="Enter title"/>
                    </FormGroup>
                    
                    <div>
                        <FormGroup>
                            <Label>Section Title</Label>
                            <Input placeholder="Enter section title"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Content</Label>
                            <Input placeholder="Enter content"/>
                        </FormGroup>
                    </div>
                    <FormGroup>
                        <button>Add Section</button>

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