import useSWR from "swr";
import { profileUrl } from "../urls/user";
import { userApi } from "../apis/user";
import useSWRMutation from "swr/mutation";
import { UpdateProfilePayload } from "@/types/user";

export const useDetailUser = () => {
  const { data, isLoading } = useSWR(profileUrl, () => userApi.getUser());

  return {
    data,
    isLoading,
  };
};

export const useUpdateProfile = () => {
  const { trigger, isMutating } = useSWRMutation(
    profileUrl,
    (_, { arg }: { arg: UpdateProfilePayload }) => userApi.updateProfile(arg)
  );

  return {
    trigger,
    isMutating,
  };
};
