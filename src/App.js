import React from "react";
import Main from "./Modules/Dashboard/Main";
import AuthForm from "./Modules/Auth/AuthForm";
import "./App.css";
import { useSelector } from "react-redux";
import Project from "./Modules/Project/Project";

const flag = "Project";

function App() {
  const user = useSelector((state) => state.user.currentUser?.accessToken);
  let login = user;

  return (
    <div>
      {login === undefined && flag === null && <AuthForm />}
      {login !== undefined && flag === "Dashboard" && <Main />}
      {login !== undefined && flag === "Project" && <Project />}
    </div>
  );
}

export default App;
