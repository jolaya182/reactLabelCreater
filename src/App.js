/**
 * title: app.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this is the main component that handles the entire web application
 */
import "./core/css/app.css";
import ShippingLabelMaker from "./core/components/features/shipping-label-maker/shippingLabelMaker";

/**
 *
 *
 * @function App {*}
 */
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ShippingLabelMaker></ShippingLabelMaker>
         {"app"}
        </header>
      </div>
  );
}

export default App;
