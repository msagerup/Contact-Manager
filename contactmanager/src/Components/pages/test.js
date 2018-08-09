import React, { Component } from 'react';

class test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{body}</h4>
      </div>
    );
  }
}

export default test;
