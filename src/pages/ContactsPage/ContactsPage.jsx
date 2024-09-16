import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';
import {
  selectContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && 'Request in progress...'}</div>
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>There are no any contacts ...</p>
      )}
    </>
  );
}