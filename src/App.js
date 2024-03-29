import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./lib/redux";

import InboxScreen from "./components/inbox_screen/InboxScreen";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    );
  }
}

export default App;
