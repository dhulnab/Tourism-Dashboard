"use client";
import styles from "./chart.module.css";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 200,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 200,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 300,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 400,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

  render() {
    return (
      <ResponsiveContainer width="100%" height="60%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="date" /> */}
          <YAxis style={{ fontSize: "10px" }} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#197bbd" fill="#197bbd" />
        </AreaChart>
        <div className={styles.footer}>
          <h5>$ 2300.00</h5>
          <p>: اجمالي الدخل هذا الشهر </p>
        </div>
      </ResponsiveContainer>
    );
  }
}
