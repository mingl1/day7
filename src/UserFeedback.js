import React from "react";

const User_feedback = function (props) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.children.name}</div>

        <div className="description">{props.children}</div>
      </div>
      <div className="ui bottom button">
        <i
          className="add icon"
          style={{ display: "inline-block", width: "100%" }}
        >
          Add Feedback
        </i>
      </div>
    </div>
  );
};

export default User_feedback;
