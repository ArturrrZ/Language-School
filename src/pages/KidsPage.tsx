import { useEffect, useState } from 'react'
import GreetingKids from '../components/KidsPage/Greeting/GreetingKids'
import ConsultationKids from '../components/KidsPage/ConsultationKids/ConsultationKids'
import WhatWeTeachSection from '../components/KidsPage/WhatWeTeachSection/WhatWeTeachSection'
import Teachers from '../components/Teachers/Teachers'
import MyPricingSection from '../components/MyPricingSection/MyPricingSection.tsx';
import ReviewSection from '../components/ReviewSection/ReviewSection.tsx';
import FAQ from '../components/FAQ/FAQ.tsx';
import { kidsFaqQuestions, kidsPricingOptions, kidsReviews, kidsTeachers } from '../data/kidsPageData';
import { getTeachers } from '../api/teachers'
import type { TeacherType } from '../types'

type Props = {}

function KidsPage({}: Props) {
  const fallbackTeachers = kidsTeachers.map((t) => ({
    ...t,
    message: t.message ?? (t as any).kids_description ?? (t as any).description ?? '',
  }))

  const [teachers, setTeachers] = useState<TeacherType[]>(fallbackTeachers)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    ;(async () => {
      try {
        const data = await getTeachers({ preferKidsDescription: true })
        if (!mounted) return
        if (data && data.length) setTeachers(data)
      } catch (err) {
        // keep fallback
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    })()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <GreetingKids />
      <ConsultationKids />
      <WhatWeTeachSection />
      <Teachers teachers={teachers} header='What our teachers like about working with Kids' loading={loading} />
      <MyPricingSection options={kidsPricingOptions}/>
      <ReviewSection reviews={kidsReviews} header='What parents say'/>
      <FAQ questions={kidsFaqQuestions}/>

    </>
  )
}

export default KidsPage
