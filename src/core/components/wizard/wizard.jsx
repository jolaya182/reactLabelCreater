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
// import StepReceiver from "./../steps/step-receiver";
// import StepSender from "./../steps/step-sender";
// import StepWeight from "./../steps/step-weight";
// import StepOption from "./../steps/step-option";
// import StepConfirm from "./../steps/step-confirm";
// import StepComplete from "./../steps/step-complete";
// import Paginator from "./../features/paginator/paginator";
// import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import PropTypes from "prop-types";

/**
 * description:
 *
 * @export
 * @class Wizard
 * @extends {React.Component}
 */
export default class Wizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wizardAction: {
        type: "",
        prev: 1,
        next: 2,
        end: 6,
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
   * @return {
   */
  resolveRightButton = (currentStep, end) => {
    if (currentStep === end) {
      return "end";
    } else if (currentStep === end - 1) return "submit";

    return "next";
  };

  /**
   * description: if the data on the form is validated
   * then the shipping label will be displayed on
   * completion
   *
   * @param {array} isFormValid
   * @memberof Wizard
   */
  onComplete = (isFormValid) => {
    const { wizardAction } = this.state;
    const { end } = wizardAction;
    // const anyErrors = this.validateForm();
    if (!isFormValid) {
      this.setState({
        currentStep: end,
        buttonResolved: "end",
        errorMessage: [],
      });
    }
    this.setState({ errorMessage: isFormValid });
  };

  render() {
    const { wizardContext } = this.props;
    const {
      currentStep,
      wizardAction,
      buttonResolved,
      errorMessage,
    } = this.state;
    const { onAction, caculateProgress, onComplete } = this;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
      isDataInputsValid,
      steps,
    } = this.props;
    const currentStepElement = [steps[currentStep - 1]];
    console.log("currentStepElement", currentStepElement )

    return (
      <Form>
        <Form.Group>
          {/* <form> */}
          <Form.Label>{"Shipping Label Maker"}</Form.Label>
          <Form.Group as={Row}>
            <Col sm={2}></Col>
            <Col sm={8}>
              <ProgressBar>
                <ProgressBar
                  striped
                  variant="success"
                  now={caculateProgress()}
                  key={2}
                />
              </ProgressBar>
            </Col>
            <Col sm={3}></Col>
          </Form.Group>
        </Form.Group>

        { currentStepElement &&  currentStepElement.map(()=>{
           return (<Step
              currentStep={currentStep}
              onAction={onAction}
              wizardContext={wizardContext}
            >
              {currentStepElement}
            </Step>)}
          )}

        {/* {
          {
            1: (
              <StepReceiver
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
                handleReceiver={handleReceiver}
              ></StepReceiver>
            ),
            2: (
              <StepSender
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
                handleSender={handleSender}
              ></StepSender>
            ),
            3: (
              <StepWeight
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
                handleWeight={handleWeight}
              ></StepWeight>
            ),
            4: (
              <StepOption
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
                handleShippingOption={handleShippingOption}
              ></StepOption>
            ),
            5: (
              <StepConfirm
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
              ></StepConfirm>
            ),
            6: (
              <StepComplete
                wizardAction={wizardAction}
                wizardContext={wizardContext}
                onAction={onAction}
                currentStep={currentStep}
                onComplete={onComplete}
                isDataInputsValid={isDataInputsValid}
                buttonResolved={buttonResolved}
              ></StepComplete>
            ),
          }[currentStep]
        } */}

        <Form.Group>
          {errorMessage &&
            errorMessage.map((message, indx) => {
              return (
                <Form.Label as={Row} key={`error-message-${indx}`}>
                  <Col>{message}</Col>
                </Form.Label>
              );
            })}
        </Form.Group>
      </Form>
    );
  }
}

// Wizard.propTypes = {
//   steps: PropTypes.array.isRequired,
//   wizardContext: PropTypes.object.isRequired,
//   onComplete: PropTypes.func.isRequired,
// };
// Wizard.defaultProps = {
//   steps: PropTypes.array.isRequired,
//   wizardContext: PropTypes.object.isRequired,
//   onComplete: PropTypes.func.isRequired,
// };
