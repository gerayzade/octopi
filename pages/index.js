import dynamic from 'next/dynamic';
import fetch from 'unfetch';
import useSWR from 'swr';
import PageLayout from '~/components/layout';

const RoutineSchedule = dynamic(() => 
  import('~/components/calendar/RoutineSchedule'), { ssr: false });

const fetcher = url => fetch(url).then(r => r.json());

const Index = () => {
  const { data: activities } = useSWR('/api/user/1/routine', fetcher);
  return(
    <PageLayout title="Daily Plan">
      <div className="daily-plan">
        {activities && <RoutineSchedule events={activities} />}
      </div>
    </PageLayout>
  )
}

export default Index;