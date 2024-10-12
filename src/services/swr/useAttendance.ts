import useSWRMutation from "swr/mutation";
import * as url from "../urls/attendance";
import { attendanceApi } from "../apis/attendance";
import { AttendancePayload } from "@/types/attendance";

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
