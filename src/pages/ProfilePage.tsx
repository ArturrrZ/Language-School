import { useState } from 'react'
import ProfileSidebar from '../components/ProfileSidebar/ProfileSidebar'
import { Box, Typography } from '@mui/material'
import './ProfilePage.css'
import BookTrial from '../components/Profile/BookTrial/BookTrial'

type Section = 'book' | 'upcoming' | 'past' | 'account'

// BookTrial UI implemented in components/Profile/BookTrial

function UpcomingPlaceholder(){
  return <div className='profile-section'>
    <Typography variant='h5'>Upcoming Lessons</Typography>
    <p>List of upcoming trial lessons will appear here.</p>
  </div>
}

function PastPlaceholder(){
  return <div className='profile-section'>
    <Typography variant='h5'>Past Lessons</Typography>
    <p>Completed lessons and history.</p>
  </div>
}

function AccountPlaceholder(){
  return <div className='profile-section'>
    <Typography variant='h5'>Account</Typography>
    <p>Profile and account settings.</p>
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
