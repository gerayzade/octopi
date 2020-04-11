export const actionTypes = {
  SUBMIT_LOGIN_FORM: 'LOGIN_FORM_SUBMIT',
  LOGIN_USER: 'LOGIN_USER',
  CLEAR_LOGIN_ERROR: 'CLEAR_LOGIN_ERROR',
  UPDATE_AUTH: 'UPDATE_AUTH'
}

export const submitLoginForm = (value) => ({
  type: actionTypes.SUBMIT_LOGIN_FORM, value
});

export const loginUser = (value) => ({
  type: actionTypes.LOGIN_USER, value
});

export const clearLoginError = () => ({
  type: actionTypes.CLEAR_LOGIN_ERROR
});

export const updateAuth = (value) => ({
  type: actionTypes.UPDATE_AUTH, value
});