import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import { WrapperNavbar, WrapperProductPage, WrapperProducts } from "./style";
import { Col, Pagination, Row } from "antd";

const TypeProductPage = () => {
  const onShowSizeChange = () => {};
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <Row style={{ flexWrap: "nowrap", paddingTop: "10px" }}>
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
        </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
