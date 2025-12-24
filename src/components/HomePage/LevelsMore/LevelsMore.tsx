import React,{useEffect, useRef} from 'react'
import './LevelsMore.css'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import type { ApplyType } from '../../../types'


type Props = {
    levelsMore:  {display: boolean, whatCanYouDo: string[], duration: string},
    setLevelsMore: (value: {display: boolean, whatCanYouDo: string[], duration: string}) => void,
    setApply: (applyValue: ApplyType)=>void,
}

function LevelsMore({levelsMore, setLevelsMore, setApply}: Props) {
    const mainRef = useRef<HTMLDivElement>(null); 
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      // add logic to close LevelsMore when clicking outside
      if (mainRef.current && !mainRef.current.contains(e.target as Node)) {
        setLevelsMore({display:false, whatCanYouDo: [], duration: ''});
      }
    }
    
    if (levelsMore.display) {
        document.body.classList.add('apply-fixed-open');
        document.addEventListener('mousedown', handleOutsideClick, true);
      } else {
        document.body.classList.remove('apply-fixed-open');
      }
      return () => {
        document.body.classList.remove('apply-fixed-open');
        document.removeEventListener('mousedown', handleOutsideClick, true);
      };
    },[levelsMore]);
    function handleApply(){
      setLevelsMore({display:false, whatCanYouDo: [], duration: ''});
      setTimeout(()=>{setApply({display:true, title:'Apply for this level', text: 'Please fill out the form to apply for this level.'});}, 400);
      
    }
  return (
    <div className={`levels-more-section ${levelsMore.display ? 'open' : ''}`} >
        <div className="levels-main" ref={mainRef}>
          <div className="levels-top">
            <h2>What You Can Do at This Level:</h2>
            <IconButton aria-label="close" onClick={() => { setLevelsMore({display:false, whatCanYouDo: [], duration: ''}) }}>
              <CloseIcon />
            </IconButton>
            </div>
          <ul>
            {levelsMore.whatCanYouDo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="duration-info">
            <h3>Time Required:</h3>
            <p>{levelsMore.duration}</p>
          </div>
          <button className="myButton" onClick={handleApply}>Apply</button>

        </div>
    </div>
  )
}

export default LevelsMore