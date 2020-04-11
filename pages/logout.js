import { connect } from 'react-redux';
import { updateAuth } from '~/store/actions';
import Router from 'next/router';

const Logout = ({ dispatch, isLoggedIn }) => {
  React.useEffect(() => {
    if(isLoggedIn) {
      localStorage.removeItem('octoPI');
      sessionStorage.removeItem('octoPI');
      dispatch(updateAuth(false));
      Router.push('/login');
    }
  });
  return (<></>);
};

export default connect(state => ({
  isLoggedIn: state.isLoggedIn
}))(Logout);