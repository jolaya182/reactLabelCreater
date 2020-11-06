/**
 * title: step-weight.jsx
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

const StepWeight = ({ wizardContext, handleWeight }) => {
  const { weight } = wizardContext;
  return (
    <Step>
      <Form.Group as={Row}>
      <Col sm={3}></Col>
        <Form.Label column sm={2}>{"Weight lb"}</Form.Label>
        <Col sm={4}>
          <Form.Control
            name="weight"
            type="text"
            value={weight}
            onChange={handleWeight}
          />
        </Col>
        <Col sm={3}></Col>
      </Form.Group>
    </Step>
  );
};
export default StepWeight;
