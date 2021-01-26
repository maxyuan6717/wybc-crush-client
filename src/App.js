import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SET_VAL } from "./redux/masterReducer";
import axios from "axios";
import { casCheck } from "./util/api";
import Landing from "./pages/Landing";
import Write from "./pages/Write";

function App() {
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;
  console.log(process.env.REACT_APP_BACKEND_URL);

  useEffect(() => {
    const onMount = async () => {
      const auth = await casCheck();
      // console.log(auth);
      if (
        !auth ||
        !auth.data.auth ||
        !auth.data.user ||
        !auth.data.user.studentId
      ) {
        dispatch(SET_VAL("author_netId", null));
      } else {
        dispatch(SET_VAL("author_netId", auth.data.user.netId));
        dispatch(SET_VAL("studentId", auth.data.user.studentId));
      }
    };
    onMount();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/write" component={Write} />
        <Route path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
