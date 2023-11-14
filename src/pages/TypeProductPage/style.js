import { Col, Row } from "antd";
import styled from "styled-components";

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
    flex-wrap: wrap;
`


export const  WrapperNavbar = styled(Col)`
    background: #fff;
    margin: 30px 10px 0 0;
    padding: 10px;
    border-radius: 8px;
    height: fit-content;
`

export const WrapperProductPage = styled(Row)`
    padding: 10px 120px 0;
    background: #efefef;
    flex-wrap: nowrap;
`