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
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

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
        end: 5,
      },
      currentStep: 4,
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

    this.setState({
      currentStep: newCurrentStep,
      wizardAction: { prev: newPrev, next: newNext, end: end },
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

    this.setState({
      currentStep: newCurrentStep,
      wizardAction: { prev: newPrev, next: newNext, end: end },
    });
  };

  caculateProgress = () => {
    const { currentStep } = this.state;
    return (currentStep * 100) / 5;
  };

  render() {
    const { wizardContext } = this.props;
    const { shippingCost } = wizardContext;
    const { currentStep, wizardAction } = this.state;
    const { onAction, caculateProgress } = this;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
    } = this.props;

    return (
      <Form>
        <Form.Group>
          {/* <form> */}
          <Form.Label>{"Shipping Label Maker"}</Form.Label>
          <ProgressBar>
            <ProgressBar
              striped
              variant="success"
              now={caculateProgress()}
              key={1}
            />
          </ProgressBar>
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
            5: (
              <StepConfirm
                wizardContext={wizardContext}
                shippingCost={shippingCost}
              ></StepConfirm>
            ),
          }[currentStep]
        }

        <Form.Group >
            <Button size="lg" variant="info" onClick={() => onAction({ ...wizardAction, type: "prev" })}>
              {"Previous"}
            </Button>
            <Form.Label column sm={3}>
              {currentStep}
            </Form.Label>
            <Button size="lg" variant="info"onClick={() => onAction({ ...wizardAction, type: "next" })} >
              {"Next"}
            </Button>
        </Form.Group>
      </Form>
    );
  }
}
