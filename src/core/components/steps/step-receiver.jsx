/**
 * title: step-receiver.jsx
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

const StepReceiver = ({wizardContext, handleReceiver}) => {
  const {receiver} = wizardContext;
  const {name, street, city,state, zip} = receiver;
  return (<Step  >
      {"StepReceiver"}
      {"Enter the receiver's address"}
      <div>
        <label>{"name"}
        <input  name={"name"} onChange={handleReceiver} value={name} type="text"/>
        </label>
      </div>
      <div>
      <label>{"street"}
        <input  name={"street"} onChange={handleReceiver} value={street} type="text"/>
      </label>
      </div>

      <div>
      <label>{"city"}
        <input  name={"city"} onChange={handleReceiver} value={city} type="text"/>
      </label>
      <label>{"state"}
        <input  name={"state"} onChange={handleReceiver} value={state}type="text"/>
      </label>
      <label>{"zip"}
        <input  name={"zip"} onChange={handleReceiver} value={zip} type="text"/>
      </label>
      </div>
    </Step>);
};
export default StepReceiver;
