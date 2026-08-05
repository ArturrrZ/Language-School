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

// keep helper for potential reuse; currently mapping is done inline in `getTeachers`

export async function getTeachers(opts?: { preferKidsDescription?: boolean }): Promise<TeacherType[]> {
  const { data } = await http.get<TeachersApiResponse>('/teachers/')
  const teachers = Array.isArray(data) ? data : data.results ?? []
  return teachers.map((t) => ({
    id: t.id,
    name: t.name,
    experience: formatTeachingExperience(t.teaching_experience),
    photo: t.profile_picture ?? undefined,
    message: opts?.preferKidsDescription && t.kids_description ? t.kids_description : t.description,
  }))
}
