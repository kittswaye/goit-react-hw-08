import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { ContactList } from '../../components/ContactList/ContactList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <div className={css.error}>{error}</div>}
      <ContactList />
    </>
  );
}
