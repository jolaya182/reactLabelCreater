/**
 * title: child-search.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the shippingLabelmaker aspect of the application
 */

import React from "react";
import ReactDom from "react-dom";
import ShippingLabelMaker from "../shipping-label-maker/shippingLabelMaker";

/**
 *
 * @export
 * @class ChildSearch
 * @extends {React.component()}
 */
export default class ChildSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount = () =>{
    const {props} = this
    const subChildren = props.children
    console.log("props", props)
    if (Array.isArray(subChildren )) {
      const newShippingLabel = ReactDom.findDOMNode(subChildren[2].key);
      // const newShippingLabel = props.children[2];
      console.log(`it is an array`, newShippingLabel);
      // console.log(`newShippingLabel ${newShippingLabel._owner.child.stateNode.childNodes}`)
    } else {
      console.log("it is an object");
    }
  }

  render() {
    const { props } = this;
    
    return( <ShippingLabelMaker></ShippingLabelMaker>);
  }
}
