/**
 * title: step.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this is a component that holds on step
 *
 */

import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

/**
 * description: this function adds the 'onAction', and all other props needed
 *
 * @param {function, integer, object, element, string} {onAction, currentStep,  wizardContext, children, buttonResolved }
 * @return {element}
 */
const Step = ({
  onAction,
  currentStep,
  wizardContext,
  children,
  buttonResolved,
}) => {
  const { handler } = children[0].props;
  const newElement = React.cloneElement(children[0], {
    onAction: onAction,
    wizardContext: wizardContext,
    handler: handler,
    currentStep: currentStep,
    buttonResolved: buttonResolved,
  });

  return <Form.Group>{newElement}</Form.Group>;
};
export default Step;
Step.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired,
};
Step.defaultProps = {
  wizardContext: null,
  onAction: null,
};
