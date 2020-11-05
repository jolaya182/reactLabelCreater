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

const StepWeight = ({wizardContext}) => {
  const {weight} = wizardContext;
  return (<Step  >
      {"StepWeight"}
  <div>{"weight"}<input type="text"></input>{weight}</div>
     
    </Step>);
};
export default StepWeight;
