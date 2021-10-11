import { types } from "./types";

export const login = ({ email, password }) => {
  return {
    type: types.login,
    payload: {
      email,
      password
    }
  }
};

export const logout = () => ({
  type: types.logout
});

