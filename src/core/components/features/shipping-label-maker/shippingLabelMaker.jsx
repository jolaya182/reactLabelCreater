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
import PropTypes from "prop-types";

/**
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
          zip: 0,
        },
        sender: {
          name: "",
          street: "",
          city: "",
          state: "",
          zip: 0,
        },
        weight: 0,
        shippingOption: null,
        shippingRate: 0.4, //shippingRate shippingCost
        shippingCost: 0, //added for convenience
      },
    };
  }

  /**
   * description: gathers receiver's data from the step
   *
   * @param {*} evt
   * @memberof ShippingLabelMaker
   */
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

  /**
   * description: gathers sender's data from the step
   *
   * @param {*} evt
   * @memberof ShippingLabelMaker
   */
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

  /**
   * description: gather the weight from the step 
   *
   * @param {*} evt
   * @memberof ShippingLabelMaker
   */
  handleWeight = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    const { shippingObject } = this.state;
    const newShippingObject = { ...shippingObject, weight: value };
    this.setState({ shippingObject: newShippingObject });
  };

  /**
   * description: gathers shipping option data from step 
   *
   * @param {*} evt
   * @memberof ShippingLabelMaker
   */
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
    this.setState(newOBj);
  };

  /**
   * description: calculates total cost of shipping
   *
   * @param {int} weight
   * @param {int} shippingRate
   * @param {string} shippingOption
   * @memberof ShippingLabelMaker
   * @return {int}
   */
  calculateCost = (weight, shippingRate, shippingOption) => {
    const num = weight * shippingRate * (shippingOption === "ground" ? 1 : 1.5);
    return num.toFixed(2);
  };

  /**
   * description: collects all the errors from the steps and returns an array of strings
   *
   * @memberof ShippingLabelMaker
   * @return {array}
   */
  isDataInputsValid = () => {
    const { shippingObject } = this.state;
    const { receiver, sender, weight, shippingOption } = shippingObject;
    const regexNumbers = /[0-9]/g;

    let isFormValid = [];
    // validate receiver
    const isReceiverPlaceValid = this.isPlaceValid(receiver);
    if (isReceiverPlaceValid)
      isFormValid = isFormValid.concat(isReceiverPlaceValid);

    //validate  sender
    const isSenderPlaceValid = this.isPlaceValid(sender);
    if (isSenderPlaceValid)
      isFormValid = isFormValid.concat(isSenderPlaceValid);

    //validate weight
    if (!weight.match(regexNumbers))
      isFormValid.push("weight is not a correct number");

    //validate option
    if (!(shippingOption === "ground" || shippingOption === "priority"))
      isFormValid.push("shipping option was not submitted");

    return isFormValid.length > 0 ? isFormValid : null;
  };

  /**
   * description: validates the receiver's and sender's input
   *
   * @param {obj} place
   * @memberof ShippingLabelMaker
   * @return {array}
   */
  isPlaceValid = (place) => {
    const { name, street, city, state, zip } = place;
    const regexLetters = /[A-Za-z]/g;
    const regexNumbers = /[0-9]/g;
    const placeErrors = [];

    //validate name
    if (!name.match(regexLetters))
      placeErrors.push("one of the names are not all letters");

    //validate street
    if (!street.match(regexLetters))
      placeErrors.push("one of the street names are not all letters");

    //validate city
    if (!city.match(regexLetters))
      placeErrors.push("one of the city names are not all letters");

    //validate state
    if (!state.match(regexLetters))
      placeErrors.push("one of the state names are not all letters");

    //validate zip
    if (!zip.match(regexNumbers))
      placeErrors.push("zip  is not a correct number");

    return placeErrors.length > 0 ? placeErrors : null;
  };

  render() {
    const { shippingObject } = this.state;
    const {
      handleShippingOption,
      handleWeight,
      handleSender,
      handleReceiver,
      isDataInputsValid,
    } = this;

    return (
      <Wizard
        wizardContext={shippingObject}
        handleShippingOption={handleShippingOption}
        handleWeight={handleWeight}
        handleSender={handleSender}
        handleReceiver={handleReceiver}
        isDataInputsValid={isDataInputsValid}
      />
    );
  }
}

ShippingLabelMaker.propTypes = {
  Wizard: PropTypes.element,
};

ShippingLabelMaker.defaultProp = {
  Wizard: null,
};
