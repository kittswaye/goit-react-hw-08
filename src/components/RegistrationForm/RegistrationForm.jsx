import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const initialValues = {
    name: "",
    email: "",
    password: ""
  }

  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    )
    .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

      actions.resetForm();
  };

  const registrationSchema = Yup.object().shape({
    name: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required")
  });

  return (
    <div className={css.register}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={registrationSchema}>
        <Form className={css.form} autoComplete="off">

          <label className={css.label} htmlFor={nameId}>Username:</label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label className={css.label} htmlFor={emailId}>Email:</label>
          <Field className={css.field} type="text" name="email" id={emailId} />
          <ErrorMessage name="email" component="span" className={css.error} />

          <label className={css.label} htmlFor={passwordId}>Password:</label>
          <Field className={css.field} type="password" name="password" id={passwordId} />
          <ErrorMessage name="password" component="span" className={css.error} />

          <button type="submit" className={css.button}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};
