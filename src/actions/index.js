import actionTypes from "./types";

//Váber typu formy
export const formType = (square, circle) => {
  return {
    type: actionTypes.FORM_TYPE,
    square,
    circle,
  };
};

export const userInput = (name, value) => {
  return {
    type: actionTypes.USER_INPUT,
    name,
    value,
  };
};

export const reCalc = (result, shape) => {
  return {
    type: actionTypes.RECALC,
    result,
    shape,
  };
};
