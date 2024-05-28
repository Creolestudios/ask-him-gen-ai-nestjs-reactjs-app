import React, { useEffect, useState } from "react";
import { FormWrapper } from "../../globalStyles";
import { Button, Checkbox, Form, Input } from "antd";
import { ContactFormWrapper } from "./ConatctForm.styles";
import axios from "axios";
import { base_url } from "../../constant";

const { TextArea } = Input;

const ConatctForm = () => {
  const [form] = Form.useForm();

  const [successMail, setSuccessMail] = useState(false);

  const [contactValue, setContactValue] = useState({
    email :'',
    name: '',
    message: ''
  })

  const onFinish = async(values) => {

    setContactValue(values);

    if (values) {
      await axios.post(`${base_url}/email`, values)
        .then(() => {
          setTimeout(() => {
            setSuccessMail(true);
            setTimeout(() => {
            setSuccessMail(false);
            },3000)
          }, 200);
          form.resetFields();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // Validation rules for the form fields
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  return (
    <ContactFormWrapper>
      {successMail && <div className="success-mail">{contactValue?.name} sent E-mail successfull !</div>}
      <FormWrapper>
        <Form
          onFinish={onFinish}
          autoComplete="off"
          form={form}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
            ]}
          >
            <Input value={contactValue?.name} placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input type="email" value={contactValue?.email} placeholder="enter your email address" />
          </Form.Item>

          <Form.Item label="Message" name="message" rules={[
              {
                required: true,
                message: "Please enter a message",
              },
            ]}>
            <TextArea rows={4} placeholder="Type here..." value={contactValue?.message} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </ContactFormWrapper>
  );
};

export default ConatctForm;
