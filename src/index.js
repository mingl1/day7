import React from "react";
import ReactDOM from "react-dom/client";
import User from "./comments";
import sheep from "./images/sheep.svg";
import man from "./images/man.svg";
import women from "./images/women.svg";
import Userfeedback from "./UserFeedback";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = function (props) {
  return (
    <section className="ui comments">
      <Userfeedback>
        <User
          name="Angela"
          date="Today at 7PM"
          msg="Hello World!"
          picture={women}
        />
      </Userfeedback>
      <Userfeedback>
        <User
          name="Ming"
          date="8/06/23"
          msg="Heeeeeeeeeeeeeello World!"
          picture={man}
        />
      </Userfeedback>
      <Userfeedback>
        <User
          name="Baaa"
          date="Today at 8/01/23"
          msg="Helloooooooooooo World!"
          picture={sheep}
        />
      </Userfeedback>
    </section>
  );
};
root.render(
  <React.StrictMode>
    <App name="Ming" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
