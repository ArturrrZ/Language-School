import { useState } from 'react'
import ProfileSidebar from '../components/ProfileSidebar/ProfileSidebar'
import { Box, Button, Typography } from '@mui/material'
import './ProfilePage.css'
import BookTrial from '../components/Profile/BookTrial/BookTrial'
import MyLessons from '../components/Profile/MyLessons/MyLessons'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

type Section = 'book' | 'upcoming' | 'past' | 'account'

// BookTrial UI implemented in components/Profile/BookTrial

function UpcomingPlaceholder(){
  return <MyLessons mode='upcoming' />
}

function PastPlaceholder(){
  return <MyLessons mode='past' />
}

function AccountPlaceholder(){
  const { user } = useAuth()
  const navigate = useNavigate()

  return <div className='profile-section'>
    <Typography variant='h5'>Account</Typography>
    <Box sx={{ mt: 2, display: 'grid', gap: 1 }}>
      <Typography><strong>Username:</strong> {user?.username ?? '—'}</Typography>
      <Typography><strong>Email:</strong> {user?.email ?? '—'}</Typography>
      <Typography><strong>First name:</strong> {user?.first_name || '—'}</Typography>
      <Typography><strong>Last name:</strong> {user?.last_name || '—'}</Typography>
      <Typography><strong>Phone:</strong> {user?.phone || '—'}</Typography>
      <Typography><strong>Role:</strong> {user?.is_teacher ? 'Teacher' : user?.is_student ? 'Student' : 'User'}</Typography>
    </Box>

    <Typography sx={{ mt: 3 }} color='text.secondary'>
      If you want to change account information, please contact support.
    </Typography>
    <Typography>
      Support email: <a href='mailto:support@azlanguageschool.com'>support@azlanguageschool.com</a>
    </Typography>
    <Button sx={{ mt: 2 }} variant='contained' onClick={() => navigate('/forgot-password')}>
      Change password
    </Button>
  </div>
}

function ProfilePage(){
  const [section, setSection] = useState<Section>('book')

  return (
    <div className='profile-page main'>
      <ProfileSidebar section={section} setSection={setSection} />
      <Box className='profile-content'>
        {section === 'book' && <BookTrial />}
        {section === 'upcoming' && <UpcomingPlaceholder />}
        {section === 'past' && <PastPlaceholder />}
        {section === 'account' && <AccountPlaceholder />}
      </Box>
    </div>
  )
}

export default ProfilePage
