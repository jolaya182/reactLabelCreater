/**
 * title: wizard.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this component handles the wizard aspect of the application
 */
// import './../../../../css/app.css';
import Wizard from '../../wizard/wizard';

function ShippingLabelMaker() {
    const shippingObject = {
        receiver:{
            name:null,
            street:null,
            city:null,
            zip:null
        },
        sender:{
            name:null,
            street:null,
            city:null,
            zip:null
        },
        weight: 0,
        shippingOption:1
    };
    return(
        <Wizard shippingObject={shippingObject}/> 
    )
}

export default ShippingLabelMaker;