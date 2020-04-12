export const actionTypes = {
  SUBMIT_LOGIN_FORM: 'LOGIN_FORM_SUBMIT',
  LOGIN_USER: 'LOGIN_USER',
  CLEAR_LOGIN_ERROR: 'CLEAR_LOGIN_ERROR',
  UPDATE_AUTH: 'UPDATE_AUTH',
  START_TEST: 'START_TEST',
  ADD_TEST_ANSWER: 'ADD_TEST_ANSWER',
  PASS_TEST: 'PASS_TEST'
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

export const startTest = () => ({
  type: actionTypes.START_TEST
});

export const addTestAnswer = (key, value, next) => ({
  type: actionTypes.ADD_TEST_ANSWER, key, value, next
});

export const passTest = () => ({
  type: actionTypes.PASS_TEST
});