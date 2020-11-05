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

const StepConfirm = ({ wizardContext, shippingCost }) => {
  const { weight, shippingOption } = wizardContext;
  return (
    <Step>
      {"StepConfirm"}
      <div>
        <div>
          {"weight: "}
          {weight}
        </div>
        <div>
          {"option: "}
          {
            {
              ground: <div type="text">{"ground"}</div>,
              priority: <div type="text">{"priority"}</div>,
            }[shippingOption]
          }
        </div>
        <div>
          {"total: $"}
          {shippingCost}
        </div>
      </div>
    </Step>
  );
};
export default StepConfirm;
