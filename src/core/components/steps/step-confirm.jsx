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
import Step from "./step";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StepConfirm = ({ wizardContext, shippingCost }) => {
  const { weight, shippingOption } = wizardContext;
  return (
    <Step>
      <Form.Label>{"Confirmation"}</Form.Label>
      <Form.Group as={Row}>
        <Form.Label column sm={3}>
          {"Weight: "}
          </Form.Label>
          <Col sm={9}>
          {weight}
          </Col>
      </Form.Group>
      <Form.Group as={Row}>
      <Form.Label column sm={3}>
          {"Option: "}
          </Form.Label>
          <Col sm={9}>
          {
            {
              ground: <div type="text">{"ground"}</div>,
              priority: <div type="text">{"priority"}</div>,
            }[shippingOption]
          }
          </Col>
      </Form.Group>

      


      <Form.Group as={Row}>
      <Form.Label column sm={3}>
          {"Total:"}
          </Form.Label>
          <Col sm={9}>
          {`$ ${shippingCost}`}
          </Col>
      </Form.Group>
    </Step>
  );
};
export default StepConfirm;
