import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth';

const Register = ({ history }) => {

  const dispatch = useDispatch();

  return (
    <div style={styles}>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          dispatch(login(values));
          history.push('/');}
        }
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
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
            <Field id="password" name="password" type='password' />
            <ErrorMessage data-testid="passwordError" name="password" component="div" />

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Register

const styles = {
  display: 'grid',
  placeContent: 'center',
  width: '100vw',
  height: '100vh'
}