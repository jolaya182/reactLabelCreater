/**
 * title: step.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this is a component that holds on step
 *
 */

import React from "react";
import Form from "react-bootstrap/Form";

const Step = ({onAction, currentStep,  wizardContext, children, buttonResolved }) => {
//   console.log("wizardContext step", wizardContext);
  //   const newElement = "cool";
  const {handler} = children[0].props;
  const newElement = React.cloneElement(children[0], {
    onAction: onAction,
    wizardContext: wizardContext,
    handler: handler,
    currentStep: currentStep,
    buttonResolved: buttonResolved
  });

  return <Form.Group >{newElement}</Form.Group>;
};
export default Step;
