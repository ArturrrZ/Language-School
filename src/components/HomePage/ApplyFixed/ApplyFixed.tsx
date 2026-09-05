import React,{useEffect, useRef} from 'react'
import type {ApplyType} from '../../../types'
import './ApplyFixed.css'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import TelegramIcon from '@mui/icons-material/Telegram'
import { createFreeConsultation } from '../../../api/consultation';


type Props = {
    apply: ApplyType,
    setApply: (value: ApplyType) => void;
}

function ApplyFixed({apply,setApply}: Props) {
    const mainRef = useRef<HTMLFormElement>(null)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [terms, setTerms] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [fieldErrors, setFieldErrors] = React.useState<{
      name?: string
      phone?: string
      email?: string
      terms?: string
    }>({})

    useEffect(() => {
      if (!success) return;
      const timer = window.setTimeout(() => setSuccess(''), 1000);
      return () => window.clearTimeout(timer);
    }, [success]);

    useEffect(() => {
      if (!error) return;
      const timer = window.setTimeout(() => setError(''), 3000);
      return () => window.clearTimeout(timer);
    }, [error]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const trimmedName = name.trim()
        const trimmedPhone = phone.trim()
        const trimmedEmail = email.trim()

        const nextFieldErrors: typeof fieldErrors = {}
        if (!trimmedName) nextFieldErrors.name = 'Name is required.'
        if (!trimmedPhone) {
          nextFieldErrors.phone = 'Phone is required.'
        } else if (trimmedPhone.replace(/\D/g, '').length < 7) {
          nextFieldErrors.phone = 'Enter a valid phone number.'
        }
        if (!trimmedEmail) {
          nextFieldErrors.email = 'Email is required.'
        } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
          nextFieldErrors.email = 'Enter a valid email address.'
        }
        if (!terms) nextFieldErrors.terms = 'You must accept terms.'

        if (Object.keys(nextFieldErrors).length > 0) {
          setFieldErrors(nextFieldErrors)
          setSuccess('')
          return
        }

        setFieldErrors({})
        setError('')
        setSuccess('')

        try {
          setIsSubmitting(true)
          await createFreeConsultation({
            name: trimmedName,
            phone: trimmedPhone,
            email: trimmedEmail,
            message: `${apply.title}: ${apply.text}`,
          })
          setSuccess('Request sent successfully!')
          setName('')
          setPhone('')
          setEmail('')
          setTerms(false)
          setTimeout(()=>{setApply({...apply, display:false})}, 2000)
        } catch {
          setError('Failed to send request. Please try again.')
        } finally {
          setIsSubmitting(false)
        }
      }
      function handleClickButton() {
        window.open('https://t.me/z1nbv', '_blank', 'noopener,noreferrer')
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

  // if (!apply.display) return null;

  return (
    <div className={`apply-fixed ${apply.display?'open':''}`}>
      <form className="apply-main" ref={mainRef} onSubmit={handleSubmit}>
        <div className="apply-top">
          <h2 className='apply-title'>{apply.title}</h2>
          <IconButton aria-label="close" onClick={() => { setApply({ ...apply, display: false }) }}>
            <CloseIcon />
          </IconButton>
        </div>
        <p>{apply.text}</p>
        <TextField
          required
          id="apply-fixed-name"
          name="name"
          label="Your name"
          autoComplete="name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={!!fieldErrors.name}
          helperText={fieldErrors.name}
        />
        <TextField
          required
          id="apply-fixed-phone"
          name="phone"
          label="Your phone number"
          autoComplete="tel"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={!!fieldErrors.phone}
          helperText={fieldErrors.phone}
        />
        <TextField
          required
          type='email'
          id="apply-fixed-email"
          name="email"
          label="Your email"
          autoComplete="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
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
        {fieldErrors.terms ? <Alert severity="warning">{fieldErrors.terms}</Alert> : null}
        <Button
          type='submit'
          disabled={isSubmitting}
          variant="contained"
          sx={{ height: '56px', maxWidth: '1000px', width: '100%' }}
          className="custom-button"
        >
          {isSubmitting ? 'Sending...' : 'Apply'}
        </Button>
        {error ? <Alert severity="error">{error}</Alert> : null}
        {success ? <Alert severity="success">{success}</Alert> : null}
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