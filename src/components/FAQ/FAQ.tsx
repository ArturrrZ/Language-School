import React, {useState} from 'react'
import './FAQ.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import FAQitem from './FAQitem';

type Props = {}

const questions = [
    {
        question: "What is the return policy?",
        answer: "Our return policy allows returns within 30 days of purchase with a valid receipt."
    },
    {
        question: "What age groups do you cater to?",
        answer: "We offer English courses for students of all ages, from young learners (5+) to adults and professionals."
    },
    {
        question: "How long are the lessons?",
        answer: "Our standard lessons are 50 minutes long, but we also offer 25-minute sessions for younger students or intensive practice."
    },
    {
        question: "Do you offer one-on-one or group classes?",
        answer: "We offer both! You can choose private one-on-one lessons for personalized attention or join small group classes (max 6 students) for interactive learning."
    },
    {
        question: "What qualifications do your teachers have?",
        answer: "All our teachers are native or fluent English speakers with TEFL/TESOL certification and at least 2 years of teaching experience."
    },
    {
        question: "Can I choose my class schedule?",
        answer: "Yes! We offer flexible scheduling 7 days a week. You can book lessons at times that work best for you."
    },
    {
        question: "Do you provide learning materials?",
        answer: "Yes, all learning materials, including textbooks, worksheets, and interactive resources are included in your tuition fee."
    },
    {
        question: "How do I track my progress?",
        answer: "Students receive regular progress reports, and you can access your performance dashboard to track completed lessons, test scores, and improvement areas."
    }]

function FAQ({}: Props) {

  return (
    <section className='faq-section main'>
        <h2 className='sH text-center'>Frequently Asked Questions</h2>
        <div className="faq-main">
            {questions.map((q, index) => (
                <FAQitem key={index} question={q.question} answer={q.answer} />
            ))}
        </div>
    </section>
  )
}

export default FAQ