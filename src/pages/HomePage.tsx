import React from 'react'
import Greeting from '../components/HomePage/Greeting/Greeting';
import GroupSection from '../components/HomePage/GroupSection/GroupSection';

type Props = {}

function HomePage({}: Props) {
  return (
    <>
      <Greeting />
      <GroupSection />
    </>
  )
}

export default HomePage