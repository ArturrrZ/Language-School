import React from 'react'
import './LevelsSection.css'
import { duration } from '@mui/material';

type Props = {}
const levels = [
    {
        number: 'A1',
        title: 'Beginner',
        description: 'Start your language journey with basic phrases and expressions.',
        duration: '3 Months',
        img: null,
        imgAlt: '',
        more: {
            whatCanYouDo: [
                'Introduce yourself and others',
                'Ask and answer simple questions about personal details',
                'Understand and use familiar everyday expressions',
                'Interact in a simple way if the other person talks slowly',
                'Use basic greetings and farewells',
                'Understand simple written notices and signs',
                'Write short, simple postcards and forms',
                'Describe your family and living situation briefly'
            ],
            timeToBeat: 'From scratch: 3 months with 2 lessons per week'
        }
    },
    {
        number: 'A2',
        title: 'Elementary',
        description: 'Build on your basics and start having simple conversations.',
        duration: '4 Months',
        img: null,
        imgAlt: '',
        more: {
            whatCanYouDo: [
                'Understand sentences and frequently used expressions',
                'Communicate in simple routine tasks',
                'Describe your background and immediate environment',
                'Express immediate needs in simple terms',
                'Understand short, simple texts on familiar topics',
                'Write simple notes and messages',
                'Fill in forms with personal details',
                'Participate in brief social exchanges'
            ],
            timeToBeat: 'From scratch: 7 months with 2 lessons per week, 4 months from the previous level with 2 lessons per week'
        }
    },
    {
        number: 'B1',
        title: 'Intermediate',
        description: 'Gain confidence in daily conversations and familiar topics.',
        duration: '5 Months',
        img: null,
        imgAlt: '',
        more: {
            whatCanYouDo: [
                'Understand the main points of clear standard input',
                'Deal with most situations while traveling',
                'Produce simple connected text on familiar topics',
                'Describe experiences, events, dreams, and ambitions',
                'Give reasons and explanations for opinions and plans',
                'Understand the main points of TV programs on familiar topics',
                'Write simple personal letters',
                'Participate in conversations on familiar topics'
            ],
            timeToBeat: 'From scratch: 12 months with 2 lessons per week, 5 months from the previous level with 2 lessons per week'
        }
    },
    {
        number: 'B2',
        title: 'Upper Intermediate',
        description: 'Express yourself fluently and understand complex topics.',
        duration: '6 Months',
        img: null,
        imgAlt: '',
        more: {
            whatCanYouDo: [
                'Understand the main ideas of complex texts',
                'Interact with a degree of fluency and spontaneity',
                'Produce clear, detailed text on a wide range of subjects',
                'Explain viewpoints giving advantages and disadvantages',
                'Understand extended speech and lectures',
                'Read articles and reports on contemporary problems',   
                'Write detailed essays and reports',
                'Participate actively in discussions in familiar contexts'
            ],
            timeToBeat: 'From scratch: 18 months with 2 lessons per week, 6 months from the previous level with 2 lessons per week'
        }
    },
    {
        number: 'C1',
        title: 'Advanced',
        description: 'Master complex language use and express yourself with precision.',
        duration: '8 Months',
        img: null,
        imgAlt: '',
        more: {
            whatCanYouDo: [
                'Understand a wide range of demanding, longer texts',
                'Express yourself fluently and spontaneously',
                'Use language flexibly for social, academic, and professional purposes',
                'Produce clear, well-structured, detailed text on complex subjects',
                'Understand extended speech even when not clearly structured',
                'Read complex factual and literary texts',
                'Write clear, well-structured texts expressing points of view',
                'Participate effectively in discussions and meetings'
            ],
            timeToBeat: 'From scratch: 26 months with 2 lessons per week, 8 months from the previous level with 2 lessons per week'
        }
    }
];
function LevelsSection({}: Props) {
  return (
    <section className="levels-section">
        <div className="levels-section-header text-center">
            <h2 className='sH'>Choose Your Level</h2>
            <p>Whether you're a beginner or looking to advance your skills, we have the right level for you.</p>
        </div>
        <div className="levels-section-levels">
            {levels.map((level, idx) => (
                <div key={idx} className='level-box'>
                    <div className="level-box-top">
                        <div className="level-number">{level.number}</div>
                        <div className="level-duration">{level.duration}</div>
                    </div>
                    <div className="level-title">{level.title}</div>
                    <div className="level-description">{level.description}</div>
                    <div className="level-more">More</div>
                    <img className='level-img' src={level.img?level.img:''} alt={level.imgAlt} />
                </div>))}
        </div>    
    </section>
  )
}

export default LevelsSection