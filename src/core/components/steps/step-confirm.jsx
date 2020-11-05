/**
 * title: step-confirm.jsx
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

const StepConfirm = ({ wizardContext, total }) => {
  const { weight, shippingOption } = wizardContext;
  return (
    <Step>
      {"StepConfirm"}
      <div>
        <div> {"weight"}
        <input type="text"></input>{weight} </div>
        <div> {"option"}
        <input type="text"></input>{shippingOption} </div>
        <div> {"total"}
        <input type="text"></input>{total} </div>
      </div>
    </Step>
  );
};
export default StepConfirm;
