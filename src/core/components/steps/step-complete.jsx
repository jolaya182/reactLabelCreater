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
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShippingLabel from "./../features/shipping-label-maker/shipping-label/shippingLabel";
import Paginator from "./../features/paginator/paginator";
/**
 * description: form with the comfirmation details
 *
 * @param {object, function, object, string} { wizardAction, onAction, currentStep, buttonResolved }
 * @return { element}
 */
const StepComplete = ({
  wizardContext,
  onAction,
  currentStep,
  buttonResolved,
}) => {
  const {
    weight,
    shippingOption,
    shippingCost,
    receiver,
    sender,
  } = wizardContext;

  const receiverName = receiver.name;
  const receiverStreet = receiver.street;
  const receiverCity = receiver.city;
  const receiverState = receiver.state;
  const receiverZip = receiver.zip;

  const senderName = sender.name;
  const senderStreet = sender.street;
  const senderCity = sender.city;
  const senderState = sender.state;
  const senderZip = sender.zip;

  const wizardAction = { prev: 5, next: 6, end: 6 };
  return (
    <Form.Group>
      <Form.Label>{"Congratulations this is your Confirmation"}</Form.Label>

      <Form.Group as={Row}>
        <Col sm={2}></Col>
        <Form.Label column sm={4}>
          {"Receiver:"}
        </Form.Label>
        <Col sm={4}>
          {receiverName}
          <br />
          {receiverStreet}
          <br />
          {receiverCity}
          <br />
          {receiverState}
          <br />
          {receiverZip}
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={2}></Col>
        <Form.Label column sm={4}>
          {"Sender:"}
        </Form.Label>
        <Col sm={4}>
          {senderName}
          <br />
          {senderStreet}
          <br />
          {senderCity}
          <br />
          {senderState}
          <br />
          {senderZip}
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={2}></Col>
        <Form.Label column sm={4}>
          {"Weight: "}
        </Form.Label>
        <Col sm={4}>{`${weight} lb`}</Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={2}></Col>
        <Form.Label column sm={4}>
          {"Option: "}
        </Form.Label>
        <Col sm={4}>
          {
            {
              1: <div type="text">{"ground"}</div>,
              2: <div type="text">{"priority"}</div>,
            }[shippingOption]
          }
        </Col>
        <Col sm={2}></Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={2}></Col>
        <Form.Label column sm={4}>
          {"Total:"}
        </Form.Label>
        <Col sm={4}>{`$ ${shippingCost}`}</Col>
        <Col sm={2}></Col>
      </Form.Group>

      <ShippingLabel wizardContext={wizardContext}></ShippingLabel>
      <Paginator
        wizardAction={wizardAction}
        onAction={onAction}
        currentStep={currentStep}
        buttonResolved={buttonResolved}
      ></Paginator>
    </Form.Group>
  );
};
export default StepComplete;
