import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice.js";
import styles from './ContactForm.module.css';

const ContactForm = ({ setIsActive }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values));
        setIsActive(true);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.container}>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles.field}
            />
            <ErrorMessage name="name" component="div" className="error" className={styles.error} />
          </div>

          <div className={styles.container}>
            <label htmlFor="number">Phone number:</label>
            <Field
              type="number"
              id="number"
              name="number"
              className={styles.field}
            />
            <ErrorMessage name="number" component="div" className="error" className={styles.error} />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
