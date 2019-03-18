import React, { Component } from "react";
import {  Form, FormGroup, Input, Label } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    console.log("component", this.props)
    login(this.state)
      .then((res) => {
          console.log("success",res)
          history.push('/dashboard');
      })
      .catch(e =>{ 
        console.log(`Error: ${e}`)
      });
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup >
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup >
            <Label>Password</Label>
            <Input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <button
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </button>
        </Form>
      </div>
    );
  }
}

export default Login;