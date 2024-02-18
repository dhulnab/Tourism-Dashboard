"use client";
import styles from "./Table.module.css";
import React from "react";
import { Table } from "antd";
const data = [
  {
    id: 1,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 2,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 3,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 4,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 5,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 6,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 7,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
  {
    id: 8,
    date: "2024-2-12-03-50",
    rate: "5/3",
  },
];
const ReviewsTableApp = () => {
  const columns = [
    {
      title: "التقيم",
      dataIndex: "rate",
      key: "rate",
      width: "35%",
    },
    {
      title: "التاريخ",
      dataIndex: "date",
      key: "date",
      width: "45%",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "20%",
    },
  ];
  return (
    <Table
      size="small"
      className={styles.customheaderstyle}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};
export default ReviewsTableApp;
