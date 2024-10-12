export interface BaseResponse {
  success: boolean;
  status: number
  message: string;
}

export interface ResponseWithData<T> extends BaseResponse {
  data?: T;
}