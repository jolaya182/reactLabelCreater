/**
 * title: paginator.jsx
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
import Button from "react-bootstrap/Button";

/**
 * description: these buttons tell the wizard to move to the next or previous step
 *
 * @param {object, function, object, string} { wizardAction, onAction, currentStep, buttonResolved, }
 * @return {html element}
 */
const Paginator = ({ wizardAction, onAction, currentStep, buttonResolved }) => {
  return (
    <Form.Group as={Row}>
      <Col sm={2}></Col>
      <Col sm={8}>
        <Button
          size="lg"
          variant="info"
          onClick={() => onAction({ ...wizardAction, type: "prev" })}
        >
          {"Previous"}
        </Button>
        <Form.Label column sm={2}>
          {currentStep}
        </Form.Label>

        {
          {
            next: (
              <Button
                size="lg"
                variant="info"
                onClick={() => onAction({ ...wizardAction, type: "next" })}
              >
                {"Next"}
              </Button>
            ),
            submit: (
              <Button
                size="lg"
                variant="info"
                onClick={() => {
                  onAction({ ...wizardAction, type: "next" });
                }}
              >
                {"Submit"}
              </Button>
            ),
            end: null,
          }[buttonResolved]
        }
      </Col>
      <Col sm={2}></Col>
    </Form.Group>
  );
};
export default Paginator;
