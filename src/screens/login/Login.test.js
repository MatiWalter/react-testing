import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Login from './login';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

test('rendering and submitting a basic Formik form', async () => {

  act(() => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  })

  fireEvent.blur(screen.getByRole('textbox', { name: /email/i }));
  fireEvent.blur(screen.getByLabelText(/contraseña/i));

  await waitFor(() => {
    expect(screen.getByTestId('emailError')).not.toBe(null);
    expect(screen.getByTestId('emailError')).toHaveTextContent('Required');

    expect(screen.getByTestId('passwordError')).not.toBe(null);
    expect(screen.getByTestId('passwordError')).toHaveTextContent('Required');

  });

});