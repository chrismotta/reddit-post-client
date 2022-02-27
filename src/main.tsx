import React from "react";
import ReactDOM from "react-dom";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

const store: Store<PostState, PostAction> & { dispatch: Dispatch } =
  createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
