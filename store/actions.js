export const actionTypes = {
  SUBMIT_LOGIN_FORM: 'LOGIN_FORM_SUBMIT',
  SHOW_LOGIN_ERROR: 'SHOW_LOGIN_ERROR',
  START_TEST: 'START_TEST',
  ADD_TEST_ANSWER: 'ADD_TEST_ANSWER',
  PASS_TEST: 'PASS_TEST'
}

export const submitLoginForm = (value) => ({
  type: actionTypes.SUBMIT_LOGIN_FORM, value
});

export const showLoginError = (value) => ({
  type: actionTypes.SHOW_LOGIN_ERROR, value
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