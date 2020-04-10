import { Row, Col } from 'antd'; 
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { getEventDuration } from '~/lib/calendarFunctions';

const $ = (selector) => document.querySelectorAll(selector)[0];

const RoutineSchedule = ({ events }) => {
  // state hooks
  const [calendarEvents, setCalendarEvents] = React.useState(events.slice(0,8));
  const [externalEvents, setExternalEvents] = React.useState(events.slice(9));
  // effect hook
  React.useEffect(() => {
    // add event props to draggable element
    new Draggable($('#external-events'), {
      itemSelector: '.fc-event',
      eventData: (eventEl) => ({ 
        ...eventEl.dataset, 
        duration: getEventDuration(eventEl.dataset.id, events) 
      })
    });
  }, []);
  // ref hook
  const calendarRef = React.useRef(null);
  // get calendar API from component ref
  const calendarAPI = () => calendarRef.current.getApi();
  // handle events on interaction
  const isOverDraggable = ({ clientX, clientY }) => {
    const offset = $('#external-events').getBoundingClientRect();
    return (window.innerWidth >= 768
      ? clientX >= offset.left && clientX <= offset.right
      : clientY >= offset.top
    );
  }
  const eventClick = () => {
  }
  const externalEventDrop = ({ draggedEl }) => {
    // remove event from list
    setExternalEvents(externalEvents.filter(event => event.id != draggedEl.dataset.id));
  }
  const eventDrop = ({ jsEvent, event }) => {
    // remove event if it is outside of calendar
    isOverDraggable(jsEvent) && event.remove();
  }
  const eventDragStop = ({ jsEvent, event: { id } }) => {
    if(isOverDraggable(jsEvent)) {
      // move event from calendar to list
      calendarAPI().getEventById(id).remove();
      setExternalEvents([...externalEvents, events.find(event => event.id == id)]);
    }
  }
  return (
    <Row gutter={{xs: 16, md: 24}}>
      <Col span={24} md={16}>
        <div className="daily-plan pane">
          <FullCalendar 
            ref={calendarRef}
            plugins={[ timeGridPlugin, interactionPlugin ]} 
            defaultView={'timeGridDay'} 
            minTime={'06:00:00'}
            maxTime={'24:00:00'}
            events={calendarEvents}
            editable={true}
            droppable={true}
            drop={externalEventDrop}
            eventDrop={eventDrop}
            eventClick={eventClick}
            eventDragStop={eventDragStop}
            dragRevertDuration={0}
            height={'auto'}
            header={false}
            columnHeader={false}
            allDaySlot={false}
          />
        </div>
      </Col>
      <Col span={24} md={8}>
        <div className="fc fc-unthemed" id="external-events">
          {externalEvents.length > 0 && <p>Handle even more activities :)</p>}
          {externalEvents.map(event => (
            <div className="fc-event fc-external" data-id={event.id} data-title={event.title} key={event.id}>
              {event.title}
            </div>
          ))}
        </div>
      </Col>
    </Row>
  )
}

export default RoutineSchedule;