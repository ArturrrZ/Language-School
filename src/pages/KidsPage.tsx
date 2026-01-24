import GreetingKids from '../components/KidsPage/Greeting/GreetingKids'
import ConsultationKids from '../components/KidsPage/ConsultationKids/ConsultationKids'
import WhatWeTeachSection from '../components/KidsPage/WhatWeTeachSection/WhatWeTeachSection'
import Teachers from '../components/Teachers/Teachers'
import MyPricingSection from '../components/MyPricingSection/MyPricingSection.tsx';
import ReviewSection from '../components/ReviewSection/ReviewSection.tsx';
import FAQ from '../components/FAQ/FAQ.tsx';
import { kidsFaqQuestions, kidsPricingOptions, kidsReviews, kidsTeachers } from '../data/kidsPageData';

type Props = {}

function KidsPage({}: Props) {
  return (
    <>
      <GreetingKids />
      <ConsultationKids />
      <WhatWeTeachSection />
      <Teachers teachers={kidsTeachers} header='What our teachers like about working with Kids'/>
      <MyPricingSection options={kidsPricingOptions}/>
      <ReviewSection reviews={kidsReviews} header='What parents say'/>
      <FAQ questions={kidsFaqQuestions}/>

    </>
  )
}

export default KidsPage
