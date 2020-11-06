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
import Step from "./step";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StepOption = ({ wizardContext, handleShippingOption }) => {
  const { shippingOption } = wizardContext;

  return (
    <Step>
      <fieldset>
        <Form.Group as={Row}>
          <Col sm={8}>
            <Form.Check
              inline
              type="radio"
              value="red"
              checked={shippingOption === "ground"}
              name="ground"
              onChange={handleShippingOption}
            />
            <Form.Label column sm={2}>
              {"ground"}
            </Form.Label>
            </Col>
            <Col sm={8}>            
              <Form.Check
                inline
                type="radio"
                value="red"
                checked={shippingOption === "priority"}
                name="priority"
                onChange={handleShippingOption}
              />
            <Form.Label column sm={2}>
              {"priority"}
            </Form.Label>
          </Col>
        </Form.Group>
      </fieldset>
    </Step>
  );
};
export default StepOption;
