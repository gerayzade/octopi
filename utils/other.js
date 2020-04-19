export const mergeChildProps = (child, items) => (items.map(item => {
  const childProps = {...item[child]};
  delete item[child];
  return {...item, ...childProps}
}))