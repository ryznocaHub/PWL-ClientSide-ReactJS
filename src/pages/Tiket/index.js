import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../../assets/css/index.css";

export const Tiket = () => {
  return (
    <div>
      <Link to="/">Home</Link> | 
      <Link to="create">create</Link> |{" "}
      <Link to="create/prop">create/prop</Link> | {" "}
      <Link to="view">view</Link> | ------- |
      <Link to="/create">/create</Link> |{" "}
      <Link to="/view">/view</Link> | 

      <Outlet />

      <div className="ss">asdasd</div>
    </div>
  )
}
