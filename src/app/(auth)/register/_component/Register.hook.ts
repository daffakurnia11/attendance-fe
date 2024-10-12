import { authApi } from "@/services/apis/auth";
import type { RegisterPayload } from "@/types/auth";
import React from "react";

export const useRegister = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values: RegisterPayload) => {
    setLoading(true);
    authApi.register(values).then((response) => {
      console.log(response);
      setLoading(false);
    });
  };

  return { onSubmit, loading };
};
