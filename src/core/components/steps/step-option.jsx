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

const StepOption = ({ wizardContext, handleShippingOption }) => {
  const { shippingOption } = wizardContext;

  console.log(
    "shippingOption->",
    shippingOption,
    shippingOption === "priority"
  );
  return (
    <Step>
      {/* <form> */}
        <label>
          {"ground"}
          <input
            type="radio"
            value="red"
            checked={shippingOption === "ground"}
            name="ground"
            onChange={handleShippingOption}
          />
        </label>

        <label>
          {"priority"}
          <input
            type="radio"
            value="red"
            checked={shippingOption === "priority"}
            name="priority"
            onChange={handleShippingOption}
          />
        </label>
      {/* </form> */}
    </Step>
  );
};
export default StepOption;
