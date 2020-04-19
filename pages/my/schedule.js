import { connect } from 'react-redux'; 
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import useUser from '~/utils/auth/hooks';
import AuthPage from '~/components/layout/AuthPage';
import Loader from '~/components/common/Loader';
import EntryTest from '~/components/start/EntryTest';

const RoutineSchedule = dynamic(() => 
  import('~/components/calendar/RoutineSchedule'), { ssr: false });

const fetcher = url => fetch(url).then(r => r.json());

const MySchedule = ({ testPassed }) => {
  const user = useUser({ redirectTo: '/' });
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
    <AuthPage title="Daily Plan" user={user}>
      {showEntryTest && <EntryTest />}
      {showSchedule && <RoutineSchedule events={activities}/>}
      {loadingData || (testPassed && generatingSchedule) && <Loader />}
    </AuthPage>
  )
}

export default connect(state => ({
  testPassed: state.testPassed
}))(MySchedule);