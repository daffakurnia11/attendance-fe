"use client";

import Typography from "@/components/Typography";
import { useDetailUser, useUpdateProfile } from "@/services/swr/useUser";
import { UpdateProfilePayload } from "@/types/user";
import { messageContent } from "@/utils/atoms";
import { Button, Form, Input, Skeleton } from "antd";
import { setCookie } from "cookies-next";
import { useSetAtom } from "jotai";
import React from "react";

export default function Profile() {
  const { data, isLoading } = useDetailUser();
  const { trigger, isMutating } = useUpdateProfile();
  const setMessage = useSetAtom(messageContent);

  const onUpdate = (values: UpdateProfilePayload) => {
    trigger(values, {
      onSuccess: (response) => {
        setCookie("user", JSON.stringify(response.data.data));
        setMessage({
          type: "success",
          title: "Success",
          content: response.data.message,
        });
      },
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
        {data ? (
          <Form
            layout="vertical"
            initialValues={{ email: data?.data.email, name: data?.data.name }}
            onFinish={onUpdate}
          >
            <Form.Item
              name={"email"}
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                disabled={isLoading || isMutating}
                placeholder="Enter your email"
              />
            </Form.Item>
            <Form.Item
              name={"name"}
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                disabled={isLoading || isMutating}
                placeholder="Enter your name"
              />
            </Form.Item>
            <Button
              loading={isLoading || isMutating}
              htmlType="submit"
              type="primary"
            >
              Update Profile
            </Button>
          </Form>
        ) : (
          <>
            <div className="flex flex-col gap-y-3 mb-6">
              <Skeleton.Input size="small" />
              <Skeleton.Input block />
            </div>
            <div className="flex flex-col gap-y-3 mb-6">
              <Skeleton.Input size="small" />
              <Skeleton.Input block />
            </div>
            <Skeleton.Input />
          </>
        )}
      </div>
    </>
  );
}
