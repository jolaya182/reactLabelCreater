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
      wizardContext: props.shippingObject,
      wizardAction: {
        prev: 1,
        next: 2,
        end: 5,
      },
      total: 0,
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
    const { wizardContext, currentStep, total, wizardAction } = this.state;
    const { clickNext, clickPrev } = this;
    const { prev, next, end } = wizardAction;
    return (
      <div>
        <form>
          <div>{"Shipping Label Maker"}</div>
          <div type="text"> {"load bar |------------|"}</div>
          {
            {
              1: <StepReceiver wizardContext={wizardContext}></StepReceiver>,
              2: <StepSender wizardContext={wizardContext}></StepSender>,
              3: <StepWeight wizardContext={wizardContext}></StepWeight>,
              4: <StepOption wizardContext={wizardContext}></StepOption>,
              5: (
                <StepConfirm
                  wizardContext={wizardContext}
                  total={total}
                ></StepConfirm>
              ),
            }[currentStep]
          }
          <div>
            <div onClick={clickPrev}>
              {"<pre>"}
<<<<<<< HEAD
              {currentStep !== 1 ? prev : null}
            </div>

            <div onClick={clickNext}>{` < ${currentStep} > `}</div>

            <div onClick={clickNext}>
              {"<next>"}
              {currentStep !== end ? next : null}
=======
              { currentStep !== 1 ? prev: null}
            </div>

            <div onClick={clickNext}>
              {` < ${currentStep} > `}
              
            </div>

            <div onClick={clickNext}>
              {"<next>"}
              { currentStep !== end ? next: null}
>>>>>>> added 'currentStep', 'prev' and 'next' numbers to the navigation buttons'
            </div>
          </div>
        </form>
      </div>
    );
  }
}
