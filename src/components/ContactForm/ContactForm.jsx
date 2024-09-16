import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number is not valid. Format should be 123-45-67',
      )
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!', {
          duration: 4000,
          position: 'top-right',
        });
      })
      .catch(() => {
        toast.error('Failed to add contact', {
          duration: 4000,
          position: 'top-right',
        });
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form >
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;