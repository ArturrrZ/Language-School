import React from 'react'
import GreetingKids from '../components/KidsPage/Greeting/GreetingKids'
import ConsultationKids from '../components/KidsPage/ConsultationKids/ConsultationKids'
import WhatWeTeachSection from '../components/KidsPage/WhatWeTeachSection/WhatWeTeachSection'

type Props = {}

function KidsPage({}: Props) {
  return (
    <>
      <GreetingKids />
      <ConsultationKids />
      <WhatWeTeachSection />
    </>
  )
}

export default KidsPage