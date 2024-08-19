import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './components/ContactList/ContactList';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactForm } from './components/ContactForm/ContactForm';
import { selectIsLoading, selectError } from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';
import css from './App.module.css';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <div className={css.error}>{error}</div>}
      <SearchBox />
      <ContactList />
    </div>
  )
}
