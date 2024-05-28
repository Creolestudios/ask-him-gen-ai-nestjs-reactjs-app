import React, { useEffect, useState } from "react";
import { FormWrapper } from "../../../globalStyles";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import { base_url, loginAdmin } from "../../../constant";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import { LoginWrapper } from "../Login/Login.styles";

const Reset = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [resetPasswordForm] = Form.useForm();

  const userIdReset = location.search.split("=").at(-1);

  const [confirmPasswordError, setConfirmPasswordError] = useState({
    enable: false,
    errMsg: "",
  });

  const onFinish = async (values) => {
    const emailData = await axios
      .post(`${base_url}/admin/set`, { values, body: userIdReset })
      .then((res) => res?.data);

    if (emailData?.success === true) {
      // localStorage.setItem('token', values?.email);
      navigate("/admin/login");
    } else {
      setConfirmPasswordError({
        enable: true,
        errMsg: emailData?.message,
      });
      // alert(emailData?.message);
    }
  };

  useEffect(() => {
    if (confirmPasswordError.enable) {
      resetPasswordForm.validateFields();
    }
  }, [confirmPasswordError]);

  return (
    <LoginWrapper>
      <FormWrapper className="login-wrap">
        <Form
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          form={resetPasswordForm}
          onChange={() => {
            if (confirmPasswordError.enable) {
              setConfirmPasswordError({
                enable: false,
                errMsg: "",
              });
            }
          }}
        >
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter the Password" },
              // () => ({
              //   validator() {
              //     if (confirmPasswordError.enable) {
              //       return Promise.reject(confirmPasswordError?.errMsg);
              //     }
              //     return Promise.resolve();
              //   },
              // }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm_password"
            rules={[
              { required: true, message: "Please enter the Confirm Password" },
              () => ({
                validator() {
                  if (confirmPasswordError.enable) {
                    return Promise.reject(confirmPasswordError?.errMsg);
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Reset;
