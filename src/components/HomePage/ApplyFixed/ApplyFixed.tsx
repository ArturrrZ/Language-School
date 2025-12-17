import React,{useEffect, useRef} from 'react'
import type {ApplyType} from '../../../types'
import './ApplyFixed.css'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram'


type Props = {
    apply: ApplyType,
    setApply: (value: ApplyType) => void;
}

function ApplyFixed({apply,setApply}: Props) {
    const mainRef = useRef<HTMLFormElement>(null)
    const [terms, setTerms] = React.useState(false)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        alert('Send POST request')
    
        // reset native inputs
        e.currentTarget.reset()
    
        // reset controlled checkboxes
        setTerms(false)
      }
      function handleClickButton() {
        alert('Redirect to Telegram')
    }
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
      <form className="apply-main" ref={mainRef} onSubmit={handleSubmit}>
        <div className="apply-top">
          <h2 className='apply-title'>English for {apply.title==='Personal'&&' any '}{apply.title}{apply.title==='Personal'&&' reason'}</h2>
          <IconButton aria-label="close" onClick={() => { setApply({ ...apply, display: false }) }}>
            <CloseIcon />
          </IconButton>
        </div>
        <p>{apply.text}</p>
        <TextField
          required
          id="outlined-basic"
          label="Your name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-basic"
          label="Your phone number"
          variant="outlined"
        />
        <TextField
          required
          type='email'
          id="outlined-basic"
          label="Your email"
          variant="outlined"
        />
        <FormControlLabel
          id='home_form_terms_text'
          required
          control={
            <Checkbox
              color='default'
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
          }
          label="I agree with terms and conditions"
        />
        <Button
          type='submit'
          variant="contained"
          sx={{ height: '56px', maxWidth: '1000px', width: '100%' }}
          className="custom-button"
        >
          Apply
        </Button>
        <Button
          type="button"
          onClick={handleClickButton}
          variant="outlined"
          sx={{ height: '56px', maxWidth: '1000px', width: '100%' }}
          className="custom-button"
          startIcon={<TelegramIcon />}
        >
          Telegram
        </Button>
      </form>
    </div>
  )
}

export default ApplyFixed