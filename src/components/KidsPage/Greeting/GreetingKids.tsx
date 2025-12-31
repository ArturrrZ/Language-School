import React from 'react'
import './GreetingKids.css'
import KidLaptop from '../../../assets/kidLaptop.jpg'

type Props = {}

function GreetingKids({}: Props) {
  return (
    <section className="greeting-kids-section main">
        <div className="greeting-kids-text">
            <h1 className="greeting-kids-header">English for Kids from 5 to 12 years old!</h1>
            <p className="kids-paragraph">Our English courses for kids are designed to make learning fun and engaging. With interactive lessons, games, and activities, children will develop their language skills in a supportive environment.</p>
        </div>
        <img className="kids-greeting-image" src={KidLaptop} alt="Kids Learning English" />
    </section>
  )
}

export default GreetingKids