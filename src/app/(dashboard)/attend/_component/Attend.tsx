"use client";

import Camera from "@/components/Attendance/Camera";
import { useCamera } from "@/components/Attendance/useCamera";
import { useIPAddress } from "@/components/Attendance/useIPAddress";
import { useLocation } from "@/components/Attendance/useLocation";
import Typography from "@/components/Typography";
import { useCreateAttendance } from "@/services/swr/useAttendance";
import { useDetailUser } from "@/services/swr/useUser";
import { AttendancePayload } from "@/types/attendance";
import { messageContent, photoAtom } from "@/utils/atoms";
import { Button, Form, Input } from "antd";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

export default function Attend() {
  const router = useRouter();
  const setMessage = useSetAtom(messageContent);
  const { data } = useDetailUser();
  const { latitude, longitude, locationError } = useLocation();
  const { ip } = useIPAddress();
  const photo = useAtomValue(photoAtom);
  const { cameraError } = useCamera();
  const { trigger, isMutating } = useCreateAttendance();

  const onSubmit = (values: AttendancePayload) => {
    if (photo) {
      trigger(
        {
          latitude: values.latitude.toString(),
          longitude: values.longitude.toString(),
          ip_address: values.ip_address,
          photo,
        },
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onSuccess(resp: any) {
            if (resp) {
              setMessage({
                type: "success",
                title: "Success",
                content: resp.data.message,
              });
              router.push("/");
            }
          },
        }
      );
    } else {
      setMessage({
        type: "warning",
        title: "Attention",
        content: "Please take a picture first.",
      });
      return;
    }
  };

  return (
    <>
      <Typography.Heading level={4} as="h1" className="font-medium">
        Record Attendance
      </Typography.Heading>
      <Typography.Text className="mt-3 mb-5">
        Let&apos;s take a picture of your face and record your attendance.
      </Typography.Text>

      {data && ip && (
        <div className="bg-white rounded-lg p-6">
          <Form
            layout="vertical"
            initialValues={{
              name: data.data?.name,
              email: data.data?.email,
              latitude,
              longitude,
              ip_address: ip,
            }}
            onFinish={onSubmit}
          >
            <div className="grid grid-cols-3 gap-10">
              <div className="col-span-1">
                <Typography.Text className="text-center font-medium mb-4">
                  Take a picture
                </Typography.Text>
                <Camera />
              </div>
              <div className="col-span-2">
                <Form.Item name={"name"} label="Name" className="!mb-2">
                  <Input disabled />
                </Form.Item>
                <Form.Item name={"email"} label="Email" className="!mb-2">
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="Location"
                  validateStatus={locationError ? "error" : "success"}
                  help={locationError || "Based on your location"}
                  className="!mb-7"
                >
                  <div className="flex gap-x-5">
                    <Form.Item name="latitude" noStyle>
                      <Input
                        addonBefore="Lat"
                        disabled
                        status={locationError ? "error" : ""}
                      />
                    </Form.Item>
                    <Form.Item name="longitude" noStyle>
                      <Input
                        addonBefore="Long"
                        disabled
                        status={locationError ? "error" : ""}
                      />
                    </Form.Item>
                  </div>
                </Form.Item>
                <Form.Item
                  name={"ip_address"}
                  label="IP Address"
                  className="!mb-4"
                >
                  <Input disabled />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={isMutating}
                  disabled={Boolean(locationError) || Boolean(cameraError)}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </>
  );
}
