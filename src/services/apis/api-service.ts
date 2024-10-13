/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { messageContent, setMessageContent } from "@/utils/atoms";
import * as url from "../urls/base";
import { deleteCookie, getCookie } from "cookies-next";
import { loginUrl } from "../urls/auth";

export class ApiService {
  /**
   * Create Axios Instance.
   */
  private axiosInstance: AxiosInstance;

  /**
   * API Service constructor.
   * Contains of declaration of API Base URL, Request Interceptor, and Response Interceptor.
   */
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: url.APIURL,
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /**
   * Request Interceptor
   * For intercepting the request call to the API.
   * Adding the Authorization headers for using a access token from Backend
   */
  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = getCookie("token");

        if (!token) return config;

        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  /**
   * Response Interceptor
   * For intercepting the response call to the API.
   * When the access token is invalid, the API is automatically call the refresh token API
   */
  private initializeResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(null, async (err) => {
      if (err.status === 401 && (err.config.url !== loginUrl)) {
        deleteCookie("user");
        deleteCookie("token");
        window.location.href = "/login";
      }

      return Promise.reject(err);
    });
  }

  /**
   * Notification Handling
   * To store the message content to Jotai Atom state management.
   * @param type Toast Message type
   * @param message Message from API Response
   * @returns Message Response string
   */
  private notifHandling(type: "success" | "error", content: string) {
    setMessageContent.set(messageContent, {
      type: type,
      title: "Error",
      content: content ?? "Something went wrong",
    });
    return content;
  }

  /**
   * Request function
   * Used for generalizing the request method from Axios.
   * @param config Axios Request Config
   * @returns Axios Instance function
   */
  protected async request(config: AxiosRequestConfig) {
    try {
      const response = await this.axiosInstance(config);

      return response;
    } catch (error: any) {
      let errorMessage = "Something went wrong";
      if (error.response) {
        errorMessage = error.response.data.message;
      }
      this.notifHandling("error", errorMessage);

      return error.response;
    }
  }

  public async get<T>(url: string, params?: any, headers?: any): Promise<T> {
    const response = await this.request({
      method: "GET",
      url: url,
      headers,
      params,
    });
    return response.data;
  }

  public async post<T>(url: string, payload?: any, headers?: any): Promise<T> {
    return await this.request({
      method: "POST",
      url: url,
      data: payload,
      headers,
    });
  }

  public async put<T>(url: string, payload?: any, headers?: any): Promise<T> {
    return await this.request({
      method: "PUT",
      url: url,
      data: payload,
      headers,
    });
  }

  public async patch<T>(url: string, payload?: any, headers?: any): Promise<T> {
    return await this.request({
      method: "PATCH",
      url: url,
      data: payload,
      headers,
    });
  }

  public async delete(url: string, payload?: any, headers?: any) {
    return await this.request({
      method: "DELETE",
      url: url,
      data: payload,
      headers,
    });
  }
}
