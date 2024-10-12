"use client";

import { messageContent } from "@/utils/atoms";
import { notification } from "antd";
import { useAtom } from "jotai";
import React from "react";

export default function Message() {
  const [message, setMessage] = useAtom(messageContent);
  const initialRenderRef = React.useRef(true);
  const [api, contextHolder] = notification.useNotification();

  React.useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }

    if (message.content) {
      api[message.type]({
        message: message.title,
        description: message.content,
      });
      setMessage({
        type: "success",
        title: null,
        content: null,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return contextHolder;
}
