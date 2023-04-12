import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';
import {
  Form,
  Lable,
  Field,
  Button,
  ErrorMessage,
} from 'components/ContactForm/ContactForm.styled';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  phone: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    const exist = contacts.find(
      contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
    );

    if (!exist) {
      dispatch(addContact(newContact));

      return;
    }
    toast.info(`${newContact.name} is already in contacts`);
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <Lable>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </Lable>

        <Lable>
          Nunber
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" component="p" />
        </Lable>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
