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
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const Step = ({onAction, currentStep,  wizardContext, children }) => {
  console.log("wizardContext step", wizardContext);
  //   const newElement = "cool";
  const {handler} = children[0].props;
  const newElement = React.cloneElement(children[0], {
    onAction: onAction,
    wizardContext: wizardContext,
    handler: handler,
    currentStep: currentStep,
  });

  return <Form.Group as={Row}>{newElement}</Form.Group>;
};
export default Step;
