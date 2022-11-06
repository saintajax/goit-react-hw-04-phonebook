import React, { useState, useEffect } from 'react';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const LS_KEY = 'local_storage_list';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem(LS_KEY)) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const normFilter = filter.trim().toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === newContact.name)
      ? alert(`This contact is already in list`)
      : setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleInputChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

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
      <ContactForm addContact={addContact} />

      {contacts.length ? (
        <>
          <h2>Contacts</h2>
          <Filter valueFilter={filter} handleChange={handleInputChange} />
          <ContactsList contacts={visibleContacts} del={deleteContact} />
        </>
      ) : (
        ''
      )}
    </Box>
  );
};
