import { connect } from 'react-redux';
import axios from 'axios';
import Router from 'next/router';
import useUser from '~/utils/auth/hooks';
import { showLoginError } from '~/store/actions';
import GuestPage from '~/components/layout/GuestPage';
import LoginForm from '~/components/forms/LoginForm';

const Login = ({ dispatch }) => {
  const user = useUser({ redirectTo: '/my/schedule', redirectIfFound: true });

  const login = async (formData) =>
    await axios.post('/api/auth/login', formData)
      .then(() => Router.push('/my/schedule'))
      .catch(error => dispatch(showLoginError(error.response.data)));

  return (
    <GuestPage title="Log In" user={user}>
      <LoginForm login={login} />
    </GuestPage>
  )
};

export default connect()(Login);