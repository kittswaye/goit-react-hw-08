import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

export default function RegistrationPage() {
  return (
    <div>
      <div className={css.title}>Registration</div>
      <RegistrationForm />
    </div>
  );
}
