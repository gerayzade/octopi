import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import AuthPage from '~/components/layout/AuthPage';
import Loader from '~/components/common/Loader';

const RoutineSchedule = dynamic(() => 
  import('~/components/calendar/RoutineSchedule'), { ssr: false });

const fetcher = url => fetch(url).then(r => r.json());

const MySchedule = ({ isLoggedIn }) => {
  const { data: activities } = useSWR('/api/activities', fetcher);
  return(
    <AuthPage isLoggedIn={isLoggedIn} title="Daily Plan">
      {activities ? <RoutineSchedule events={activities}/> : <Loader />}
    </AuthPage>
  )
}

export default connect(state => ({
  isLoggedIn: state.isLoggedIn
}))(MySchedule);