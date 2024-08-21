import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <span className={css.username}>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(logOut())} className={css.logout}>Logout</button>
    </div>
  );
};
