import type { LoginPayload } from "@/types/auth";
import React from "react";

export const useLogin = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values: LoginPayload) => {
    setLoading(false);
    console.log(values)
  };

  return { onSubmit, loading };
};
