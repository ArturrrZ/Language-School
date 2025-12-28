import React,{useState} from 'react'
import Greeting from '../components/HomePage/Greeting/Greeting';
import GroupSection from '../components/HomePage/GroupSection/GroupSection';
import ChooseGoalSection from '../components/HomePage/ChooseGoalSection/ChooseGoalSection';
import type {ApplyType} from '../types.ts'
import ApplyFixed from '../components/HomePage/ApplyFixed/ApplyFixed.tsx';
import SpecialOfferSection from '../components/HomePage/SpecialOfferSection/SpecialOfferSection.tsx';
import MyPricingSection from '../components/MyPricingSection/MyPricingSection.tsx';
import LevelsSection from '../components/HomePage/LevelsSection/LevelsSection.tsx';
import LevelsMore from '../components/HomePage/LevelsMore/LevelsMore.tsx';
import ReviewSection from '../components/ReviewSection/ReviewSection.tsx';
import FAQ from '../components/FAQ/FAQ.tsx';
import Teachers from '../components/Teachers/Teachers.tsx';
import type { TeacherType } from '../types.ts';
import face1 from '../assets/faces/face1.jpg';
import face2 from '../assets/faces/face2.jpg';
import face3 from '../assets/faces/face3.jpg';
import face4 from '../assets/faces/face4.jpg';
import face5 from '../assets/faces/face5.jpg';


const adultTeachers:TeacherType[] = [
  {id:1, name:'Alice Smith', experience:'5 years of teaching experience', photo: face1, message:'I love helping students achieve their language goals! My approach focuses on building confidence through practice. I create a welcoming atmosphere where mistakes are part of learning. Every student has unique strengths that I help them discover. Together, we make language learning an enjoyable journey.'
  },
  {id:2, name:'Bob Johnson', experience:'8 years of teaching experience', photo: face2, message:'My passion is to make learning fun and engaging. I use interactive methods to keep students motivated. Real-world conversations are at the heart of my lessons. I believe that enthusiasm is contagious in the classroom. Let\'s explore the language together in exciting ways.'
  },
  {id:3, name:'Catherine Lee', experience:'6 years of teaching experience', photo: face4 , message:'I believe in personalized learning to meet each student\'s needs. Everyone learns at their own pace and style. I adapt my teaching methods to fit individual goals. Building strong foundations is essential for long-term success. Your progress is my top priority.'
  },
  {id:4, name:'David Brown', experience:'10 years of teaching experience', photo: face3, message:'Creating a supportive environment is key to effective learning. I encourage students to express themselves freely without fear. Patience and understanding guide my teaching philosophy. I celebrate every milestone, no matter how small. Let\'s work together to unlock your full potential.'
  },
  {id:5, name:'Eva Green', experience:'7 years of teaching experience', photo: face5, message:'I am dedicated to helping students achieve fluency through immersive experiences. Practical application of language skills is my focus. I incorporate cultural insights to enrich the learning process. Consistent practice leads to mastery, and I am here to support that journey. Together, we can reach your language aspirations.'
  },
  
]

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
      <Teachers teachers={adultTeachers} />
      <MyPricingSection setApply={setApply}/>
      <LevelsSection setLevelsMore={setLevelsMore}/>
      <LevelsMore  levelsMore={levelsMore} setLevelsMore={setLevelsMore} setApply={setApply}/>
      <ReviewSection />
      <FAQ />
    </>
  )
}

export default HomePage