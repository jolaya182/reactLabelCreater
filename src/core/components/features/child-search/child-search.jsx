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
    if ( !Array.isArray(subChildren )) {
      console.log("it is an object");
    } else {
      console.log(`it is an array`);
    }
    console.log("tools",window.__REACT_DEVTOOLS_GLOBAL_HOOK__.getFiberRoots(1));
  }

  render() {
    const {children} = this.props;
    const  newC = [children];
    return( children && newC.map((e)=>e) );
  }
}
