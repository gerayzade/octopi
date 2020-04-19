import { actionTypes } from './actions';

export const initialState = {
  // auth
  loginData: { trial: 0 },
  loginError: false,
  // entry test
  testActive: 0,
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
    case actionTypes.SHOW_LOGIN_ERROR:
      return {
        ...state, 
        loginError: action.value
      }
    case actionTypes.UPDATE_AUTH:
      return {
        ...state, 
        isLoggedIn: action.value
      }
    case actionTypes.START_TEST:
      return {
        ...state, 
        testActive: 1
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