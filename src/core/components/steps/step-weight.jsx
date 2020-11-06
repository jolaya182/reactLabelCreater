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
        <Form.Label column sm={3}>{"weight"}</Form.Label>
        <Col sm={8}>
          <Form.Control
            name="weight"
            type="text"
            value={weight}
            onChange={handleWeight}
          />
        </Col>
      </Form.Group>
    </Step>
  );
};
export default StepWeight;
