import React from "react";

const User = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.picture} alt="icon" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.msg}</div>
      </div>
    </div>
  );
};

export default User;
