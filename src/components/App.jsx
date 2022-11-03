import React, { Component } from 'react';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const LS_KEY = 'local_storage_list';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localeStorageList = JSON.parse(localStorage.getItem(LS_KEY));
    if (localeStorageList) {
      this.setState({ contacts: localeStorageList });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleInputChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === newContact.name)
      ? alert(`This contact is already in list`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normFilter = filter.trim().toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );

    return (
      <Box
        width="800px"
        display="flex"
        flexDirection="column"
        ml="auto"
        mr="auto"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        {contacts.length ? (
          <>
            <h2>Contacts</h2>
            <Filter
              valueFilter={filter}
              handleChange={this.handleInputChange}
            />
            <ContactsList contacts={visibleContacts} del={this.deleteContact} />
          </>
        ) : (
          ''
        )}
      </Box>
    );
  }
}
