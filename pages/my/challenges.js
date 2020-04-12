import { connect } from 'react-redux';
import AuthPage from '~/components/layout/AuthPage';

const MyChallenges = ({ isLoggedIn }) => {
  return(
    <AuthPage isLoggedIn={isLoggedIn} title="Challenges">
      
    </AuthPage>
  )
}

export default connect(state => ({
  isLoggedIn: state.isLoggedIn
}))(MyChallenges);