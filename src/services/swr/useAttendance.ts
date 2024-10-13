import useSWRMutation from "swr/mutation";
import * as url from "../urls/attendance";
import { attendanceApi } from "../apis/attendance";
import { AttendancePayload, AttendanceQueryParams } from "@/types/attendance";
import useSWR from "swr";

export const useListAttendance = (params?: AttendanceQueryParams | null) => {
  const { data, isLoading, mutate, isValidating } = useSWR(
    [url.attendanceListUrl, params],
    () => attendanceApi.list(params)
  );

  return {
    data,
    isLoading,
    mutate,
    isValidating,
  };
};

export const useDetailAttendance = (id: string) => {
  const { data, isLoading } = useSWR(url.attendanceDetailUrl(id), () =>
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
