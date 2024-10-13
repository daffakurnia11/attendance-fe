export interface AttendancePayload {
  latitude: string;
  longitude: string;
  ip_address: string;
  photo: string;
}

export interface AttendanceQueryParams {
  name: string;
  email: string;
  created_at: string[];
}

export interface AttendanceResponse {
  attendance_id: string;
  latitude: string;
  longitude: string;
  ip_address: string;
  photo: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  user_id: string;
  user_name: string;
  user_email: string;
}
