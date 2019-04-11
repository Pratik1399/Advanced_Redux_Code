import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers";

// export default props => {
//   return (
//     <Provider store={createStore(reducers,{})}>{props.children}</Provider>
//   );
// };

// export default props => {
//   return (
//     <Provider store={createStore(reducers,props.initialState)}>{props.children}</Provider>
//   );
// };

export default ({ children, initialState }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  //<Provider store={createStore(reducers,props.initialState)}>{props.children}</Provider>
  return <Provider store={store}>{children}</Provider>;
};
