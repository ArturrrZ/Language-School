import { useState, useEffect } from 'react'
import { Box, Typography, Divider, Alert, Snackbar } from '@mui/material'
import TeacherSelector from './TeacherSelector'
import AvailabilityList from './AvailabilityList'
import ConfirmBookingDialog from './ConfirmBookingDialog'
import { createTrialRequest } from '../../../api/trialLessons'
import type { TeacherType } from '../../../types'
// Note: using `any` for calendar values to avoid adding dayjs typings here
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { getMyTrialRequests } from '../../../api/trialLessons'
import { getErrorMessage } from '../../../utils/errorMessage'

export default function BookTrial(){
  const [selected, setSelected] = useState<TeacherType | null>(null)
  const [date, setDate] = useState<string | null>(null) // YYYY-MM-DD
  const [slot, setSlot] = useState<{ start_at: string; end_at: string } | null>(null)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [toast, setToast] = useState<{ open: boolean; severity: 'success' | 'error'; message: string }>({
    open: false,
    severity: 'success',
    message: '',
  })
  const [calendarValue, setCalendarValue] = useState<any | null>(null)
  const [busy, setBusy] = useState(false)
  const [hasPending, setHasPending] = useState(false)
  const [pendingMessage, setPendingMessage] = useState<string>('')

  async function handleConfirm(){
    if (!selected || !slot || busy) return
    setBusy(true)
    try{
      await createTrialRequest({ teacher: selected.id, start_at: slot.start_at, end_at: slot.end_at })
      setToast({ open: true, severity: 'success', message: 'Booking created successfully' })
      setSlot(null)
      setConfirmOpen(false)
      // reflect new pending request immediately in the UI
      setHasPending(true)
      setPendingMessage('You already have a pending trial request. You cannot book another until it is resolved.')
    }catch(error){
      setToast({
        open: true,
        severity: 'error',
        message: getErrorMessage(error, 'Failed to create booking. Try again.'),
      })
    }finally{ setBusy(false) }
  }

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try{
        const data = await getMyTrialRequests()
        console.log('my trial requests', data)
        // Expect data to be array of trial requests with `status` field
        const occupied = Array.isArray(data) && data.some((r: any) => ['pending','teacher_confirmed','admin_approved'].includes(r.status))
        if (!mounted) return
        if (occupied) {
          setHasPending(true)
          setPendingMessage('You already have a pending trial request. You cannot book another until it is resolved.')
        }
      }catch(_e){
        // ignore — allow booking
      }
    })()
    return () => { mounted = false }
  }, [])

  return (
    <div className='profile-section'>
      <Typography variant='h5' gutterBottom>Book Free Trial</Typography>
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setToast((prev) => ({ ...prev, open: false }))} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>

      {hasPending && pendingMessage ? <Alert severity='info' sx={{mb:2}}>{pendingMessage}</Alert> : null}

      <Box sx={{display:'flex', gap:2, flexDirection:{xs:'column', md:'row'}}}>
        <Box sx={{minWidth:260}}>
          <Typography variant='subtitle1'>Choose a teacher</Typography>
          <TeacherSelector onSelect={(t) => setSelected(t)} selectedId={selected?.id ?? null} />
        </Box>

        <Divider orientation='vertical' flexItem sx={{display:{xs:'none', md:'block'}}} />

        <Box sx={{flex:1}}>
          <Typography variant='subtitle1'>Pick a date</Typography>
          {hasPending ? null : (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={calendarValue} onChange={(newValue: any | null) => {
                setCalendarValue(newValue)
                setDate(newValue ? (newValue as any).format('YYYY-MM-DD') : null)
              }} />
            </LocalizationProvider>
          )}

          {!hasPending && (
            <Box sx={{mt:2}}>
              <AvailabilityList teacherId={selected?.id ?? null} date={date} onSelectSlot={(s,e) => { setSlot({start_at:s,end_at:e}); setConfirmOpen(true)}} />
            </Box>
          )}
        </Box>
      </Box>

      <ConfirmBookingDialog open={confirmOpen} onClose={() => setConfirmOpen(false)} onConfirm={handleConfirm}
        teacherName={selected?.name ?? ''} startAt={slot?.start_at ?? ''} endAt={slot?.end_at ?? ''} submitting={busy} />
    </div>
  )
}
