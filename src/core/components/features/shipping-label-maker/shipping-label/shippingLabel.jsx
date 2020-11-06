/**
 * title: shipping-label.jsx
 *
 * date: 11/6/2020
 *
 * author: javier olaya
 *
 * description: this component represents the label
 *
 */

import React from "react";
import Form from "react-bootstrap/Form";
import barCode from "./../../../../pic/barCode.svg"; //barCode

/**
 * description: form with the completed details
 *
 * @return {html element}
 */
const ShippingLabel = () => {
  return (
    <Form.Group>
      <img src={barCode} alt={`bar code`} />
    </Form.Group>
  );
};
export default ShippingLabel;
