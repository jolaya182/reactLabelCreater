/**
 * title: step-weight.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the weight aspect of the form
 *
 */

import React from "react";
import Step from "./step";

const StepWeight = ({ wizardContext, handleWeight }) => {
  const { weight } = wizardContext;
  return (
    <Step>
      {"StepWeight"}
      <div><label>{"weight"}
        <input
          name="weight"
          type="text"
          value={weight}
          onChange={handleWeight}
        ></input>
        </label>
      </div>
    </Step>
  );
};
export default StepWeight;
