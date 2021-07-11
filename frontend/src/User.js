import React from "react";
import "./App.css";

const User = ({ firstName, lastName, email, state }) => {
  return (
    <div className="User">
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default User;
