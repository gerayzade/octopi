import dynamic from 'next/dynamic';
import PageLayout from '~/components/layout';

import routine from '~/lib/routine';

const RoutineSchedule = dynamic(() => 
  import('../components/calendar/RoutineSchedule'), { ssr: false });

const Index = ({  }) => (
  <PageLayout title="Daily Plan">
    <RoutineSchedule events={routine} />
  </PageLayout>
)

export const getStaticProps = async () => {
  return { props: {  } };
}

export default Index;