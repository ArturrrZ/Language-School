import React,{useState} from 'react'
import Greeting from '../components/HomePage/Greeting/Greeting';
import GroupSection from '../components/HomePage/GroupSection/GroupSection';
import ChooseGoalSection from '../components/HomePage/ChooseGoalSection/ChooseGoalSection';
import type {ApplyType} from '../types.ts'
import ApplyFixed from '../components/HomePage/ApplyFixed/ApplyFixed.tsx';
import SpecialOfferSection from '../components/HomePage/SpecialOfferSection/SpecialOfferSection.tsx';
import PricingSection from '../components/HomePage/PricingSection/PricingSection.tsx';
import MyPricingSection from '../components/HomePage/MyPricingSection/MyPricingSection.tsx';
import LevelsSection from '../components/HomePage/LevelsSection/LevelsSection.tsx';
import LevelsMore from '../components/HomePage/LevelsMore/LevelsMore.tsx';
import ReviewSection from '../components/HomePage/ReviewSection/ReviewSection.tsx';

type Props = {}

function HomePage({}: Props) {
  const [apply, setApply] = useState<ApplyType>({
    display:false,
    title:'Test title',
    text: 'test text text text'
  })
  const [levelsMore, setLevelsMore] = useState<{
    display: boolean;
    whatCanYouDo: string[];
    duration: string;
  }>
  ({
    display:false,
    whatCanYouDo: [],
    duration:'',
  });
  return (
    <>
      <Greeting />
      <GroupSection />
      <ChooseGoalSection setApply={setApply}/>
      <ApplyFixed apply={apply} setApply={setApply}/>
      <SpecialOfferSection setApply={setApply}/>
      <MyPricingSection setApply={setApply}/>
      <LevelsSection setLevelsMore={setLevelsMore}/>
      <LevelsMore  levelsMore={levelsMore} setLevelsMore={setLevelsMore} setApply={setApply}/>
      <ReviewSection />
    </>
  )
}

export default HomePage