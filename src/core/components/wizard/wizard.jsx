/**
 * title: wizard.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the wizard aspect of the application
 */
import React from "react";
import "./../../css/app.css";
import Step from "../steps/step";

import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import "./../../css/app.css";


/**
 * @export
 * @class Wizard
 * @extends {React.Component}
 */
export default class Wizard extends React.Component {
  constructor(props) {
    super(props);
    const {steps} = props;
    this.state = {
      wizardAction: {
        type: "",
        prev: 1,
        next: 2,
        end: steps.length,
      },
      currentStep: 1,
      buttonResolved: "next",
      errorMessage: [],
    };
  }

  /**
   * description: directs to the next or previous step
   *
   * @param {*} wizardAction
   * @memberof Wizard
   * @return
   */
  onAction = (wizardAction) => {
    switch (wizardAction.type) {
      case "prev":
        return this.clickPrev(wizardAction);
      case "next":
        return this.clickNext(wizardAction);
      default:
        return;
    }
  };

  /**
   * description: updates the wizard action to point to the right
   *
   * @param {*} wizardAction
   * @memberof Wizard
   */
  clickNext = (wizardAction) => {
    const { currentStep } = this.state;
    const { prev, next, end } = wizardAction;
    let newPrev = prev;
    let newNext = next;
    let newCurrentStep = currentStep;

    // avoid having the 'currentStep' pass the end
    if (currentStep !== end) newCurrentStep = currentStep + 1;

    // avoid the 'next' going over the end
    if (next !== end) newNext = next + 1;

    // assure that the 'prev' is either at the beginning or 1 steps apart from
    // the current step
    if (prev + 2 === newCurrentStep && prev !== end - 1) newPrev = prev + 1;

    // find out which button to render
    const buttonResolved = this.resolveRightButton(newCurrentStep, end);

    this.setState({
      currentStep: newCurrentStep,
      wizardAction: { prev: newPrev, next: newNext, end: end },
      buttonResolved: buttonResolved,
    });
  };

  /**
   * description: updates the wizard action to point to the left
   *
   * @param {*} wizardAction
   * @memberof Wizard
   */
  clickPrev = (wizardAction) => {
    const { currentStep } = this.state;
    const { prev, next, end } = wizardAction;

    let newPrev = prev;
    let newNext = next;
    let newCurrentStep = currentStep;

    // avoid having the 'currentStep' pass the beginning
    if (currentStep !== 1) newCurrentStep = currentStep - 1;

    // assure that the 'next' is either at the beginning or 1 steps apart from
    // the current step
    if (next - 2 === newCurrentStep) newNext = next - 1;

    // avoid having the 'pre' pass the beginning
    if (prev === newCurrentStep && prev !== 1) newPrev = prev - 1;

    // find out which button to render
    const buttonResolved = this.resolveRightButton(newCurrentStep, end);

    this.setState({
      currentStep: newCurrentStep,
      wizardAction: { prev: newPrev, next: newNext, end: end },
      buttonResolved: buttonResolved,
    });
  };

  /**
   * description: percentage calculation made to update the progress bar
   *
   * @memberof Wizard
   * @return
   */
  caculateProgress = () => {
    const { currentStep, wizardAction } = this.state;
    const { end } = wizardAction;
    return (currentStep * 100) / end;
  };

  /**
   * description: determine which button to place on the right hand
   * of the pagination
   *
   * @param {int} currentStep
   * @param {int} end
   * @memberof Wizard
   * @return {string}
   */
  resolveRightButton = (currentStep, end) => {
    if (currentStep === end) {
      return "end";
    } else if (currentStep === end - 1) return "submit";

    return "next";
  };

  /**
   * description: calls on onComplete when the step has reached the second to last step
   *
   * @param {integer} buttonResolved
   * @param {function} onComplete
   * @memberof Wizard
   * @return {object}
   */
  destructureOnComplete = (buttonResolved, onComplete) => {
    return buttonResolved === "submit"
      ? onComplete()
      : { buttonName: "", errorMessage: [] };
  };

  render() {
    const { header, steps, wizardContext, onComplete } = this.props;
    const { currentStep, buttonResolved, wizardAction } = this.state;
    const { onAction, caculateProgress, destructureOnComplete } = this;

    const onCompleteResults = destructureOnComplete(buttonResolved, onComplete);

    return (
      <Form>
        <Form.Group>
          {/* <form> */}
          <Form.Label className={"shipping-header"}>{header()}</Form.Label>
          <Form.Group as={Row}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <ProgressBar>
                <ProgressBar
                  striped
                  variant={currentStep === wizardAction.end?"success":"info"}
                  now={caculateProgress()}
                  key={2}
                />
              </ProgressBar>
            </Col>
            <Col sm={1}></Col>
          </Form.Group>
        </Form.Group>

        {buttonResolved !== "submit" ? (
          steps && (
            <Step
              currentStep={currentStep}
              onAction={onAction}
              wizardContext={wizardContext}
              buttonResolved={buttonResolved}
            >
              {steps.filter((step, idx) => {
                return currentStep - 1 === idx ? true : false;
              })}
            </Step>
          )
        ) : (
          <React.Fragment>
            <Step
              currentStep={currentStep}
              onAction={onAction}
              wizardContext={wizardContext}
              buttonResolved={onCompleteResults.buttonName}
            >
              {steps.filter((step, idx) => {
                return currentStep - 1 === idx ? true : false;
              })}
            </Step>
            <Form.Group as={Row}>
              {onCompleteResults.errorMessage &&
                onCompleteResults.errorMessage.map((message, indx) => {
                  return (
                    <React.Fragment key={`wizard-error-message-${indx}`}>
                    <Col sm={2}></Col>
                    <Form.Label  key={`error-message-${indx}`}  column sm={8} className={"error-message"} >
                      {message}
                    </Form.Label>
                    <Col sm={2}></Col>
                    </React.Fragment>
                  );
                })}
            </Form.Group>
          </React.Fragment>
        )}
      </Form>
    );
  }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
};
Wizard.defaultProps = {
  header: null,
  steps: null,
  wizardContext: null,
  onComplete: null,
};
