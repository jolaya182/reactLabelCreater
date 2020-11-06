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
import Step from "./step";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * description: form with the receiver's input
 *
 * @param {object, function} { wizardContext, handleReceiver }
 * @return {html element}
 */
const StepReceiver = ({ wizardContext, handleReceiver }) => {
  const { receiver } = wizardContext;
  const { name, street, city, state, zip } = receiver;
  return (
    <Step>
      <Form.Group as={Row}>
        <Form.Label column sm={5}>
          {"Enter the receiver's address"}
        </Form.Label>
        <Col sm={6}></Col>
        <Form.Label column sm={2}>
          {"name"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"name"}
            onChange={handleReceiver}
            value={name}
            type="text"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {"street"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"street"}
            onChange={handleReceiver}
            value={street}
            type="text"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {"city"}
        </Form.Label>
        <Col sm={3}>
          <Form.Control
            size="lg"
            name={"city"}
            onChange={handleReceiver}
            value={city}
            type="text"
          />
        </Col>
        <Form.Label column sm={1}>
          {"state"}
        </Form.Label>
        <Col sm={2}>
          <Form.Control
            size="lg"
            name={"state"}
            onChange={handleReceiver}
            value={state}
            type="text"
          />
        </Col>
        <Form.Label column sm={1}>
          {"zip"}
        </Form.Label>
        <Col sm={2}>
          <Form.Control
            size="lg"
            name={"zip"}
            onChange={handleReceiver}
            value={zip}
            type="text"
          />
        </Col>
      </Form.Group>
    </Step>
  );
};
export default StepReceiver;
