import React from "react";
import { SET_VAL } from "../redux/masterReducer";
import { useSelector, useDispatch } from "react-redux";

const Write = ({ history }) => {
  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.state);
  if (!stateVal.recipient_email) {
    history.push("/");
  }
  return <div>Write</div>;
};

export default Write;
