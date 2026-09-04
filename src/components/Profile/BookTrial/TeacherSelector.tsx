import { useEffect, useState } from 'react'
import { List, ListItemButton, ListItemAvatar, Avatar, ListItemText, CircularProgress, Box } from '@mui/material'
import { getTeachers } from '../../../api/teachers'
import type { TeacherType } from '../../../types'

type Props = {
  onSelect: (t: TeacherType) => void
  selectedId?: number | null
}

export default function TeacherSelector({ onSelect, selectedId }: Props){
  const [teachers, setTeachers] = useState<TeacherType[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    getTeachers().then(data => {
      if (!mounted) return
      setTeachers(data)
    }).catch(() => {}).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if (loading) return <Box sx={{p:2, textAlign:'center'}}><CircularProgress size={24} /></Box>

  return (
    <List>
      {teachers.map(t => (
        <ListItemButton key={t.id} selected={selectedId === t.id} onClick={() => onSelect(t)}>
          <ListItemAvatar>
            {t.photo ? <Avatar src={t.photo} alt={t.name} /> : <Avatar>{t.name?.[0]}</Avatar>}
          </ListItemAvatar>
          <ListItemText primary={t.name} secondary={t.experience} />
        </ListItemButton>
      ))}
    </List>
  )
}
