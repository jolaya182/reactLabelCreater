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
import Paginator from "./../features/paginator/paginator";

/**
 * description: form with the shipping option
 *
 * @param {object, object, function, integer, function, function, string } { 
 *   wizardAction,
 *   wizardContext,
 *   onAction,
 *   currentStep,
 *   onComplete,
 *   isDataInputsValid,
 *   buttonResolved, 
 *   handler}
 * @return {html element}
 */
const StepOption = ({
  wizardContext,
  onAction,
  currentStep,
  handler,
}) => {
  const { shippingOption } = wizardContext;
  const wizardAction = {prev: 3, next:5 , end:6 };
  return (
    <Form.Group>
      <fieldset>
        <Form.Group as={Row}>
          <Col sm={5}></Col>
          <Col sm={2}>
            <Form.Label>{`Shipping`}</Form.Label>
          </Col>
          <Col sm={5}></Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={4}></Col>
          <Col sm={2}>
            <Form.Check
              inline
              type="radio"
              value="red"
              checked={shippingOption === "ground"}
              name="ground"
              onChange={(e)=>handler(e)}
            />
            <Form.Label column sm={2}>
              {"ground"}
            </Form.Label>
          </Col>
          <Col sm={2}>
            <Form.Check
              inline
              type="radio"
              value="red"
              checked={shippingOption === "priority"}
              name="priority"
              onChange={(e)=>handler(e)}
            />
            <Form.Label column sm={2}>
              {"priority"}
            </Form.Label>
          </Col>
          <Col sm={4}></Col>
        </Form.Group>
        <Paginator
        wizardAction={wizardAction}
        onAction={onAction}
        currentStep={currentStep}
        ></Paginator>
      </fieldset>
    </Form.Group>
  );
};
export default StepOption;
