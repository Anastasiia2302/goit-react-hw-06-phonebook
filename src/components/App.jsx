import { useState, useEffect } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { Container, Title } from './PhoneBook.styled';

const LS = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LS)) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts([newContact, ...contacts]);
  };

  const onFilter = element => {
    setFilter(element.currentTarget.value);
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook onSubmit={handleSubmit} />

      <Title>Contacts</Title>
      <Filter value={filter} onFilter={onFilter} />
      <ContactList deleteContact={deleteContact} contacts={filterContacts} />
    </Container>
  );
};
export default App;
