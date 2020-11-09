import React, { useState } from "react";
import moment from "moment";
import Axios from "axios";

import {
  Button,
  Input,
  List,
  Typography,
  Divider,
  message,
  TimePicker,
} from "antd";
import axios from "axios";
import "./review.less";

const { TextArea } = Input;

Axios.defaults.baseURL = "";

export default function Review() {
  const [queue, setQueue] = useState([]);
  const [orderInfo, setOrderInfo] = useState({ tel: "", cookie: "" });
  const order = (orderInfo) => {
    console.log(orderInfo);
  };
  const addToQueue = () => {
    console.log(orderInfo);
    setQueue([...queue, orderInfo]);
  };
  const onTelChange = (e) => {
    setOrderInfo(() => ({ ...orderInfo, tel: e.target.value }));
  };
  const onCookieChange = (e) => {
    setOrderInfo(() => ({ ...orderInfo, cookie: e.target.value }));
  };

  const onSendOrder = async (orderInfo) => {
    const url =
      "https://m.client.10010.com/welfare-mall-front/mobile/api/bj2402/v1";
    const headers = {
      Origin: "https://m.client.10010.com",
      Host: "https://m.client.10010.com",
      "User-Agent":
        "Mozilla/5.0 (Linux; Android 6.0.1; NX569H Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36; unicom{version:android@7.0403,desmobile:" +
        orderInfo.tel +
        "};devicetype{deviceBrand:nubia,deviceModel:NX569H};{yw_code:}",
      Cookie: orderInfo.cookie,
    };
    const res = await axios.get(url, headers);
    console.log(res);
  };

  const getGoodsList = () => {
    if (queue[0]) {
      const headers = {
        referer: "https://m.client.10010.com",
        origin: "https://m.client.10010.com",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0.1; NX569H Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36; unicom{version:android@7.0403,desmobile:" +
          orderInfo.tel +
          "};devicetype{deviceBrand:nubia,deviceModel:NX569H};{yw_code:}",
        Cookie: orderInfo.cookie,
      };
      const url =
        "https://m.client.10010.com/welfare-mall-front-activity/mobile/activity/get619Activity/v1";
      const options = {};
    } else {
      message.error("请至少添加一个cookie");
    }
  };
  return (
    <div className="page">
      <div className="main-content">
        <div className="content">
          <div className="inputInfo">
            <label>
              手机号：
              <Input onChange={onTelChange} value={orderInfo.tel} />
            </label>
            <label>
              cookies:
              <TextArea onChange={onCookieChange} value={orderInfo.cookie} />
            </label>
            <div className="add-button">
              <Button
                className={addToQueue}
                type="primary"
                onClick={addToQueue}
              >
                添加到队列
              </Button>
            </div>
          </div>

          <div className="queue">
            <Divider orientation="middle">等待下单</Divider>
            <div>
              <span>定时：</span>
              <TimePicker defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />
            </div>
            <List
              dataSource={queue}
              renderItem={(item, index) => (
                <List.Item>
                  <span className="number">{index + 1}. &nbsp;</span>
                  <span className="tel-number">{item.tel}</span>
                  <Button className="send-order" onClick={onSendOrder}>
                    立即下单
                  </Button>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
      <div className="side-right">
        <div className="side-list">
          <Button onClick={getGoodsList}>&nbsp; 获取商品 &nbsp;</Button>
        </div>
      </div>
    </div>
  );
}
