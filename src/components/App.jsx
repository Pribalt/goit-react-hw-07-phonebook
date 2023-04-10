import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Title1, Title2 } from 'components/Layout.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Title1>Phonebook</Title1>
      <ContactForm />

      <Title2>Contacts</Title2>
      <Filter />
      <ContactList />
    </Layout>
  );
};
