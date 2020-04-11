export const getTimeDifference = (t1, t2) => {
  const datetime = (day = '1/1/1970 ') => new Date(new Date(day+t2) - new Date(day+t1));
  return datetime().toUTCString().split(' ')[4]
}

export const getEventDuration = (id, group) => {
  const event = group.find(event => event.id == id);
  return getTimeDifference(event.startTime, event.endTime);
}