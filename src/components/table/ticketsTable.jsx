"use client";
import styles from "./Table.module.css";
import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
const data = [
  {
    id: 1,
    photo: "photo",
    name: "محمد علي عبد الحسين",
    phoneNumber: "07799999999",
    destination: "لبنان",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 2,
    photo: "photo",
    name: "علي جاسم باقر محسن",
    phoneNumber: "07808888888",
    destination: "تركيا",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 3,
    photo: "photo",
    name: "مؤمل حامد عبد الني فنجان",
    phoneNumber: "07814455240",
    destination: "سوريا",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 4,
    photo: "photo",
    name: "علي وليد علي وليد",
    phoneNumber: "07791234565",
    destination: "ايران",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 4,
    photo: "photo",
    name: "علي وليد علي وليد",
    phoneNumber: "07791234565",
    destination: "ايران",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 4,
    photo: "photo",
    name: "علي وليد علي وليد",
    phoneNumber: "07791234565",
    destination: "ايران",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 4,
    photo: "photo",
    name: "علي وليد علي وليد",
    phoneNumber: "07791234565",
    destination: "ايران",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
  {
    id: 4,
    photo: "photo",
    name: "علي وليد علي وليد",
    phoneNumber: "07791234565",
    destination: "ايران",
    purchasedate: "2021-3-12",
    price: 3435.977,
  },
];
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`رقم الهاتف`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
            outlineColor: "#197bbd",
            width: 300,
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              backgroundColor: "#197bbd",
              height: 30,
            }}
          >
            بحث
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 100,
              height: 30,
              marginRight: 44,
            }}
          >
            اعادة ضبط
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "السعر",
      dataIndex: "price",
      key: "price",
      width: "10%",
      style: { backgroundColor: "#fff" },
    },
    {
      title: "التاريخ",
      dataIndex: "purchasedate",
      key: "purchasedate",
      width: "10%",
      style: { backgroundColor: "#fff" },
    },
    {
      title: "الوجهة",
      dataIndex: "destination",
      key: "destination",
      width: "10%",
      style: { backgroundColor: "#fff" },
    },
    {
      title: "رقم الهاتف",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "13%",
      style: { backgroundColor: "#fff" },
      ...getColumnSearchProps("phoneNumber"),
    },
    {
      title: "الاسم",
      dataIndex: "name",
      key: "name",
      width: "20%",
      style: { backgroundColor: "#fff" },
      ...getColumnSearchProps("name"),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      style: { backgroundColor: "#fff" },
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
export default App;
