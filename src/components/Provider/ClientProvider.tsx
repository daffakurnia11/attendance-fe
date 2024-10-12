"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import Message from "../Message";
import { setMessageContent } from "@/utils/atoms";
import { Provider } from "jotai";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={setMessageContent}>
      <Message />
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
}
