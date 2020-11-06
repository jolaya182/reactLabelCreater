/**
 * title: step.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component is the class for all the steps
 *
 */

import React from "react";
import Form from 'react-bootstrap/Form'

const Step = ({children}) => {
  return <Form.Group>{children}</Form.Group>;
};
export default Step;
