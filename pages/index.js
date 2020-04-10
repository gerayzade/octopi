import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import PageLayout from '~/components/layout';
import Loader from '~/components/common/Loader';

const RoutineSchedule = dynamic(() => 
  import('~/components/calendar/RoutineSchedule'), { ssr: false });

const fetcher = url => fetch(url).then(r => r.json());

const Index = () => {
  const { data: activities } = useSWR('/api/user/1/routine', fetcher);
  return(
    <PageLayout title="Daily Plan">
      {activities ? <RoutineSchedule events={activities}/> : <Loader />}
    </PageLayout>
  )
}

export default Index;