import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = nanoid();
  const passwordId = nanoid();

  const initialValues = {
    email: "",
    password: ""
  }

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(
      logIn({
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

  const loginSchema = Yup.object().shape({
    email: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required")
  });

  return (
   <div className={css.login}>
    <Formik onSubmit={handleSubmit} autoComplete="off" initialValues={initialValues} validationSchema={loginSchema}>
        <Form className={css.form}>
          <label className={css.label} htmlFor={emailId}>Email:</label>
          <Field className={css.field} type="text" name="email" id={emailId} />
          <ErrorMessage name="email" component="span" className={css.error} />

          <label className={css.label} htmlFor={passwordId}>Password:</label>
          <Field className={css.field} type="password" name="password" id={passwordId} />
          <ErrorMessage name="password" component="span" className={css.error} />

          <button type="submit" className={css.button}>Log In</button>
        </Form>
      </Formik>
    </div>
  );
};
