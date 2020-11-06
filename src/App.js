import React from "react";
import "../node_modules/antd/dist/antd.less";
import "./assets/style/reset.less";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/about/About";

function App() {
  return (
    // 路由
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
