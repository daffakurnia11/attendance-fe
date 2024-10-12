import { ApiService } from "./api-service";
import * as url from "../urls/auth";
import { LoginPayload, RegisterPayload } from "@/types/auth";

class AuthApi extends ApiService {
  public async register(payload: RegisterPayload) {
    const response = await this.post(url.registerUrl, payload);

    return response;
  }

  public async login(payload: LoginPayload) {
    const response = await this.post(url.loginUrl, payload);

    return response;
  }
}

export const authApi = new AuthApi();
