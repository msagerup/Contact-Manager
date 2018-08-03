import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@email.com',
        phone: '555-558-8414'
      },
      {
        id: 2,
        name: 'Karen Hansen',
        email: 'karen@email.com',
        phone: '548-111-2222'
      },
      {
        id: 3,
        name: 'Petter Larsen',
        email: 'petter@email.com',
        phone: '544-1111-0011'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
