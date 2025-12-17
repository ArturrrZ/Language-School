import React,{useEffect, useRef} from 'react'
import type {ApplyType} from '../../../types'
import './ApplyFixed.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
type Props = {
    apply: ApplyType,
    setApply: (value: ApplyType) => void;
}

function ApplyFixed({apply,setApply}: Props) {
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      function handleOutsideClick(e: MouseEvent) {
        if (mainRef.current && !mainRef.current.contains(e.target as Node)) {
          setApply({ ...apply, display: false });
        }
      }
      if (apply.display) {
        document.body.classList.add('apply-fixed-open');
        document.addEventListener('mousedown', handleOutsideClick, true);
      } else {
        document.body.classList.remove('apply-fixed-open');
      }
      return () => {
        document.body.classList.remove('apply-fixed-open');
        document.removeEventListener('mousedown', handleOutsideClick, true);
      };
    }, [apply, setApply]);

  if (!apply.display) return null;
  return (
    <div className="apply-fixed open">
      <div className="apply-main" ref={mainRef}>
        <div className="apply-top">
          <h2>{apply.title}</h2>
          <IconButton aria-label="close" onClick={() => { setApply({ ...apply, display: false }) }}>
            <CloseIcon />
          </IconButton>
        </div>
        <p>{apply.text}</p>
      </div>
    </div>
  )
}

export default ApplyFixed