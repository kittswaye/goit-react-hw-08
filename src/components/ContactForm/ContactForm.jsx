import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';

export const ContactForm = () => {

  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const initialValues = {
    name: "",
    number: ""
  }

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({name, number}));
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form className={css.form}>

        <div>
          <label className={css.label} htmlFor={nameId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.field} type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
