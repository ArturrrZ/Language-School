import {useState} from 'react'
import './Teachers.css'
import type { TeacherType } from '../../types'
import { Avatar } from '@mui/material';


type Props = {
    teachers: TeacherType[]; 
    header?: string;
}

function Teachers({teachers, header}: Props) {
    const [selectedTeacher, setSelectedTeacher] = useState<TeacherType | null>(teachers[0] || null);
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
        <img src={selectedTeacher?.photo} alt={selectedTeacher?.name} className="selected-teacher-photo" />
        <p className='selected-teacher-message'>{selectedTeacher?.message}</p>
    </div>

    </section>
  )
}

export default Teachers