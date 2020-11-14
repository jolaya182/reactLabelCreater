/**
 * title: step-receiver.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the receiver's form
 *
 */

import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PaginatorHook from "./../features/paginator/paginator-hook";
// import PropTypes from "prop-types";

/**
 * description: form with the receiver's input
 *
 * @param {object, function, object, function, string} { wizardAction, onAction, currentStep,handler, buttonResolved }
 * @return { element} */
const StepReceiver = ({
  wizardContext,
  onAction,
  currentStep,
  handler,
  buttonResolved,
}) => {
  const { receiver } = wizardContext;
  const wizardAction = { prev: 1, next: 2, end: 6 };
  const { name, street, city, state, zip } = receiver;
  return (
    <Form.Group>
      <Form.Group as={Row}>
        <Col sm={1}></Col>
        <Form.Label column sm={11} className={"form-label"}>
          {"Enter the receiver's address"}
        </Form.Label>
      </Form.Group>

      <Form.Group as={Row}>
      <Col sm={1}></Col>
        <Form.Label column sm={1}>
          {"Name"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"name"}
            onChange={(e) => handler(e)}
            value={name}
            type="text"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={1}></Col>
        <Form.Label column sm={1}>
          {"Street"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"street"}
            onChange={(e) => handler(e)}
            value={street}
            type="text"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={1}></Col>
        <Form.Label column sm={1}>
          {"City"}
        </Form.Label>
        <Col sm={3}>
          <Form.Control
            size="lg"
            name={"city"}
            onChange={(e) => handler(e)}
            value={city}
            type="text"
          />
        </Col>
        <Form.Label column sm={1}>
          {"State"}
        </Form.Label>
        <Col sm={2}>
          <Form.Control
            size="lg"
            name={"state"}
            onChange={(e) => handler(e)}
            value={state}
            type="text"
          />
        </Col>
        <Form.Label column sm={1}>
          {"Zip"}
        </Form.Label>
        <Col sm={2}>
          <Form.Control
            size="lg"
            name={"zip"}
            onChange={(e) => handler(e)}
            value={zip}
            type="text"
          />
        </Col>
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
export default StepReceiver;
