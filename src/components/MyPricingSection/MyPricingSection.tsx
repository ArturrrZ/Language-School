import React from 'react'
import './MyPricingSection.css'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import type { ApplyType } from '../../types.ts';

type Props = {
  setApply: (value: ApplyType) => void;
}
const tiers = [
    {
    title: 'Groups',
    subheader: 'Most popular',
    price: '15',
    description: [
      'Training combines speaking practice and grammar: you master the necessary constructions and immediately apply them in speech.',
      'Group lesson 60 minutes',
      'Access to the online platform',
      'Homework check and progress tracking in your personal account',
      'Group selection by level and schedule',
      'Alternation of theory and practice for lively and effective learning',
      'Classes 2 times a week',
      
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
    buttonColor: 'primary',
  },
  {
    title: 'Classic',
    price: '30',
    description: [
      'Individual training that takes into account the features of your speech and provides maximum practice',
      'Individual lesson 50 minutes',
      'Homework check and progress tracking in your personal account',
      'Teacher who adjusts the course',
      'Personalized learning program based on AI data analysis',
      'Lesson duration — 50 minutes instead of 25 minutes',
    ],
    buttonText: 'Apply now',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  
  {
    title: 'Native',
    price: '40',
    description: [
      'Personalized training with a native speaker, fully adapted to your goals and interests with a focus on practical part',
      'Individual lesson 50 minutes',
      'Homework check and progress tracking in your personal account',
      'Teacher who adjusts the course',
      'Personalized learning program based on AI data analysis',
      'Lesson duration — 50 minutes instead of 25 minutes',
      'Classes are conducted by a native speaker',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];
function MyPricingSection({setApply}: Props) {
  return (
    <section className='main'>
        <div className="pricing-section-header">
            <h2 className='sH'>Our Pricing</h2>
            <p>Choose the plan that best fits your needs.</p>
        </div>
        <div className="pricing-cards">
          {tiers.map((tier) => (
            <div key={tier.title} className={`pricing-card ${tier.title === 'Groups' ? 'popular-card' : ''}`}>
                <h3>{tier.title}</h3>
                <p className="price">${tier.price} / session</p>
                <Divider />
                <div className="pricing-card-bottom">
                <ul>
                  {tier.description.map((line) => (
                    <li key={line}>
                        <div className="pricing-card-li">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={
                                tier.title === 'Groups' ? 'var(--whit)' : 'var(--purp)'
                            } viewBox="0 0 24 24">
                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m4.674-11.261a1 1 0 0 0-1.348-1.478l-4.808 4.386-1.844-1.683a1 1 0 0 0-1.348 1.477l2.519 2.298a1 1 0 0 0 1.347 0z">
                                </path></svg>
                                {line}
                                </div>
                    </li>
                  ))}
                  {tier.title === 'Groups' && (
                    <li>

                        <div className="mychip">Most popular</div>
                    </li>
                  )}
                </ul>
                <button className='pricing-card-button' onClick={()=>{setApply({display:true, title:tier.title, text:`${tier.title} plan selected. Price: $${tier.price} per session.`})}}>{tier.buttonText}</button>
                </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default MyPricingSection