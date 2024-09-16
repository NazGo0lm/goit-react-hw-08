import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      <Form>
        <label>
          Email
          <Field type="text" name="email" />
          <ErrorMessage
            name="email"
            component="span"
          />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="span"
          />
        </label>
        <button type="submit">
          log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;