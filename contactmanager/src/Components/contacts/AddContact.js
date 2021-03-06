import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TexInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === '') {
      this.setState({
        errors: { name: 'Name is Required' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: { phone: 'Phone is Required' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: { email: 'Email is Required' }
      });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    const url = 'https://jsonplaceholder.typicode.com/users';

    const res = await axios.post(url, newContact);

    dispatch({ type: 'ADD_CONTACT', payload: res.data });

    this.setState({
      //After submit, clear state
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // Redirect after sumbit(react router)
    this.props.history.push('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Fill In to Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
