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
        prev: 1,
        next: 2,
        end: 5,
      },
      currentStep: 1,
    };
  }

  clickNext = () => {
    const { wizardAction, currentStep } = this.state;
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

  clickPrev = () => {
    const { wizardAction, currentStep } = this.state;
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

  render() {
    const { wizardContext } = this.props;
    const { shippingOption, shippingCost } = wizardContext;
    const { currentStep, wizardAction } = this.state;
    const { clickNext, clickPrev } = this;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
    } = this.props;
    const { prev, next, end } = wizardAction;

    console.log("shipping Otion", shippingOption);

    return (
      <div>
        {/* <form> */}
        <div>{"Shipping Label Maker"}</div>
        <div type="text"> {"loading bar |-----------------|"}</div>
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

      {{
        prev: 1,
        next: 2,
        end: 5,
      }[wizardAction]}
        <div>
          <div onClick={clickPrev}>
            {"<pre>"}
            {currentStep !== 1 ? prev : null}
          </div>

          <div onClick={clickNext}>{` < ${currentStep} > `}</div>

          <div onClick={clickNext}>
            {"<next>"}
            {currentStep !== end ? next : null}
          </div>
        </div>
        {/* </form> */}
      </div>
    );
  }
}
