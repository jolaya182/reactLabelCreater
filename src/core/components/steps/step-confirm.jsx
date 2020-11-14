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
import PaginatorHook from "./../features/paginator/paginator-hook";

/**
 * description: form with the comfirmation details
 *
 * @param {object, function, object, string} { wizardAction, onAction, currentStep, buttonResolved }
 * @return { element}
 */
const StepConfirm = ({
  wizardContext,
  onAction,
  currentStep,
  buttonResolved,
}) => {
  const { weight, shippingOption, shippingCost } = wizardContext;
  const wizardAction = { prev: 4, next: 6, end: 6 };

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
              "1": <div type="text">{"ground"}</div>,
              "2": <div type="text">{"priority"}</div>,
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
      <PaginatorHook
        wizardAction={wizardAction}
        onAction={onAction}
        currentStep={currentStep}
        buttonResolved={buttonResolved}
      ></PaginatorHook>
    </Form.Group>
  );
};
export default StepConfirm;
