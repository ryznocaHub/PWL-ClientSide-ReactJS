import React from 'react'
import { COLORS, FONTS, SIZES } from "../../utils";
import { createUseStyles } from "react-jss";


export const Button = () => {
  const styles = style();

  return (
    <div style={styles.button}>Button</div>
  )
}

const style = createUseStyles({
    button: {
      color: COLORS.primary,
      fontFamily: FONTS.body2
    },
  });
  