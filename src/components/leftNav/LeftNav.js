import React, { useState } from "react";
import "./leftNav.less";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { Menu, Button, Sider } from "antd";

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

export default function LeftNav() {
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
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/home">首页</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="商品管理">
          <Menu.Item key="5">品类管理</Menu.Item>
          <Menu.Item key="6">商品管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<MailOutlined />} title="用户管理">
          <Menu.Item key="7">
            <Link to="user">用户</Link>
          </Menu.Item>
          <Menu.Item key="8">商品管理</Menu.Item>
        </SubMenu>

        <SubMenu key="sub3" icon={<MailOutlined />} title="角色管理">
          <Menu.Item key="7">
            <Link to="category">品类管理</Link>
          </Menu.Item>
          <Menu.Item key="8">商品管理</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图形图表">
          <Menu.Item key="9">
            <Link to="/barchart">柱状图</Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/linechart">折线图</Link>
          </Menu.Item>
          <Menu.Item key="11">
            <Link to="/piechart">饼图</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
