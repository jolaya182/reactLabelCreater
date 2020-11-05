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

const StepSender = ({wizardContext}) => {
  const {receiver} = wizardContext;
  const {name, street, city,state, zip} = receiver;
  return (<Step  >
      {"StepSender"}
      {"Enter the sender's address"}
  <div>{"name"}<input type="text"></input>{name}</div>
  <div>{"street"}<input type="text"></input>{street}</div>
  <div>{"city"}<input type="text"></input>{city}<input type="text"></input>{state}{" zip"}<input type="text"></input>{zip}</div>
    </Step>);
};
export default StepSender;
