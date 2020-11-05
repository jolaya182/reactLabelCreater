/**
 * title: step-option.jsx
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

const StepOption = ({wizardContext}) => {
  const {shippingOption} = wizardContext;
  return (<Step  >
      {"StepOption"}
  <div>{"shippingOption"}<input type="text"></input>{shippingOption}</div>
     
    </Step>);
};
export default StepOption;
