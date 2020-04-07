import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const RoutineSchedule = ({ events }) => (
  <FullCalendar 
    plugins={[ timeGridPlugin, interactionPlugin ]} 
    defaultView={'timeGridDay'} 
    minTime={'06:00:00'}
    maxTime={'24:00:00'}
    events={events}
    editable={true}
    selectable={true}
    height={'auto'}
    header={false}
    columnHeader={false}
    allDaySlot={false}
  />
)

export default RoutineSchedule;