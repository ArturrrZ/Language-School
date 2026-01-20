import React from 'react'
import './GreetingConsultation.css'
import consultationImg from '../../../assets/799.jpg'
import { Box } from '@mui/material'

type Props = {}

function GreetingConsultation({}: Props) {
  return (
    <Box className='greeting-consultation' sx={{backgroundImage: `url(${consultationImg})`}}>
      <Box className='greeting-consultation__content'>
        <h2>Free Consultation with a Methodologist</h2>
        <p>Get maximum benefit in 40 minutes — no pressure, only support, motivation and recommendations</p>
    
      </Box>
    </Box>
  )
}

export default GreetingConsultation