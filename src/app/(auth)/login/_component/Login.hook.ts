"use client";

import { authApi } from "@/services/apis/auth";
import type { LoginPayload } from "@/types/auth";
import { setCookie } from "cookies-next";
import React from "react";

export const useLogin = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values: LoginPayload) => {
    setLoading(true);
    authApi.login(values).then((response) => {
      if (response.status === 200) {
        setCookie("token", response.data.data.token);
        setCookie("user", response.data.data.user);
        window.location.href = "/";
      }
      setLoading(false);
    });
  };

  return { onSubmit, loading };
};
