import { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, Typography, Box, Button, CircularProgress, Alert, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { getMyTrialRequests, cancelTrialRequest } from '../../../api/trialLessons'

dayjs.extend(relativeTime)

type Props = {
  mode: 'upcoming' | 'past'
}

export default function MyLessons({ mode }: Props){
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [cancellingId, setCancellingId] = useState<number | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setErrorMessage(null)
    setSuccessMessage(null)
    getMyTrialRequests().then((data: any[]) => {
      if (!mounted) return
      const now = new Date()
      const upcoming = data.filter(d => new Date(d.start_at) >= now)
      const past = data.filter(d => new Date(d.start_at) < now)
      setItems(mode === 'upcoming' ? upcoming : past)
    }).catch(() => {
      if (!mounted) return
      setItems([])
      setErrorMessage('Failed to load your lessons. Please try again.')
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [mode])

  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmId, setConfirmId] = useState<number | null>(null)

  function handleCancel(id: number){
    setConfirmId(id)
    setConfirmOpen(true)
  }

  async function confirmCancel(){
    if (confirmId == null) return
    // close dialog immediately for better UX, keep confirmId to perform cancel
    setConfirmOpen(false)
    setCancellingId(confirmId)
    setErrorMessage(null)
    try{
      await cancelTrialRequest(confirmId)
      setItems(prev => prev.filter(i => i.id !== confirmId))
      setSuccessMessage('Trial request cancelled')
      setConfirmId(null)
    }catch(e){
      setErrorMessage('Failed to cancel request. Please try again.')
      // keep confirmId so user can retry if needed
    }finally{
      setCancellingId(null)
    }
  }


  if (loading) return <Box sx={{p:2, textAlign:'center'}}><CircularProgress /></Box>

  if (!items.length) return <Typography>No {mode} lessons.</Typography>

  return (
    <Box className='profile-section'>
      <Typography variant='h5' gutterBottom>{mode === 'upcoming' ? 'Upcoming Lessons' : 'Past Lessons'}</Typography>
      {errorMessage && <Alert severity='error' sx={{mb:2}}>{errorMessage}</Alert>}
      {successMessage && <Alert severity='success' sx={{mb:2}}>{successMessage}</Alert>}
      <List>
        {items.map(item => {
          const start = item.start_at ? new Date(item.start_at) : null
          const label = start ? start.toISOString() : 'Time TBD'
          const teacher = item.teacher?.user?.username ?? item.teacher?.name ?? item.teacher ?? 'Teacher'
          const notes: Array<{ label: string; text: string | null }> = []
          const studentNote = item.student_note ?? item.studentNote ?? item.note ?? null
          if (studentNote) notes.push({ label: 'Student note', text: String(studentNote) })
          const teacherNote = item.teacher_note ?? item.teacherNote ?? item.teacher_note_text ?? null
          if (teacherNote) notes.push({ label: 'Teacher note', text: String(teacherNote) })
          const anyNotes = item.notes ?? null
          if (anyNotes && typeof anyNotes === 'string') notes.push({ label: 'Notes', text: anyNotes })
          if (anyNotes && Array.isArray(anyNotes)) notes.push({ label: 'Notes', text: anyNotes.join('\n') })
          const adminNote = item.admin_note ?? item.adminNote ?? item.admin_note_text ?? null
          if (adminNote) notes.push({ label: 'Admin note', text: String(adminNote) })
          const teacherMessage = item.teacher?.message ?? item.teacher?.description ?? item.teacher?.bio ?? null
          if (teacherMessage) notes.push({ label: 'Teacher info', text: String(teacherMessage) })

          const formatted = start ? `${dayjs(start).format('LLL')} (${dayjs(start).fromNow()})` : label

          return (
            <ListItem key={item.id} divider alignItems='flex-start'>
              <ListItemText
                primary={item.teacher_name}
                secondary={<>
                  <span>{`${formatted} — status: ${item.status ?? 'unknown'}`}</span>
                  {notes.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                      {notes.map((n, idx) => (
                        <Typography key={idx} variant='body2' color='textSecondary' sx={{whiteSpace: 'pre-wrap'}}>
                          <strong>{n.label}:</strong> {n.text}
                        </Typography>
                      ))}
                    </div>
                  )}
                </>}
              />
              <ListItemSecondaryAction>
                {mode === 'upcoming' && (
                  (item.status !== 'cancelled' && item.status !== 'rejected') && (
                    <Button size='small' color='error' onClick={() => handleCancel(item.id)} disabled={cancellingId === item.id}>
                      {cancellingId === item.id ? 'Cancelling...' : 'Cancel'}
                    </Button>
                  )
                )}
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Cancel trial request?</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to cancel this trial request? This action cannot be undone.</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>Back</Button>
            <Button color='error' onClick={confirmCancel} disabled={cancellingId != null}>{cancellingId != null ? 'Cancelling...' : 'Confirm'}</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}
