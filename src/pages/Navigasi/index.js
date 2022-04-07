import React from 'react'
import { Link } from "react-router-dom";

const Navigasi = () => {
  return (
    <div>
        <Link to="/">Home</Link> |{" "}
        <Link to="tiket">tiket</Link> |{" "}
    </div>
  )
}

export default Navigasi