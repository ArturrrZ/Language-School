import { IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from 'react'
import './FAQitem.css'

type Props = {
    question: string;
    answer: string;
}

function FAQitem({question, answer}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

  return (
    <div className={`faq-item ${isOpen?'open':''}`}>
        <div className='faq-question-div' onClick={toggleOpen}>
            <h3 className="faq-question">{question}</h3>
            <IconButton>
                <KeyboardArrowDownIcon className='faq-icon'/>
            </IconButton>
        </div>
        <p className="faq-answer">{answer}</p>
    </div>
  )
}

export default FAQitem