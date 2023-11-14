import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from "antd";
import imageLogo from "../../assets/images/logo-login.png"
import {
  LeftOutlined,
  EyeFilled,
  EyeInvisibleFilled
} from "@ant-design/icons";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0,  0.53)', height: '100vh'}}>
      <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
        <LeftOutlined />
          <h1>Xin chào</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
          <InputForm style={{ marginBottom: '10px'}} placeholder="abc@gmail.com"/>
          <div style={{ position: 'relative'}}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >
            {isShowPassword ? (
              <EyeFilled />
              ) : (
                <EyeInvisibleFilled />
            )}
            </span>
            <InputForm placeholder="password" type={isShowPassword ? "text" : "password"}/>
          </div>
          <ButtonComponent
            size={40}
            styleButton={{
              background: "rgb(255, 57, 69)",
              color: "#fff",
              height: "48px",
              width: "100%",
              border: "none",
              fontSize: "15px",
              fontWeight: "700",
              margin: '26px 0 10px'
            }}
            textButton={"Đăng nhập"}
          />
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản</WrapperTextLight></p>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px"/>
          <h4>Mua sắm tại Tungo</h4>

        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
