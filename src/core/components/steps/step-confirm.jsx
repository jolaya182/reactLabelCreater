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
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paginator from "./../features/paginator/paginator";

/**
 * description: form with the comfirmation details
 *
 * @param {object, object, function, integer, function, function, string } { 
 *   wizardAction,
 *   wizardContext,
 *   onAction,
 *   currentStep,
 *   onComplete,
 *   isDataInputsValid,
 *   buttonResolved, }
 * @return {html element}
 */
const StepConfirm = ({
  wizardContext,
  onAction,
  currentStep,
  onComplete,
  isDataInputsValid,
  buttonResolved,
}) => {
  const { weight, shippingOption, shippingCost } = wizardContext;
  const wizardAction = {prev: 4, next:6 , end:6 };

  return (
    <Form.Group>
      <Form.Label>{"Confirmation"}</Form.Label>
      <Form.Group as={Row}>
        <Col sm={4}></Col>
        <Form.Label column sm={2}>
          {"Weight: "}
        </Form.Label>
        <Col sm={2}>{`${weight} lb`}</Col>
        <Col sm={4}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={4}></Col>
        <Form.Label column sm={2}>
          {"Option: "}
        </Form.Label>
        <Col sm={2}>
          {
            {
              ground: <div type="text">{"ground"}</div>,
              priority: <div type="text">{"priority"}</div>,
            }[shippingOption]
          }
        </Col>
        <Col sm={4}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={4}></Col>
        <Form.Label column sm={2}>
          {"Total:"}
        </Form.Label>
        <Col sm={2}>{`$ ${shippingCost}`}</Col>
        <Col sm={4}></Col>
      </Form.Group>
      <Paginator
        wizardAction={wizardAction}
        onAction={onAction}
        currentStep={currentStep}
        buttonResolved={buttonResolved}
      ></Paginator>
    </Form.Group>
  );
};
export default StepConfirm;
