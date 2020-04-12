import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import AuthPage from '~/components/layout/AuthPage';
import Loader from '~/components/common/Loader';
import EntryTest from '~/components/start/EntryTest';

const RoutineSchedule = dynamic(() => 
  import('~/components/calendar/RoutineSchedule'), { ssr: false });

const fetcher = url => fetch(url).then(r => r.json());

const MySchedule = ({ isLoggedIn, testPassed }) => {
  const { data: activities } = useSWR('/api/activities', fetcher);
  const [generatingSchedule, setStatus] = React.useState(true);
  const loadingData = !activities;
  const showSchedule = activities && testPassed && !generatingSchedule;
  const showEntryTest = activities && !testPassed;
  React.useEffect(() => {
    setStatus(true);
    const t = setTimeout(() => setStatus(false), 1000);
    return () => clearTimeout(t);
  }, [testPassed])
  return(
    <AuthPage isLoggedIn={isLoggedIn} title="Daily Plan">
      {showEntryTest && <EntryTest />}
      {showSchedule && <RoutineSchedule events={activities}/>}
      {loadingData || (testPassed && generatingSchedule) && <Loader />}
    </AuthPage>
  )
}

export default connect(state => ({
  isLoggedIn: state.isLoggedIn,
  testPassed: state.testPassed
}))(MySchedule);