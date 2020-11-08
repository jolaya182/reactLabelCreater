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
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paginator from "./../features/paginator/paginator";

// import PropTypes from "prop-types";

/**
 * description: form with the sender's input
 *
 * @param {object, object, function, integer, function, function, string, function } { 
 *   wizardAction,
 *   wizardContext,
 *   onAction,
 *   currentStep,
 *   onComplete,
 *   isDataInputsValid,
 *   buttonResolved,
 *   handler }
 * @return {html element}
 */
const StepSender = ({
  wizardContext,
  onAction,
  currentStep,
  handler,
}) => {
  const { sender } = wizardContext;
  const wizardAction = {prev: 1, next:3 , end:6 };
  const { name, street, city, state, zip } = sender;
  return (
    <Form.Group>
      <Form.Group as={Row}>
        <Form.Label column sm={5}>
          {"Enter the sender's address"}
        </Form.Label>
        <Col sm={6}></Col>
        <Form.Label column sm={2}>
          {"name"}
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            size="lg"
            name={"name"}
            onChange={(e)=>handler(e)}
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
            onChange={(e)=>handler(e)}
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
            onChange={(e)=>handler(e)}
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
            onChange={(e)=>handler(e)}
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
            onChange={(e)=>handler(e)}
            value={zip}
            type="text"
          />
        </Col>
      </Form.Group>
      <Paginator
        wizardAction={wizardAction}
        onAction={onAction}
        currentStep={currentStep}
      ></Paginator>
      </Form.Group>
  );
};
export default StepSender;
// StepSender.propTypes = {
// wizardContext: PropTypes.object.isRequired,
// onAction: PropTypes.func.isRequired
// }
// StepSender.defaultProps = {
//   wizardContext: null,
//   onAction: null
//   }
