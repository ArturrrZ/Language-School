import { http } from './http'

export async function createTrialRequest(payload: { teacher: number; start_at: string; end_at: string; student_note?: string }) {
  const { data } = await http.post('/trial-lessons/', payload)
  return data
}

export async function getMyTrialRequests() {
  const { data } = await http.get('/trial-lessons/my/')
  return data
}

export async function cancelTrialRequest(id: number) {
  // Backend cancel endpoint not implemented yet; try PATCH to update status
  const { data } = await http.patch(`/trial-lessons/${id}/`, { status: 'cancelled' })
  return data
}
