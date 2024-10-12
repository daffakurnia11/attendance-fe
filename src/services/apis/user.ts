import { ApiService } from "./api-service";
import * as url from "../urls/user";
import type { UserResponse } from "@/types/auth";
import type { BaseResponse, ResponseWithData } from "@/types/response";
import type { ChangePassPayload, UpdateProfilePayload } from "@/types/user";

class UserApi extends ApiService {
  public async getUser() {
    const response = await this.get<ResponseWithData<UserResponse>>(url.profileUrl);

    return response;
  }

  public async updateProfile(payload: UpdateProfilePayload) {
    const response = await this.patch<ResponseWithData<UserResponse>>(url.profileUrl, payload);

    return response;
  }

  public async changePassword(payload: ChangePassPayload) {
    const response = await this.patch<BaseResponse>(url.changePassUrl, payload);

    return response;
  }
}

export const userApi = new UserApi();
