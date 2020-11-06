/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./login.less";
import { Input, Button, message } from "antd";
import logo from "../../assets/images/logo.jpg";
import { reqLogin } from "../../api";


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Login(props) {
  const loginModel = {
    username: "",
    password: "",
  };

  const [loginInfo, setLoginInfo] = useState(loginModel);

  const onUsernameChange = (e) => {
    setLoginInfo(() => {
      return {
        ...loginInfo,
        username: e.target.value,
      };
    });
  };
  const onPasswordChange = (e) => {
    setLoginInfo(() => {
      return {
        ...loginInfo,
        password: e.target.value,
      };
    });
  };

  // 使用 async await 通常通过 try catch来处理错误，但是不够优雅
  // async await 不能让promise，走reject
  // 通过axios拦截器，拦截

  const onSubmit = async () => {
    const res = await reqLogin(loginInfo);
    console.log(res.data);
    // 1.请求是否成功,在拦截器处理
    // 2.登陆是否成功
    if (res.data.status === 0) {
      message.success("登陆成功");
      localStorage.setItem("login", JSON.stringify(res.data));
      props.history.push("/admin");
      //
    } else {
      message.error(res.data.msg);
    }
  };

  // 不使用async await
  // 利用 axios返回的promise处理错误
  const onSubmit2 = () => {
    reqLogin(loginInfo).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
        message.error("请求错误");
      }
    );
  };

  return (
    <div className="login">
      <header className="header">
        <div className="header-wrapper">
          <img src={logo} alt="" />
          <p className="title">米粒后台</p>
        </div>
      </header>

      <div className="login-form">
        <Input
          className="input-form form-item"
          onChange={onUsernameChange}
          value={loginInfo.username}
          placeholder="username"
        />
        <Input
          className="input-form form-item"
          onChange={onPasswordChange}
          value={loginInfo.password}
          type="password"
          placeholder="password"
        />
        <Button onClick={onSubmit} type="primary" className="form-item">
          登录
        </Button>
      </div>

    </div>
  );
}
