"use client";

import Typography from "@/components/Typography";
import { useListAttendance } from "@/services/swr/useAttendance";
import { AttendanceQueryParams, AttendanceResponse } from "@/types/attendance";
import { EyeOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Popover, Table } from "antd";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  const [params, setParams] = React.useState<AttendanceQueryParams | null>(
    null
  );
  const [form] = Form.useForm();

  const { data, isLoading, mutate, isValidating } = useListAttendance(
    params || null
  );

  const onSearch = (data: AttendanceQueryParams) => {
    setParams(data);
    mutate();
  };

  return (
    <>
      <Typography.Heading level={4} as="h1" className="font-medium">
        Report Attendance
      </Typography.Heading>
      <Typography.Text className="mt-3 mb-5">
        Welcome to the dashboard. Here you can see who is attended in this app!
      </Typography.Text>
      <div className="bg-white rounded-lg p-6">
        <Popover
          placement="bottomRight"
          title={"Filter"}
          content={
            <Form layout="vertical" onFinish={onSearch} form={form}>
              <Form.Item name={"email"} label="Email">
                <Input />
              </Form.Item>
              <Form.Item name={"name"} label="Name">
                <Input />
              </Form.Item>
              <Form.Item name={"created_at"} label="Datetime">
                <DatePicker.RangePicker showTime />
              </Form.Item>
              <div className="flex gap-x-2">
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button
                  type="default"
                  htmlType="button"
                  onClick={() => {
                    form.resetFields();
                    setParams(null);
                    mutate();
                  }}
                >
                  Clear
                </Button>
              </div>
            </Form>
          }
        >
          <Button className="mb-4" type="primary">
            Filter
          </Button>
        </Popover>

        <Table
          loading={isLoading || isValidating}
          columns={[
            {
              key: "number",
              title: "Number",
              dataIndex: "number",
              render: (_, __, index) => index + 1,
            },
            {
              key: "name",
              title: "Name",
              dataIndex: "user_name",
            },
            {
              key: "email",
              title: "Email",
              dataIndex: "user_email",
            },
            {
              key: "datetime",
              title: "Datetime",
              dataIndex: "created_at",
              render: (value) => new Date(value).toLocaleString(),
            },
            {
              key: "action",
              title: "Action",
              render: (_, record: AttendanceResponse) => (
                <Link href={`/${record.attendance_id}`}>
                  <Button size="small" type="link">
                    <EyeOutlined className="text-lg" />
                  </Button>
                </Link>
              ),
            },
          ]}
          dataSource={data?.data}
        />
      </div>
    </>
  );
}
