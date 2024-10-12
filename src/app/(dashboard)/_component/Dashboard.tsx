"use client";

import Typography from "@/components/Typography";
import { useListAttendance } from "@/services/swr/useAttendance";
import { AttendanceResponse } from "@/types/attendance";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  const { data, isLoading } = useListAttendance();

  return (
    <>
      <Typography.Heading level={4} as="h1" className="font-medium">
        Report Attendance
      </Typography.Heading>
      <Typography.Text className="mt-3 mb-5">
        Welcome to the dashboard. Here you can see who is attended in this app!
      </Typography.Text>
      <Table
        loading={isLoading}
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
                <Button
                  size="small"
                  type="link"
                  onClick={() => console.log(record)}
                >
                  <EyeOutlined className="text-lg" />
                </Button>
              </Link>
            ),
          },
        ]}
        dataSource={data?.data}
      />
    </>
  );
}
