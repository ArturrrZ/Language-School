import React from 'react'
import './GroupSection.css'
import g1 from '../../../assets/g1.avif'
import g2 from '../../../assets/g2.avif'
import g3 from '../../../assets/g3.avif'
import g4 from '../../../assets/g4.avif'
import g5 from '../../../assets/g5.avif'

type Props = {}


const groupFeatures = [
  {
    title: 'Personalized Program',
    description: 'AI helps the teacher build a group learning plan that considers each participant’s goals, so everyone moves toward results together.',
    imgAlt: 'Personalized Program',
    img: g1,
  },
  {
    title: 'Materials for Your Interests',
    description: 'We select videos, articles, and podcasts that are interesting for the whole group—making topics lively and engaging.',
    imgAlt: 'Materials for Your Interests',
    img: g2,
  },
  {
    title: 'No Rote Memorization',
    description: 'Grammar stops being just theory—you use it where it’s really needed in practice.',
    imgAlt: 'No Rote Memorization',
    img: g3,
  },
  {
    title: 'Convenient Platform',
    description: '24/7 access to learning materials and an interactive chat for self-study.',
    imgAlt: 'Convenient Platform',
    img: g4,
  },
  {
    title: 'Personal Feedback',
    description: 'Every student is in the spotlight. The teacher guides, advises, and corrects mistakes.',
    imgAlt: 'Personal Feedback',
    img: g5,
  },
];

function GroupSection({}: Props) {
  return (
    <section className="group-section main">
      <div className="group-section-header">
        <h2>This Works in a Group</h2>
        <p>At our school, you don’t adapt to the program—the program adapts to you. Here’s how it works:</p>
      </div>
      <div className="group-section-features">
        {groupFeatures.map((feature, idx) => (
          <div className="group-feature-box" key={idx}>
            <div className="group-feature-img-placeholder" aria-label={feature.imgAlt}>
              <img src={feature.img} width="100%" alt={feature.imgAlt}/>
            </div>
            <p className="group-feature-title">{feature.title}</p>
            <p className="group-feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GroupSection