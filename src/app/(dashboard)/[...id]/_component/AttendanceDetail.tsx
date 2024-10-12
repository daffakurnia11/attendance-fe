"use client";

import Typography from "@/components/Typography";
import { useDetailAttendance } from "@/services/swr/useAttendance";
import { Form, Input } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

export default function AttendanceDetail() {
  const { id } = useParams();
  const { data } = useDetailAttendance(id as string);

  return (
    <>
      <Typography.Heading level={4} as="h1" className="font-medium">
        Report Attendance
      </Typography.Heading>
      <Typography.Text className="mt-3 mb-5">
        Welcome to the dashboard. Here you can see who is attended in this app!
      </Typography.Text>

      {data && (
        <div className="bg-white rounded-lg p-6">
          <Form
            layout="vertical"
            initialValues={{
              name: data.data!.user_name,
              email: data.data!.user_email,
              latitude: data.data!.latitude,
              longitude: data.data!.longitude,
              ip_address: data.data!.ip_address,
            }}
          >
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-1">
                <Typography.Text className="text-center font-medium mb-4">
                  Photo Picture
                </Typography.Text>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={data.data!.photo}
                  alt="Captured"
                  className="w-full rounded shadow"
                />
              </div>
              <div className="col-span-2">
                <Form.Item name={"name"} label="Name" className="!mb-2">
                  <Input readOnly />
                </Form.Item>
                <Form.Item name={"email"} label="Email" className="!mb-2">
                  <Input readOnly />
                </Form.Item>
                <Form.Item
                  label="Location"
                  help={"Based on their location"}
                  className="!mb-7"
                >
                  <div className="flex gap-x-5">
                    <Form.Item name="latitude" noStyle>
                      <Input addonBefore="Lat" readOnly />
                    </Form.Item>
                    <Form.Item name="longitude" noStyle>
                      <Input addonBefore="Long" readOnly />
                    </Form.Item>
                  </div>
                </Form.Item>
                <Form.Item
                  name={"ip_address"}
                  label="IP Address"
                  className="!mb-4"
                >
                  <Input readOnly />
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      )}
    </>
  );
}
