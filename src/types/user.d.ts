export interface UpdateProfilePayload {
  name: string;
  email: string;
}

export interface ChangePassPayload {
  old_password: string;
  new_password: string;
  confirm_password: string;
}