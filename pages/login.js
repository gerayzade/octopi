import { connect } from 'react-redux';
import { loginUser } from '~/store/actions';
import Router from 'next/router';
import GuestPage from '~/components/layout/GuestPage';
import LoginForm from '~/components/forms/LoginForm';

const Login = ({ dispatch, isLoggedIn, loginData: { trial, password, email, remember } }) => {
  React.useEffect(() => {
    if(trial) {
      // check demo credentials
      const pass = email === process.env.AUTH_EMAIL && password === process.env.AUTH_PASS;
      // accept or reject user
      dispatch(loginUser(pass));
      // set token if passed
      if(pass && remember) {
        // keep token if remember field checked
        localStorage.setItem('octoPI', process.env.AUTH_TOKEN);
      } else if(pass) {
        // clear after browser closes
        sessionStorage.setItem('octoPI', process.env.AUTH_TOKEN);
      }
      // redirect to home if passed
      pass && Router.push('/my/schedule');
    }
  }, [trial]);

  return(
    <GuestPage isLoggedIn={isLoggedIn} title="Log In">
      <LoginForm />
    </GuestPage>
  )
}

export default connect(state => ({
  isLoggedIn: state.isLoggedIn,
  loginData: state.loginData
}))(Login);