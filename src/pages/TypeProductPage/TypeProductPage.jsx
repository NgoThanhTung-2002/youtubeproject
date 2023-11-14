import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { WrapperNavbar, WrapperProductPage, WrapperProducts } from "./style";
import { Col, Pagination } from "antd";

const TypeProductPage = () => {
  const onShowSizeChange = () => {};
  return (
    <div>
      <WrapperProductPage>
        <WrapperNavbar span={4}>
          <NavbarComponent />
        </WrapperNavbar>
        <Col span={20}>
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination
            // showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={100}
            style={{ textAlign: "center", marginTop: "10px" }}
          />
        </Col>
      </WrapperProductPage>
    </div>
  );
};

export default TypeProductPage;
