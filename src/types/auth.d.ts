export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface AuthResponse {
  token: string;
  user: UserResponse;
}
