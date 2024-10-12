import { authApi } from "@/services/apis/auth";
import type { RegisterPayload } from "@/types/auth";
import { messageContent } from "@/utils/atoms";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

export const useRegister = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const setMessage = useSetAtom(messageContent)

  const onSubmit = (values: RegisterPayload) => {
    setLoading(true);
    authApi.register(values).then((response) => {
      if (response.status === 201) {
        setMessage({
          type: "success",
          title: "Register Success",
          content: response.data.message,
        })
        router.push("/login");
      }
      setLoading(false);
    });
  };

  return { onSubmit, loading };
};
