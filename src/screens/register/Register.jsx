import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';

const Login = ({ history }) => {

  const dispatch = useDispatch();

  return (
    <div style={styles}>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          dispatch(login(values));
          history.push('/');
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required'
          }
          return errors;
        }}
      >
        <Form>
          <div className='main'>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" autoComplete='off' />
            <ErrorMessage data-testid="emailError" name="email" component="div" />

            <label htmlFor="password">Contraseña</label>
            <Field id="password" data-testid="passwordInput" name="password" type='password' />
            <ErrorMessage data-testid="passwordError" name="password" component="div" />

            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <Field id="confirmPassword" data-testid='confirmPassword' name="confirmPassword" type='password' />
            <ErrorMessage data-testid="confirmPasswordError" name="confirmPassword" component="div" />

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Login;

const styles = {
  display: 'grid',
  placeContent: 'center',
  width: '100vw',
  height: '100vh'
}
