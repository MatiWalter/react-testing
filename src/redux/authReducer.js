import { types } from "./types";

export const authReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case types.login:
      return {
        email: action.payload.email,
        password: action.payload.password,
        logged: true
      }

    case types.logout:
      return {}
  
    default:
      return state;
  }
}