import Header from "./components/Header";
import Shape from "./components/Shape";
import square from "./assets/square.svg";
import circle from "./assets/circle.svg";
import classes from "./components/Shape.module.css";

import "./index.css";
import ShapeCalculation from "./components/ShapeCalculation";
import { connect } from "react-redux";
import { formType, reCalc, userInput } from "./actions";
import { Button } from "@material-ui/core";
import { squareCalc, circleCalc } from "./helpers/re-calcNumber";

function App({ formVariant, formType, userInput, defaultValue, newValue, reCalc, result, listOfCalc }) {
  const formTypeChange = () => {
    formType(formVariant.square, formVariant.circle);
  };

  const inputChange = (event) => {
    userInput(event.target.name, event.target.value);
  };

  const calc = (defaultValue, newValue) => {
    if (formVariant.square) {
      const res = squareCalc(defaultValue, newValue);
      reCalc(res, "square");
    }

    if (formVariant.circle) {
      const res = circleCalc(defaultValue, newValue);
      reCalc(res, "circle");
    }
  };

  const showResult = () => {
    if (result) {
      return (
        <div className="result">
          <h1 className="result-heading">{result}</h1>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <h2 className="heading">Zvoľ tvar formy</h2>
      <div className="shape-container">
        <Shape
          shape={square}
          shapeType="štvorec"
          onClick={formTypeChange}
          className={formVariant.square ? classes.active : classes.disabled}
        />
        <Shape
          shape={circle}
          shapeType="kruh"
          onClick={formTypeChange}
          className={`${classes.circle} ${formVariant.circle ? classes.active : classes.disabled}`}
        />
      </div>

      <h2 className="heading">{formVariant.square ? "Štvorec" : "Kruh"}</h2>

      <div className="shape-calc-container">
        {formVariant.square ? (
          <>
            <ShapeCalculation
              defaultValue="Pôvodná strana"
              label="cm"
              variant="outlined"
              name="defaultValue"
              value={defaultValue}
              onChange={(event) => inputChange(event)}
            />

            <ShapeCalculation
              defaultValue="Nová strana"
              label="cm"
              variant="outlined"
              name="newValue"
              value={newValue}
              onChange={(event) => inputChange(event)}
            />
          </>
        ) : (
          <>
            <ShapeCalculation
              defaultValue="Pôvodný priemer"
              label="cm"
              variant="outlined"
              name="defaultValue"
              value={defaultValue}
              onChange={(event) => inputChange(event)}
            />
            <ShapeCalculation
              defaultValue="Nový priemer"
              label="cm"
              variant="outlined"
              name="newValue"
              value={newValue}
              onChange={(event) => inputChange(event)}
            />
          </>
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={defaultValue === "" || newValue === ""}
        onClick={() => calc(defaultValue, newValue)}
      >
        Prepočítať
      </Button>
      {showResult()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    formVariant: state.formVariant,
    defaultValue: state.defaultValue,
    newValue: state.newValue,
    result: state.result,
    listOfCalc: state.listOfCalc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    formType: (square, circle) => dispatch(formType(square, circle)),
    userInput: (name, value) => dispatch(userInput(name, value)),
    reCalc: (result, shape) => dispatch(reCalc(result, shape)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
