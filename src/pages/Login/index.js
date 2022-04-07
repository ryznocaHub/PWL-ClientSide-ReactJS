import React from "react";
import { createUseStyles } from "react-jss";

const Login = () => {
  const styles = style();

  return <div className={styles.card}>Login</div>;
};

export default Login;

const style = createUseStyles({
  card: {
    color: "red",
  },
});
