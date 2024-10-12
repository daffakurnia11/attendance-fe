"use client";

import Typography from "@/components/Typography";
import { userApi } from "@/services/apis/user";
import { ChangePassPayload } from "@/types/user";
import { messageContent } from "@/utils/atoms";
import { Button, Form, Input } from "antd";
import { useSetAtom } from "jotai";
import React from "react";

export default function ChangePass() {
  const [loading, setLoading] = React.useState(false);
  const setMessage = useSetAtom(messageContent);

  const onUpdate = (values: ChangePassPayload) => {
    setLoading(true);
    userApi.changePassword(values).then((response) => {
      if (response.status === 200) {
        setMessage({
          type: "success",
          title: "Success",
          content: response.data.message,
        });
      }
      setLoading(false);
    });
  };

  return (
    <>
      <Typography.Heading level={4} as="h1" className="font-medium">
        Update Profile
      </Typography.Heading>
      <Typography.Text className="mt-3 mb-5">
        Fill the email and name for updating your profile in this app!
      </Typography.Text>
      <div className="w-[600px] bg-white rounded-lg p-6">
        <Form layout="vertical" onFinish={onUpdate}>
          <Form.Item
            name={"old_password"}
            label="Old Password"
            rules={[
              { required: true, message: "Please enter your old password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input
              type="password"
              disabled={loading}
              placeholder="Enter your old password"
            />
          </Form.Item>
          <Form.Item
            name={"new_password"}
            label="New Password"
            rules={[
              { required: true, message: "Please enter your new password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input
              type="password"
              disabled={loading}
              placeholder="Enter your new password"
            />
          </Form.Item>
          <Form.Item
            name={"confirm_password"}
            label="Confirm Password"
            rules={[
              { required: true, message: "Please repeat your new password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              type="password"
              disabled={loading}
              placeholder="Repeat your new password"
            />
          </Form.Item>
          <Button loading={loading} htmlType="submit" type="primary">
            Change Password
          </Button>
        </Form>
      </div>
    </>
  );
}
