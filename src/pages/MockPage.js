import React from "react";
import { Button } from "antd";
import axios from "axios";
import { fetchList } from "../api";

export default function MockPage() {
  const fetchList = async () => {
    // const res = await axios.get("/fetchlist");
    const res = await fetchList()
    console.log(res);
  };
  return (
    <div>
      <Button onClick={fetchList}>mock test</Button>
    </div>
  );
}
