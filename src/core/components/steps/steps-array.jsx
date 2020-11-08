/**
 * title: steps-array.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this array holds all steps
 *
 */

import React from "react";
import StepReceiver from "./../steps/step-receiver";
import StepSender from "./../steps/step-sender";
import StepWeight from "./../steps/step-weight";
import StepOption from "./../steps/step-option";
import StepConfirm from "./../steps/step-confirm";
import StepComplete from "./../steps/step-complete";
/**
 * description: Step base component
 *
 * @return {array}
 */

const stepsArray = [
  <StepReceiver></StepReceiver>,
  <StepSender></StepSender>,
  <StepWeight></StepWeight>,
  <StepOption></StepOption>,
  <StepConfirm></StepConfirm>,
  <StepComplete></StepComplete>,
];
export default stepsArray;
