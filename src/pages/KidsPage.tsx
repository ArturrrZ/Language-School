import React from 'react'
import GreetingKids from '../components/KidsPage/Greeting/GreetingKids'
import ConsultationKids from '../components/KidsPage/ConsultationKids/ConsultationKids'

type Props = {}

function KidsPage({}: Props) {
  return (
    <>
      <GreetingKids />
      <ConsultationKids />
    </>
  )
}

export default KidsPage