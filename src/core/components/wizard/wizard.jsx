/**
 * title: wizard.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the wizard aspect of the application
 */
import React from 'react';
import './../../../css/app.css';

/**
 *
 *
 * @export
 * @class Wizard
 * @extends {React.Component}
 */
export default class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wizardContext : props.shippingObject
        }
    }
    render(){
        return(
        <div>{"wizard"}</div>
        )
    }
}