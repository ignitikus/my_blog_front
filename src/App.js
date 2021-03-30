import { Provider } from "react-redux";
import Wrapper from "./Components/Wrapper/Wrapper";

import store from "./redux/store/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;
