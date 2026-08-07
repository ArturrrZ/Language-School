import { useEffect, useState } from 'react'
import { List, ListItemButton, ListItemText, Box, Typography } from '@mui/material'
import { http } from '../../../api/http'

type Props = {
  teacherId: number | null
  date: string | null // YYYY-MM-DD
  onSelectSlot: (start_at: string, end_at: string) => void
}

export default function AvailabilityList({ teacherId, date, onSelectSlot }: Props){
  const [slots, setSlots] = useState<Array<{ start_at: string; end_at: string }>>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!teacherId || !date) return setSlots([])
    let mounted = true
    setLoading(true)
    http.get(`/teachers/${teacherId}/availability/`, { params: { date } }).then(res => {
      const data = res.data
      const s = Array.isArray(data.slots) ? data.slots : []
      if (!mounted) return
      setSlots(s)
    }).catch(() => {
      if (!mounted) return
      setSlots([])
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [teacherId, date])

  if (!teacherId) return <Typography>Select a teacher to see availability.</Typography>
  if (!date) return <Typography>Select a date to see available slots.</Typography>

  return (
    <Box>
      {loading ? <Typography>Loading slots...</Typography> : (
        slots.length ? (
          <List>
            {slots.map((slot, i) => {
              const start = new Date(slot.start_at)
              const end = new Date(slot.end_at)
              const label = `${start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
              return (
                <ListItemButton key={i} onClick={() => onSelectSlot(slot.start_at, slot.end_at)}>
                  <ListItemText primary={label} secondary={new Date(slot.start_at).toLocaleString()} />
                </ListItemButton>
              )
            })}
          </List>
        ) : <Typography>No available slots for this date.</Typography>
      )}
    </Box>
  )
}
