import { http } from './http';
import type { AuthMeResponse, AuthUser, LoginPayload, RegisterPayload } from '../types/auth';

const AUTH_BASE = '/auth';

export async function getMe(): Promise<AuthMeResponse> {
  const { data } = await http.get<AuthMeResponse>(`${AUTH_BASE}/me/`);
  return data;
}

export async function login(payload: LoginPayload): Promise<AuthUser> {
  await getMe();
  await http.post(`${AUTH_BASE}/login/`, payload);
  const me = await getMe();
  if (!me.auth) {
    throw new Error('Login failed.');
  }
  return me;
}

export async function register(payload: RegisterPayload): Promise<AuthUser> {
  await getMe();
  await http.post(`${AUTH_BASE}/register/`, payload);
  const me = await getMe();
  if (!me.auth) {
    throw new Error('Registration failed.');
  }
  return me;
}

export async function logout(): Promise<void> {
  await http.post(`${AUTH_BASE}/logout/`, {});
}
