import React, { Component } from 'react';
import { Consumer } from '../../Context';
import TextInputGroup from '../layout/TexInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.get(url);

    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

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
    const updContact = {
      name,
      email,
      phone
    };

    const { id } = this.props.match.params;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const res = await axios.put(url, updContact);

    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    //After submit, clear state
    this.setState({
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
              <div className="card-header">Edit Contact</div>
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
                    value="Edit Contact"
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

export default EditContact;
