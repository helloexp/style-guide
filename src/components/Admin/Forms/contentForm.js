import React, {Component} from 'react';
import {Form, FormGroup, Input, Label } from 'reactstrap';


class contentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            category: '',
            title: '',
            contents: [{title: "test", contents:{}}],
            value:{title:'',contents: {}}

        }
        this.onTypeClick = this.onTypeClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
      var contentsData =  this.props.contents[this.props.match.params.slug];
      console.log("data",contentsData)
      if(contentsData){
        var title ="test"

      }
      this.setState({
        title
      })
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
      addSection = () =>{
        this.setState(state => {
          const contents = [...state.contents, state.value];
    
          return {
            contents,
            value: {title:'',contents:{}},
          };
        });
      }
    

    render(){
          console.log(this.state)
        
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
                        <button onClick={this.addSection}>Add Section</button>
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