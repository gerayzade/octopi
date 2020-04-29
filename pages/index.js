import { connect } from 'react-redux';
import Router from 'next/router';
import useUser from '~/utils/auth/hooks';
import axios from 'axios';
import { showLoginError } from '~/store/actions';
import GuestPage from '~/components/layout/GuestPage';
import LoginForm from '~/components/forms/LoginForm';

const Login = ({ dispatch }) => {
  const user = useUser({ redirectTo: '/my/schedule', redirectIfFound: true });

  const login = async (formData) =>
    await axios.post('/api/auth/login', formData)
      .then(Router.reload)
      .catch(error => {
        const msg = error.response.data;
        dispatch(showLoginError(typeof msg === 'string' ? msg : 'Server error'));
      });

  return (
    <GuestPage title="Log In" user={user}>
      <LoginForm login={login} />
    </GuestPage>
  )
};

export default connect()(Login);