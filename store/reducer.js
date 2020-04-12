import { actionTypes } from './actions';

export const initialState = {
  // auth
  isLoggedIn: false,
  loginData: { trial: 0 },
  loginFailed: false,
  // entry test
  testActive: 1,
  testAnswers: {},
  testPassed: false
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUBMIT_LOGIN_FORM:
      return {
        ...state, 
        loginData: {
          trial: state.loginData.trial + 1, 
          ...action.value
        }
      }
    case actionTypes.LOGIN_USER:
      return {
        ...state, 
        isLoggedIn: action.value,
        loginFailed: !action.value
      }
    case actionTypes.CLEAR_LOGIN_ERROR:
      return {
        ...state, 
        loginFailed: false
      }
    case actionTypes.UPDATE_AUTH:
      return {
        ...state, 
        isLoggedIn: action.value
      }
    case actionTypes.ADD_TEST_ANSWER:
      return {
        ...state,
        testAnswers: {
          ...state.testActive,
          [action.key]: action.value
        }, 
        testActive: action.next
      }
    case actionTypes.PASS_TEST:
      return {
        ...state, 
        testPassed: true
      }
    default:
      return state;
  }
}