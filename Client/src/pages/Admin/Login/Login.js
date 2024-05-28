import React, { useEffect, useRef, useState } from "react";
import { LoginWrapper } from "./Login.styles";
import { FormWrapper } from "../../../globalStyles";
import { Button, Modal, Checkbox, Form, Input } from "antd";
import { base_url, loginAdmin } from "../../../constant";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { notification } from "antd";
import Loader from "../../../components/Loader/Loader";

const Login = () => {
  const [loginForm] = Form.useForm();
  const [resetEmailForm] = Form.useForm();
  const [error, seterror] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [loader, setLoader] = useState(false);
  const [emailError, setEmailError] = useState({
    enable: false,
    errMsg: "",
  });
  const [resetEmailError, setResetEmailError] = useState({
    enable: false,
    errMsg: "",
  });

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const emailData = await axios
      .post(`${base_url}/admin/login`, values)
      .then((res) => res?.data);

    if (emailData?.success === true) {
      localStorage.setItem("token", values?.email);
      navigate("/admin/dashboard");
    } else {
      console.log(emailData?.message, "errMessage");
      api.open({
        message: "",
        description: emailData?.message,
        className: "error",
        duration: 5,
      });
    }
  };

  const forgotpassword = async (values) => {
    setLoader(true);
    seterror("");

    const emailData = await axios
      .post(`${base_url}/admin/reset`, values)
      .then((res) => res?.data);

    setLoader(false);

    console.log("emailData", emailData.success);

    if (emailData?.success === false) {
      setIsModalOpen(true);
      setResetEmailError({
        enable: true,
        errMsg: emailData?.message,
      });
    } else {
      setIsModalOpen(false);
      api.open({
        message: "",
        description: "Please check your email Inbox!",
        duration: 10,
      });
    }
  };
  const showModal = () => {
    seterror("");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    seterror("");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    seterror("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (emailError.enable) {
      loginForm.validateFields();
    }
  }, [emailError]);

  useEffect(() => {
    if (resetEmailError.enable) {
      resetEmailForm.validateFields();
    }
  }, [resetEmailError]);

  console.log("reset", resetEmailError.errMsg);

  return (
    <>
      {contextHolder}
      <LoginWrapper>
        <FormWrapper className="login-wrap">
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
            form={loginForm}
            className="login"
            onChange={() => {
              if (emailError.enable) {
                setEmailError({
                  enable: false,
                  errMsg: "",
                });
              }
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
                () => ({
                  validator() {
                    if (emailError.enable) {
                      return Promise.reject(emailError?.errMsg);
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter the Password" }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Button className="forgot-btn" type="primary" onClick={showModal}>
            Forgot Password
          </Button>
          <Modal
            title="Forgot Password"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={""}
            className="forgot-password-modal"
            width={420}
          >
            <LoginWrapper className="forgot-passowrd">
              <Form
                initialValues={{
                  remember: true,
                }}
                form={resetEmailForm}
                onFinish={forgotpassword}
                autoComplete="off"
                className="forgot-email"
                onChange={() => {
                  if (resetEmailError.enable) {
                    setResetEmailError({
                      enable: false,
                      errMsg: "",
                    });
                  }
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                    () => ({
                      validator() {
                        if (resetEmailError.enable) {
                          return Promise.reject(resetEmailError?.errMsg);
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    {!loader ? (
                      "Submit"
                    ) : (
                      <div className="forgot-password-loader">
                        <Loader />
                      </div>
                    )}
                  </Button>
                </Form.Item>
              </Form>
            </LoginWrapper>
          </Modal>
        </FormWrapper>
      </LoginWrapper>
    </>
  );
};

export default Login;
