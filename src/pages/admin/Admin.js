/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import "./admin.less";
import { Layout } from "antd";

import LeftNav from "../../components/leftNav/LeftNav";

import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../../pages/home/Home";
import Category from "../../pages/category/Catgegory";
import User from "../../pages/user/User";
import Role from "../../pages/role/Role";
import Product from "../../pages/product/Product";
import BarChart from "../../pages/charts/BarChart";
import LineChart from "../../pages/charts/LineChart";
import PieChart from "../../pages/charts/PieChart";
// import  from "../../pages";

const { Header, Content, Footer, Sider } = Layout;

export default function Admin(props) {
  const [loginInfo, setLoginInfo] = useState(null);
  const logout = () => {
    setLoginInfo(() => {
      return null;
    });
    localStorage.removeItem("login");
  };

  const loginTips = loginInfo ? (
    <div className="login-tips">
      欢迎你， {loginInfo.data.username} &nbsp;
      <a href=" " onClick={logout}>
        登出
      </a>
    </div>
  ) : (
    <div>未登录, 即将跳转到登录页...</div>
  );

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("login") || null);
    if (!localData) {
      setTimeout(() => {
        props.history.replace("/login");
      }, 1000);
    }
    console.log(localData);
    setLoginInfo(() => {
      return localData;
    });
  }, []);

  return (
    <div className="admin-page">
      <div>{loginTips}</div>
      <div className="main-wrapper">
        <Layout className="main">
          <Sider className="main-sider">
            <LeftNav />
          </Sider>

          <Layout className="main-content">
            <Header className="content-header">header</Header>

            <Content className="content">
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/user" component={User} />
                <Route path="/category" component={Category} />
                <Route path="/barchart" component={BarChart} />
                <Route path="/linechart" component={LineChart} />
                <Route path="/product" component={Product} />
                <Route path="/piechart" component={PieChart} />
                <Route path="/role" component={Role} />
                <Redirect to="/home" />
              </Switch>
            </Content>

            <Footer className="content-footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
