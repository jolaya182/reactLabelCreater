/**
 * title: step-sender.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the sender's form
 *
 */

import React from "react";
import Step from "./step";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StepSender = ({ wizardContext, handleSender }) => {
  const { sender } = wizardContext;
  const { name, street, city, state, zip } = sender;
  return (
    <Step>
      <Form.Label>
        {"Enter the sender's address"}
      </Form.Label>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          {"name"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"name"}
            onChange={handleSender}
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
            onChange={handleSender}
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
            onChange={handleSender}
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
            onChange={handleSender}
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
            onChange={handleSender}
            value={zip}
            type="text"
          />
        </Col>
      </Form.Group>
    </Step>
  );
};
export default StepSender;
