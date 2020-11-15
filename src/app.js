/**
 * title: app.jsx
 *
 * date: 11/4/2020
 *
 * author: javier olaya
 *
 * description: this is the main component 
 * that handles the entire web application (shipping label maker)
 */
import "./core/css/app.css";
import ChildSearch from "./core/components/features/child-search/child-search";
import ShippingLabelMaker from "./core/components/features/shipping-label-maker/shippingLabelMaker";

const SomeDiv = () =><div>{`some Dive`}</div>

/**
 *
 *
 * @function App {*}
 */
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ChildSearch>{"const "}<SomeDiv></SomeDiv><ShippingLabelMaker></ShippingLabelMaker></ChildSearch>
        </header>
      </div>
  );
}

export default App;
