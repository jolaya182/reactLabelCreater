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
// import PropTypes from "prop-types";

/**
 * description: form with the receiver's input
 *
 * @param {object, function} { wizardContext, handleReceiver }
 * @return {html element}
 */
const Paginator = ({
  wizardAction,
  onAction,
  currentStep,
  buttonResolved,
}) => {
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
                  return //onComplete(isDataInputsValid());
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
// Paginator.propTypes = {
//   wizardAction: PropTypes.object.isRequired,
//   onAction: PropTypes.func.isRequired,
// };
// Paginator.defaultProps = {
//   wizardAction: null,
//   onAction: null,
// };
