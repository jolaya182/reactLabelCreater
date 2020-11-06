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
import StepReceiver from "./../steps/step-receiver";
import StepSender from "./../steps/step-sender";
import StepWeight from "./../steps/step-weight";
import StepOption from "./../steps/step-option";
import StepConfirm from "./../steps/step-confirm";
import StepComplete from "./../steps/step-complete";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/**
 *
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
      errorMessage:[]
    };
  }

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
      buttonResolved:buttonResolved,
    });
  };

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
      buttonResolved:buttonResolved
    });
  };

  caculateProgress = () => {
    const { currentStep, wizardAction } = this.state;
    const { end } = wizardAction;
    return (currentStep * 100) / end;
  };

  resolveRightButton = (currentStep, end)=>{
    if(currentStep === end ){
      return "end"
    }else if(currentStep === end-1) return "submit"
    
    return "next"
  }

  submitConfirmation = (isFormValid) => {
    console.log("form request submission", "isFormValid",isFormValid);
    const { wizardAction } = this.state;
    const { end } = wizardAction;
    // const anyErrors = this.validateForm();
    if(!isFormValid){
      this.setState({ currentStep: end, buttonResolved: "end", errorMessage:[] });}
    this.setState({errorMessage:isFormValid});

  };

  render() {
    const { wizardContext } = this.props;
    const { currentStep, wizardAction, buttonResolved, errorMessage } = this.state;
    const { onAction, caculateProgress, submitConfirmation } = this;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
      isDataInputsValid
    } = this.props;

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
        {
          {
            1: (
              <StepReceiver
                wizardContext={wizardContext}
                handleReceiver={handleReceiver}
              ></StepReceiver>
            ),
            2: (
              <StepSender
                wizardContext={wizardContext}
                handleSender={handleSender}
              ></StepSender>
            ),
            3: (
              <StepWeight
                wizardContext={wizardContext}
                handleWeight={handleWeight}
              ></StepWeight>
            ),
            4: (
              <StepOption
                wizardContext={wizardContext}
                handleShippingOption={handleShippingOption}
              ></StepOption>
            ),
            5: <StepConfirm wizardContext={wizardContext}></StepConfirm>,
            6: <StepComplete wizardContext={wizardContext}></StepComplete>,
          }[currentStep]
        }

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

            {{
              "next": (
                <Button
                  size="lg"
                  variant="info"
                  onClick={() =>
                    onAction({ ...wizardAction, type: "next" })
                  }
                >
                  {"Next"}
                </Button>
              ),
              "submit": (
                <Button
                  size="lg"
                  variant="info"
                  onClick={()=>{
                    submitConfirmation(isDataInputsValid())
                  }}
                >
                  {"Submit"}
                </Button>
              ),
              "end": null,

             }[buttonResolved]
            }
          </Col>
          <Col sm={2}></Col>
        </Form.Group>
        <Form.Group>
          {errorMessage && errorMessage.map((message,indx)=>{
            return<Form.Label as={Row} key={`error-message-${indx}`} ><Col>{message}</Col></Form.Label>
          })}
        </Form.Group>
      </Form>
    );
  }
}
