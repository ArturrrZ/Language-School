import type { TeacherType } from '../types'
import { http } from './http'

type BackendTeacher = {
  id: number
  name: string
  teaching_experience: number
  description: string
  kids_description?: string
  profile_picture?: string | null
}

type TeachersApiResponse = BackendTeacher[] | { results?: BackendTeacher[] }

function formatTeachingExperience(years: number) {
  return `${years} year${years === 1 ? '' : 's'} of teaching experience`
}

function normalizeTeacher(teacher: BackendTeacher): TeacherType {
  return {
    id: teacher.id,
    name: teacher.name,
    experience: formatTeachingExperience(teacher.teaching_experience),
    photo: teacher.profile_picture ?? undefined,
    message: teacher.description,
  }
}

export async function getTeachers() {
  const { data } = await http.get<TeachersApiResponse>('/teachers/')
  const teachers = Array.isArray(data) ? data : data.results ?? []
  return teachers.map(normalizeTeacher)
}
