import { useDispatch, useSelector } from 'react-redux';
import { getContacs, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import {
  List,
  Item,
  Text,
  Button,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacs);
  console.log(contacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFiltredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <List>
      {getFiltredContacts?.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
