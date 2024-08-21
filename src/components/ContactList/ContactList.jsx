import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {

  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact data={contact} className={css.delete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
