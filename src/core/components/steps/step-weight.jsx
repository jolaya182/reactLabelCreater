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
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paginator from "./../features/paginator/paginator";

/**
 * description: form with the weight input
 *
 * @param {object, function, object, function, string} { wizardAction, onAction, currentStep,handler, buttonResolved }
 * @return { element}
 */
const StepWeight = ({
  wizardContext,
  onAction,
  currentStep,
  handler,
  buttonResolved,
}) => {
  const wizardAction = { prev: 2, next: 4, end: 6 };
  const { weight } = wizardContext;
  return (
    <Form.Group>
      <Form.Group as={Row}>
        <Col sm={5}></Col>
        <Col sm={2}>
          <Form.Label></Form.Label>
        </Col>
        <Col sm={5}></Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={5}></Col>
        <Col sm={2}>
          <Form.Label></Form.Label>
        </Col>
        <Col sm={5}></Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={5}></Col>
        <Col sm={2}>
          <Form.Label></Form.Label>
        </Col>
        <Col sm={5}></Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={3}></Col>
        <Form.Label column sm={2}>
          {"Weight lb"}
        </Form.Label>
        <Col sm={4}>
          <Form.Control
            name="weight"
            type="text"
            value={weight}
            onChange={(e) => handler(e)}
          />
        </Col>
        <Col sm={3}></Col>
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
export default StepWeight;
