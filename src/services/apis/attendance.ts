import { ApiService } from "./api-service";
import * as url from "../urls/attendance";
import { AttendancePayload, AttendanceQueryParams, AttendanceResponse } from "@/types/attendance";
import { BaseResponse, ResponseWithData } from "@/types/response";

class AttendanceApi extends ApiService {
  public async list(params?: AttendanceQueryParams | null) {
    const response = await this.get<ResponseWithData<AttendanceResponse[]>>(
      url.attendanceListUrl,
      params
    );

    return response;
  }

  public async detail(id: string) {
    const response = await this.get<ResponseWithData<AttendanceResponse>>(
      `${url.attendanceListUrl}/${id}`
    );

    return response;
  }

  public async create(payload: AttendancePayload) {
    const response = await this.post<BaseResponse>(
      url.attendanceListUrl,
      payload
    );

    return response;
  }
}

export const attendanceApi = new AttendanceApi();
