import React, { Component } from 'react';

import FormInput from '../formInput/forminput.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor() {
    super();
    this.state = { email: '', password: '' };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({});
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required={true}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required={true}
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
