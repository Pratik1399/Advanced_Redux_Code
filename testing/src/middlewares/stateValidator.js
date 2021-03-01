import tv4 from "tv4";
import stateSchema from "./stateSchema";

export default ({ dispatch }) => (next) => (action) => {
  next(action);
  tv4.validate(getState(), stateSchema);
};
