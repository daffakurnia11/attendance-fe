import React from "react";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const useRegister = () => {
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (values: RegisterPayload) => {
    setLoading(true);
    console.log(values);
  };

  return { onSubmit, loading };
};
