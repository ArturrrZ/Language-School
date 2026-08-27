import { List, ListItemButton, ListItemText, Box, Typography } from '@mui/material'
import './ProfileSidebar.css'

type Props = {
  section: 'book' | 'upcoming' | 'past' | 'account'
  setSection: (s: 'book' | 'upcoming' | 'past' | 'account') => void
}

export default function ProfileSidebar({ section, setSection }: Props){
  return (
    <Box className='profile-sidebar'>
      <Typography variant='h6' sx={{p:2}}>My Profile</Typography>
      <List>
        <ListItemButton selected={section==='book'} onClick={() => setSection('book')}>
          <ListItemText primary='Book Free Trial' />
        </ListItemButton>
        <ListItemButton selected={section==='upcoming'} onClick={() => setSection('upcoming')}>
          <ListItemText primary='Upcoming Lessons' />
        </ListItemButton>
        <ListItemButton selected={section==='past'} onClick={() => setSection('past')}>
          <ListItemText primary='Past Lessons' />
        </ListItemButton>
        <ListItemButton selected={section==='account'} onClick={() => setSection('account')}>
          <ListItemText primary='Account' />
        </ListItemButton>
      </List>
    </Box>
  )
}
