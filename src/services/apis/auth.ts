import { ApiService } from "./api-service";
import * as url from "../urls/auth";
import { AuthResponse, LoginPayload, RegisterPayload, UserResponse } from "@/types/auth";
import { ResponseWithData } from "@/types/response";

class AuthApi extends ApiService {
  public async register(payload: RegisterPayload) {
    const response = await this.post<ResponseWithData<UserResponse>>(url.registerUrl, payload);

    return response;
  }

  public async login(payload: LoginPayload) {
    const response = await this.post<ResponseWithData<AuthResponse>>(url.loginUrl, payload);

    return response;
  }
}

export const authApi = new AuthApi();
