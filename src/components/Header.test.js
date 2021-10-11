import React from "react";
import { render } from '@testing-library/react';
import { Provider } from "react-redux";
import Header from "./Header";
import { store } from "../redux/store";

test('should render a navbar', () => {
  
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

});
