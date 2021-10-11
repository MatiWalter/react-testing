import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Register from './register';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('test register', () => {

  beforeEach(() => {
    act(() => {
      render(
        <Provider store={store}>
          <Register />
        </Provider>
      );
    })
  })
  
  test('rendering and submitting a basic Formik form', async () => {
  
    fireEvent.blur(screen.getByRole('textbox', { name: /email/i }));
    fireEvent.blur(screen.getByTestId('passwordInput'));
    fireEvent.blur(screen.getByTestId('confirmPassword'));
  
    await waitFor(() => {
      expect(screen.getByTestId('emailError')).not.toBe(null);
      expect(screen.getByTestId('emailError')).toHaveTextContent('Required');
  
      expect(screen.getByTestId('passwordError')).not.toBe(null);
      expect(screen.getByTestId('passwordError')).toHaveTextContent('Required');
  
      expect(screen.getByTestId('confirmPasswordError')).not.toBe(null);
      expect(screen.getByTestId('confirmPasswordError')).toHaveTextContent('Required');
    })

    const button = screen.getByRole('button', {
      name: /submit/i
    });

    fireEvent.click(button);
  });

})






