/**
 * title: wizard.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the shippingLabelmaker aspect of the application
 */

import React from "react";
import Wizard from "../../wizard/wizard";

/**
 *
 *
 * @export
 * @class ShippingLabelMaker
 * @extends {React.component()}
 */
export default class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingObject: {
        receiver: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: "",
        },
        sender: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: "",
        },
        weight: 0,
        shippingOption: null,
        shippingRate: 0.4, //shippingRate shippingCost
        shippingCost: 0, //added for convenience
      },
    };
  }

  handleReceiver = (evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;
    const { shippingObject } = this.state;
    const { receiver } = shippingObject;
    const newReceiver = {
      ...receiver,
      [name]: value,
    };
    const newShippingObject = { ...shippingObject, receiver: newReceiver };
    this.setState({ shippingObject: newShippingObject });

    this.setState();
  };

  handleSender = (evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;
    const { shippingObject } = this.state;
    const { sender } = shippingObject;
    const newSender = {
      ...sender,
      [name]: value,
    };
    const newShippingObject = { ...shippingObject, sender: newSender };
    this.setState({ shippingObject: newShippingObject });
  };

  handleWeight = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    const { shippingObject } = this.state;
    const newShippingObject = { ...shippingObject, weight: value };
    this.setState({ shippingObject: newShippingObject });
  };

  handleShippingOption = (evt) => {
    const { shippingObject } = this.state;
    const { weight, shippingRate } = shippingObject;
    const { name } = evt.target;
    const newShippingObject = {
      ...shippingObject,
      shippingOption: name,
      shippingCost: this.calculateCost(weight, shippingRate, name),
    };
    const newOBj = { shippingObject: newShippingObject };
    // console.log("newOBj", newOBj);
    this.setState(newOBj);
  };

  calculateCost = (weight, shippingRate, shippingOption) => {
    const num = weight * shippingRate * (shippingOption === "ground" ? 1 : 1.5);
    return num.toFixed(2);
  };

  render() {
    const { shippingObject } = this.state;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
    } = this;
    // console.log("shippingObject____", shippingObject.shippingOption);
    return (
      <Wizard
        wizardContext={shippingObject}
        handleShippingOption={handleShippingOption}
        handleWeight={handleWeight}
        handleSender={handleSender}
        handleReceiver={handleReceiver}
      />
    );
  }
}
