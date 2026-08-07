import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material'
import type { FC } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  teacherName: string
  startAt: string
  endAt: string
}

const ConfirmBookingDialog: FC<Props> = ({ open, onClose, onConfirm, teacherName, startAt, endAt }) => {
  const start = new Date(startAt)
  const end = new Date(endAt)
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Trial Booking</DialogTitle>
      <DialogContent>
        <Typography>{teacherName}</Typography>
        <Typography>{start.toLocaleString()} — {end.toLocaleString()}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant='contained' onClick={onConfirm}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmBookingDialog
