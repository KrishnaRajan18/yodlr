import React, { useContext, useState, useEffect } from "react";
import YodlrAPI from "./YodlrAPI";
import "./App.css";
import UserContext from "./UserContext";
import User from "./User";

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const userResults = await YodlrAPI.getUsers();
      setUsers(userResults);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>List of all Admins</h1>

      {users.map(u => (
        <User
          key={u.id}
          firstName={u.firstName}
          lastName={u.lastName}
          email={u.email}
          state={u.state}
        />
      ))}
    </div>
  );
};

export default Admin;
