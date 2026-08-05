import { useEffect, useState } from 'react'
import Greeting from '../components/HomePage/Greeting/Greeting';
import GroupSection from '../components/HomePage/GroupSection/GroupSection';
import ChooseGoalSection from '../components/HomePage/ChooseGoalSection/ChooseGoalSection';
import type { ApplyType, TeacherType } from '../types.ts'
import ApplyFixed from '../components/HomePage/ApplyFixed/ApplyFixed.tsx';
import SpecialOfferSection from '../components/HomePage/SpecialOfferSection/SpecialOfferSection.tsx';
import MyPricingSection from '../components/MyPricingSection/MyPricingSection.tsx';
import LevelsSection from '../components/HomePage/LevelsSection/LevelsSection.tsx';
import LevelsMore from '../components/HomePage/LevelsMore/LevelsMore.tsx';
import ReviewSection from '../components/ReviewSection/ReviewSection.tsx';
import FAQ from '../components/FAQ/FAQ.tsx';
import Teachers from '../components/Teachers/Teachers.tsx';
import Alert from '@mui/material/Alert';
import { questions, reviews } from '../data/homePageData';
import { getTeachers } from '../api/teachers';

type Props = {}

function HomePage({}: Props) {
  const [teachers, setTeachers] = useState<TeacherType[]>([])
  const [teachersLoading, setTeachersLoading] = useState(false)
  const [teachersError, setTeachersError] = useState('')

  const [apply, setApply] = useState<ApplyType>({
    display:false,
    title:'Test title',
    text: 'test text text text'
  })
  const [levelsMore, setLevelsMore] = useState<{
    display: boolean;
    whatCanYouDo: string[];
    duration: string;
    level: string;
  }>
  ({
    display:false,
    whatCanYouDo: [],
    duration:'',
    level: ''
  });

  useEffect(() => {
    let isMounted = true

    async function fetchTeachers() {
      try {
        setTeachersLoading(true)
        setTeachersError('')
        const data = await getTeachers()
        if (!isMounted) return
        setTeachers(data)
      } catch {
        if (!isMounted) return
        setTeachersError('Failed to load teachers. Please refresh the page.')
      } finally {
        if (!isMounted) return
        setTeachersLoading(false)
      }
    }

    fetchTeachers()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <Greeting />
      <GroupSection />
      <ChooseGoalSection setApply={setApply}/>
      <ApplyFixed apply={apply} setApply={setApply}/>
      <SpecialOfferSection setApply={setApply}/>
      {teachersError ? (
        <section className='main'>
          <Alert severity='error'>{teachersError}</Alert>
        </section>
      ) : null}
      <Teachers teachers={teachers} loading={teachersLoading} />
      <MyPricingSection setApply={setApply}/>
      <LevelsSection setLevelsMore={setLevelsMore}/>
      <LevelsMore  levelsMore={levelsMore} setLevelsMore={setLevelsMore} setApply={setApply}/>
      <ReviewSection reviews={reviews} />
      <FAQ questions={questions}/>
    </>
  )
}

export default HomePage