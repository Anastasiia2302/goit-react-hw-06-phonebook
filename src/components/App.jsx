import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactList from './Contacts/Contacts';
import { Container, Title } from './PhoneBook.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <Phonebook />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
export default App;
