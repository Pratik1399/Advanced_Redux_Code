export default ({ dispatch }) => (next) => (action) => {
  //Check to see if the action has it's promise on it's 'payload' property
  //If it does,then wait for it to resolve
  //If it doesn't, then send the action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  //We want to wait for promise to resolve
  //(get it's data!!) and then create a new action
  //with that data and dispatch it
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
