/**
 * title: step-sender.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the receiver's form
 *
 */

import React from "react";
import Step from "./step";

const StepSender = ({ wizardContext, handleSender }) => {
  const { receiver } = wizardContext;
  const { name, street, city, state, zip } = receiver;
  return (
    <Step>
      {"StepSender"}
      {"Enter the sender's address"}
      <div>
        <label>{"name"}
        <input  name={"name"} onChange={handleSender} value={name} type="text"/>
        </label>
      </div>
      <div>
      <label>{"street"}
        <input  name={"street"} onChange={handleSender} value={street} type="text"/>
      </label>
      </div>

      <div>
      <label>{"city"}
        <input  name={"city"} onChange={handleSender} value={city} type="text"/>
      </label>
      <label>{"state"}
        <input  name={"state"} onChange={handleSender} value={state}type="text"/>
      </label>
      <label>{"zip"}
        <input  name={"zip"} onChange={handleSender} value={zip} type="text"/>
      </label>
      </div>
    </Step>
  );
};
export default StepSender;
