import useSWRMutation from "swr/mutation";
import * as url from "../urls/attendance";
import { attendanceApi } from "../apis/attendance";
import { AttendancePayload } from "@/types/attendance";
import useSWR from "swr";

export const useListAttendance = () => {
  const { data, isLoading } = useSWR(url.attendanceListUrl, () =>
    attendanceApi.list()
  );

  return {
    data,
    isLoading,
  };
};

export const useDetailAttendance = (id: string) => {
  const { data, isLoading } = useSWR(url.attendanceDetailUrl, () =>
    attendanceApi.detail(id)
  );

  return {
    data,
    isLoading,
  };
};

export const useCreateAttendance = () => {
  const { trigger, isMutating } = useSWRMutation(
    url.attendanceListUrl,
    (_, { arg }: { arg: AttendancePayload }) => attendanceApi.create(arg)
  );

  return {
    trigger,
    isMutating,
  };
};
