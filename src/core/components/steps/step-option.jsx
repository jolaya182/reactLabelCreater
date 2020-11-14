/**
 * title: step-option.jsx
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
 * description: form with the shipping option
 *
 * @param {object, function, object, function, string} { wizardAction, onAction, currentStep,handler, buttonResolved }
 * @return { element}
 */
const StepOption = ({
  wizardContext,
  onAction,
  currentStep,
  handler,
  buttonResolved,
}) => {
  const { shippingOption } = wizardContext;
  const wizardAction = { prev: 3, next: 5, end: 6 };
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
        <Col sm={3}>{``}</Col>
        <Form.Group sm={1}>{`Shipping`}</Form.Group>
        <Col sm={2}>
          <Form.Check
            inline
            type="radio"
            value={1}
            checked={shippingOption === "1"}
            name="ground"
            onChange={(e) => handler(e)}
          />
          <Form.Label column sm={2}>
            {"Ground"}
          </Form.Label>
        </Col>
        <Col sm={2}>
          <Form.Check
            inline
            type="radio"
            value={2}
            checked={shippingOption === "2"}
            name="priority"
            onChange={(e) => handler(e)}
          />
          <Form.Label column sm={2}>
            {"Priority"}
          </Form.Label>
        </Col>
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
export default StepOption;
