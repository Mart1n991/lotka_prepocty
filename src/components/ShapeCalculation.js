import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import style from "./ShapeCalculation.module.css";

const useStyles = makeStyles({
  root: {
    width: "70px",
    marginTop: "10px",
  },
});

export default function ShapeCalculation({ defaultValue, label, variant, name, value, onChange }) {
  const classes = useStyles();
  return (
    <div className={style.calculationContainer}>
      <label>{defaultValue}</label>
      <TextField
        label={label}
        variant={variant}
        className={classes.root}
        type="number"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
