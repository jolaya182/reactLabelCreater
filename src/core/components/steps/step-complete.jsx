/**
 * title: step-complete.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component is the final step with a label confirmation
 *
 */

import React from "react";
import Step from "./step";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShippingLabel from "./../features/shipping-label-maker/shipping-label/shippingLabel";

/**
 * description: form with the comfirmation details
 *
 * @param {object} { wizardContext }
 * @return {html element}
 */
const StepComplete = ({ wizardContext }) => {
  const { weight, shippingOption, shippingCost } = wizardContext;
  return (
    <Step>
      <Form.Label>{"Congradulations this is your Confirmation"}</Form.Label>
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
      <ShippingLabel wizardContext={wizardContext}></ShippingLabel>
    </Step>
  );
};
export default StepComplete;
