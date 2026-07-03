import { http } from './http';

export type FreeConsultationPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

export async function createFreeConsultation(payload: FreeConsultationPayload) {
  const { data } = await http.post('/free-consultations/', payload);
  return data;
}
