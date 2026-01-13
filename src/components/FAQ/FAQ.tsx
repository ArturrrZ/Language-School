import React, {useState} from 'react'
import './FAQ.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import FAQitem from './FAQitem';
import type { FAQType } from '../../types';
// import { FAQType } from '../../types.ts' or define it here
// 
// export type FAQType = {
//   question: string;
//   answer: string;
// }
type Props = {
    questions: FAQType[];
    header?: string;
}

function FAQ({questions, header}: Props) {

  return (
    <section className='faq-section main'>
        <h2 className='sH text-center'>{header || 'Frequently Asked Questions'}</h2>
        <div className="faq-main">
            {questions.map((q, index) => (
                <FAQitem key={index} question={q.question} answer={q.answer} />
            ))}
        </div>
    </section>
  )
}

export default FAQ