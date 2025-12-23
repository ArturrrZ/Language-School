import React,{useEffect, useRef} from 'react'
import './LevelsMore.css'


type Props = {
    levelsMore:  {display: boolean, whatCanYouDo: string[], duration: string},
    setLevelsMore: (value: {display: boolean, whatCanYouDo: string[], duration: string}) => void;
}

function LevelsMore({levelsMore, setLevelsMore}: Props) {
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
  return (
    <div className={`levels-more-section ${levelsMore.display ? 'open' : ''}`} >
        <div className="levels-main" ref={mainRef}>
            more details about levels
        </div>
    </div>
  )
}

export default LevelsMore