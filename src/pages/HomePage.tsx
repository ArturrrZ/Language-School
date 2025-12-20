import React,{useState} from 'react'
import Greeting from '../components/HomePage/Greeting/Greeting';
import GroupSection from '../components/HomePage/GroupSection/GroupSection';
import ChooseGoalSection from '../components/HomePage/ChooseGoalSection/ChooseGoalSection';
import type {ApplyType} from '../types.ts'
import ApplyFixed from '../components/HomePage/ApplyFixed/ApplyFixed.tsx';
import SpecialOfferSection from '../components/HomePage/SpecialOfferSection/SpecialOfferSection.tsx';
import PricingSection from '../components/HomePage/PricingSection/PricingSection.tsx';
import MyPricingSection from '../components/HomePage/MyPricingSection/MyPricingSection.tsx';

type Props = {}

function HomePage({}: Props) {
  const [apply, setApply] = useState<ApplyType>({
    display:false,
    title:'Test title',
    text: 'test text text text'
  })
  
  return (
    <>
      <Greeting />
      <GroupSection />
      <ChooseGoalSection setApply={setApply}/>
      <ApplyFixed apply={apply} setApply={setApply}/>
      <SpecialOfferSection setApply={setApply}/>
      <MyPricingSection />
    </>
  )
}

export default HomePage