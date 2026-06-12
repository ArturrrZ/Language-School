export type AuthUser = {
  auth: true;
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_student: boolean;
  is_teacher: boolean;
  is_parent: boolean;
  is_staff: boolean;
  teacher_id: number | null;
  profile_picture: string | null;
};

export type Unauthenticated = {
  auth: false;
};

export type AuthMeResponse = AuthUser | Unauthenticated;

export type LoginPayload = {
  username: string;
  password: string;
};

export type RegisterPayload = {
  username: string;
  email: string;
  password: string;
};
