import { useEffect, useState } from 'react'
import './Teachers.css'
import type { TeacherType } from '../../types'
import { Avatar } from '@mui/material';


type Props = {
    teachers: TeacherType[]; 
    header?: string;
  loading?: boolean;
}

function Teachers({teachers, header, loading = false}: Props) {
    const [selectedTeacher, setSelectedTeacher] = useState<TeacherType | null>(teachers[0] || null);

    useEffect(() => {
      setSelectedTeacher((prev) => {
        if (!teachers.length) return null
        if (prev && teachers.some((teacher) => teacher.id === prev.id)) return prev
        return teachers[0]
      })
    }, [teachers])

    if (loading) {
      return (
        <section className="teachers-section main">
          <h2 className="sH text-center teachers-header">{header || 'Meet Our Teachers'}</h2>
          <p className='selected-teacher-message'>Loading teachers...</p>
        </section>
      )
    }

    if (!teachers.length) {
      return (
        <section className="teachers-section main">
          <h2 className="sH text-center teachers-header">{header || 'Meet Our Teachers'}</h2>
          <p className='selected-teacher-message'>No teachers available right now.</p>
        </section>
      )
    }

  return (
    <section className="teachers-section main">
        <h2 className="sH text-center teachers-header">{header || "Meet Our Teachers"}</h2>
        <div className="teachers">
      {teachers.map(teacher => (
        <div key={teacher.id} className={`teacher-card ${selectedTeacher?.id === teacher.id ? 'teacher-selected' : ''}`} onClick={() => setSelectedTeacher(teacher)}>
          <Avatar sx={{ width: 36, height: 36 }} alt={teacher.name} src={teacher.photo}>{teacher.name[0]}</Avatar>
          <div className="teacher-name-experience">
          <h3 className="teacher-name">{teacher.name}</h3>
          <p className="teacher-experience">{teacher.experience}</p>
          </div>
        </div>

      ))}
        </div>

    <div className="selected-teacher">
        {selectedTeacher?.photo ? (
          <img src={selectedTeacher.photo} alt={selectedTeacher.name} className="selected-teacher-photo" />
        ) : (
          <Avatar sx={{ width: 120, height: 120, borderRadius: '15px' }} alt={selectedTeacher?.name} src={selectedTeacher?.photo}>
            {selectedTeacher?.name?.[0]}
          </Avatar>
        )}
        <p className='selected-teacher-message'>{selectedTeacher?.message}</p>
    </div>

    </section>
  )
}

export default Teachers