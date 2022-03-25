import React from "react";
import { Dashboard } from "./component/MainDash/Dashboard";
import store from "./redux/store";
import { SideBar } from "./component/SideBar/SideBar";
import { Provider } from "react-redux";
import { Wrapper } from "./component/Wrapper/Wrapper";
function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <SideBar />
        <Dashboard />
      </Wrapper>
    </Provider>
  );
}

export default App;
