import PropTypes from "prop-types"

import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = e => {
    e.preventDefault();

    const { value: name, id } = e.target.elements.name;
    const number = e.target.elements.number.value;
    const isUniqueContact = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

    if(isUniqueContact) return alert(`${name} is already in contacts`)

    this.setState(({ contacts }) => {
      return {contacts: [...contacts, { id, name, number }]}
    });

    e.target.reset();
  };

  findContact = e => this.setState({ filter: e.target.value });

  deleteContact = e => this.setState(({contacts}) => ({contacts: contacts.filter(({id}) => id !== e.target.parentElement.id)}))

  render() {
    const {contacts, filter} = this.state
    return (
      <div className="app-wrapper">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.findContact} />
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number
  }
  )),
  filter: PropTypes.string
}
