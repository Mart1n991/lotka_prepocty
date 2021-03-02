import actionTypes from "../actions/types";

const initialState = {
  formVariant: { square: true, circle: false },
  defaultValue: "",
  newValue: "",
  result: "",
  listOfCalc: [{ shape: "", result: "" }],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_TYPE:
      return {
        ...state,
        defaultValue: "",
        newValue: "",
        result: "",
        formVariant: { ...state.formVariant, square: !action.square, circle: !action.circle },
      };

    case actionTypes.USER_INPUT:
      return { ...state, [action.name]: action.value };

    case actionTypes.RECALC:
      return {
        ...state,
        result: action.result,
        listOfCalc: [{ shape: action.shape, result: action.result }, ...state.listOfCalc],
      };

    default:
      return state;
  }
};

export default data;
