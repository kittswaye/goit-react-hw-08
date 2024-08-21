import { LoginForm } from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <div>
      <div className={css.title}>Login</div>
      <LoginForm />
    </div>
  );
}
