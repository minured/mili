import React from "react";
import "../node_modules/antd/dist/antd.less";
import "./assets/style/reset.less";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/about/About";
import Review from "./review/review";
import MockPage from "./pages/MockPage";

function App() {
  return (
    // 路由
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Admin} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/review" component={Review} />
        <Route path="/mockjs" component={MockPage} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
