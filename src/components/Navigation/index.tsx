"use client";

import React from "react";
import Typography from "../Typography";
import Link from "next/link";
import { Dropdown, MenuProps } from "antd";
import { deleteCookie } from "cookies-next";
import type { AuthUserResponse } from "@/types/auth";

export default function Navigation({
  userData,
}: {
  userData: AuthUserResponse;
}) {
  const onLogout = () => {
    deleteCookie("user");
    deleteCookie("token");
    window.location.href = "/login";
  };

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <Link href={`/profile`}>
          <Typography.Text size="sm" as="p">
            Update Profile
          </Typography.Text>
        </Link>
      ),
    },
    {
      key: "password",
      label: (
        <Link href={`/password`}>
          <Typography.Text size="sm" as="p">
            Change Password
          </Typography.Text>
        </Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: (
        <button className="w-full flex justify-start" onClick={onLogout}>
          <Typography.Text size="sm" as="p" className="text-red-600">
            Log Out
          </Typography.Text>
        </button>
      ),
    },
  ];

  return (
    <div className="w-full bg-blue-800 h-[60px] flex items-center">
      <div className="container flex justify-between text-white">
        <ul className="flex gap-x-8 list-none">
          <li>
            <Link href="/">
              <Typography.Text size="base" as="p">
                Dashboard
              </Typography.Text>
            </Link>
          </li>
          <li>
            <Link href="/attend">
              <Typography.Text size="base" as="p">
                Attend
              </Typography.Text>
            </Link>
          </li>
        </ul>
        <div>
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Typography.Text size="base" as="p" className="cursor-pointer">
              Welcome, {userData.name}
            </Typography.Text>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
