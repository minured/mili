import React, { useState } from "react";
import "./leftNav.less";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { Menu, Button, Sider } from "antd";
import menuList from "../../config/menuList";
import { withRouter } from "react-router-dom";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

function LeftNav(props) {
  const { pathname } = props.location;
  let openKey = "/home";
  if (pathname === "/category" || pathname === "/product") {
    openKey = "/products";
  } else if (
    pathname === "/barchart" ||
    pathname === "/linechart" ||
    pathname === "/piechart"
  ) {
    openKey = "/charts";
  }
  const generateMenu = (menuList) => {
    const { pathname } = props.location;
    
    return menuList.map((item) => {
      if (!item.children) {

        return (
          <Menu.Item key={item.key} icon={<PieChartOutlined />}>
            <Link to={item.key}>{item.title}</Link>
          </Menu.Item>

        );
      } else {
        if (item.children.find(cItem => cItem.key))
        return (
          <SubMenu key={item.key} icon={<MailOutlined />} title={item.title}>
            {generateMenu(item.children)}
          </SubMenu>
        );
      }
    });
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    console.log("toggle");
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div className="left-sider">
        <Link to="/about">
          <div className="left-title-wrapper">
            <img src={logo} alt="" />
            <span>米粒后台</span>
          </div>
        </Link>
      </div>
      {/* 
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button> */}
      <Menu
        defaultOpenKeys={[openKey]}
        selectedKeys={[props.location.pathname]}
        theme="dark"
        mode="inline"
        inlineCollapsed={true}
      >
        {generateMenu(menuList)}
      </Menu>
    </div>
  );
}

export default withRouter(LeftNav);
