import React from 'react'
import './ChooseGoalSection.css'
import cubeAndCursor from '../../../assets/cubeAndCursor.avif'
import type {ApplyType} from '../../../types.ts'


type Props = {
  setApply: (value: ApplyType) => void;
}

const goals = [
  {title:'Education', text:'We prepare you for admission to foreign universities and participation in international exchange programs.'},
  {title:'Job', text:'We help you master business English tailored to your profession and your current needs.'},
  {title:'Traveling', text:'We teach you useful phrases and skills so you can confidently communicate anywhere in the world.'},
  {title:'Movies and TV', text:'We help you understand movies and TV series in English, enjoying the original voices of the actors.'},
  {title:'Personal', text:'We create a personalized learning program based on your goals and requests.'},
]

function ChooseGoalSection({setApply}: Props) {
  return (
    <section id='choose-goal-section'>
      <div className="choose-goal-left">
        <h2 className="choose-goal-section-header">Choose a goal - we'll find the best solution!</h2>
        <div className="choose-goal-list">
          {goals.map((g, i) => (
           <div onClick={()=>{setApply({display:true, title:g.title, text:g.text})}} className="choose-goal-box" id={g.title} key={g.title + i}>
             <div className="choose-goal-title">{g.title}</div>
            </div>
         ))}
        </div>
      </div>
      <img className="choose-goal-img" src={cubeAndCursor} alt='cube and cursor' />

    </section>
  )
}

export default ChooseGoalSection