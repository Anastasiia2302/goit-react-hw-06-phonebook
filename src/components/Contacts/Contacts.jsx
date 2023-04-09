import { BtnDel, Item, List, Name } from 'components/PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';


export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <>
      <List>
        {filteredContacts().map(({ id, name, number })=> {
          return (
            <Item key={number}>
              <Name>{name}</Name>
              <Name>{number}</Name>
              <BtnDel type="button" onClick={() => dispatch(deleteContacts(id))}>
                Delete
              </BtnDel>
            </Item>
          );
        })}
      </List>
    </>
  );
}
