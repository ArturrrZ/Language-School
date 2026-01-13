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
import type { ReviewType } from '../types.ts';

const reviews: ReviewType[] = [
  {id:1, name: 'John Doe', stars:'★★★★★',review: 'Great platform! Helped me improve my skills significantly.', face: face1},
  {id:2, name: 'Sarah Johnson', stars:'★★★★★', review: 'The interactive lessons and practical exercises made learning enjoyable and effective. I was able to apply what I learned immediately in my projects.', face: face5},
  {id:3, name: 'Michael Chen', stars:'★★★★☆', review: 'Excellent resource for students at all levels. The structured curriculum and supportive community helped me stay motivated throughout my learning journey.', face: null},
  {id:4, name: 'Emily Rodriguez', stars:'★★★★★', review: 'As a complete beginner, I found the step-by-step approach incredibly helpful. The instructors break down complex concepts into digestible pieces that are easy to understand.', face: face3},
  {id:5, name: 'David Thompson', stars:'★★★★★', review: 'The quality of content is outstanding. Every course is well-organized and the practice problems really challenge you to think critically and solve real-world problems.', face: null},
  {id:6, name: 'Lisa Park', stars:'★★★★☆', review: 'I appreciate the flexibility this platform offers. Being able to learn at my own pace while having access to mentors when I need help has been invaluable for my growth.', face: face4},
  {id:7, name: 'James Wilson', stars:'★★★★★', review: 'This platform transformed my understanding of programming. The hands-on projects and code reviews from experienced developers helped me build confidence in my abilities.', face: face2},
  {id:8, name: 'Amanda Foster', stars:'★★★★★', review: 'The community aspect is what sets this apart. Being able to collaborate with other learners and get feedback on my work accelerated my progress tremendously.', face: null},
  {id:9, name: 'Ryan Martinez', stars:'★★★★☆', review: 'Great value for the price. The comprehensive curriculum covers everything from basics to advanced topics, making it a one-stop solution for skill development.', face: null},
  {id:10, name: 'Sophia Anderson', stars:'★★★★★', review: 'I went from knowing nothing about coding to building my own projects in just a few months. The clear explanations and supportive environment made all the difference.', face: null}

]


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
      <ReviewSection reviews={reviews} />
      <FAQ />
    </>
  )
}

export default HomePage