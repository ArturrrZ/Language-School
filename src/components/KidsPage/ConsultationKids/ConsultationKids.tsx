import React from 'react'
import './ConsultationKids.css'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import Alert from '@mui/material/Alert'
import TelegramIcon from '@mui/icons-material/Telegram'
import { createFreeConsultation } from '../../../api/consultation'

type Props = {}

function ConsultationKids({}: Props) {
    const [terms, setTerms] = React.useState(false)
    const [ads, setAds] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [fieldErrors, setFieldErrors] = React.useState<{
      parentName?: string
      email?: string
      terms?: string
    }>({})

    const [parentName, setParentName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    React.useEffect(() => {
      if (!success) return
      const timer = window.setTimeout(() => setSuccess(''), 3000)
      return () => window.clearTimeout(timer)
    }, [success])

    function handleClickButton() {
      alert('Redirect to Telegram')
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      if (isSubmitting) return

      const trimmedParentName = parentName.trim()
      const trimmedEmail = email.trim()

      const nextFieldErrors: typeof fieldErrors = {}
      if (!trimmedParentName) nextFieldErrors.parentName = "Parent's name is required."
      if (!trimmedEmail) {
        nextFieldErrors.email = 'Email is required.'
      } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
        nextFieldErrors.email = 'Enter a valid email address.'
      }
      if (!terms) nextFieldErrors.terms = 'You must accept terms.'

      if (Object.keys(nextFieldErrors).length > 0) {
        setFieldErrors(nextFieldErrors)
        setError('')
        setSuccess('')
        return
      }

      setFieldErrors({})
      setError('')
      setSuccess('')

      try {
        setIsSubmitting(true)
        const trimmedMessage = message.trim()
        await createFreeConsultation({
          name: trimmedParentName,
          email: trimmedEmail,
          message: trimmedMessage + (ads ? '\n\nUser agreed to receive ads.' : '\n\nUser did not agree to receive ads.'),
        })
        // await new Promise<void>((resolve) => {
        //   window.setTimeout(() => resolve(), 2000)
        // })
        setSuccess('Request sent successfully!')
        setParentName('')
        setEmail('')
        setMessage('')
        setTerms(false)
        setAds(false)
      } catch {
        setError('Failed to send request. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  return (
    <section className='consultation-kids main'>
        <div className="consultation-kids-main">
          <ul className="consultation-kids-ul">
            <li className="consultation-kids-li">Individual approach to each student</li>
            <li className="consultation-kids-li">Qualified and experienced teachers</li>
            <li className="consultation-kids-li">Interactive and engaging lessons</li>
            <li className="consultation-kids-li-m">Flexible scheduling options</li>
            <li className="consultation-kids-li-m">Affordable pricing plans</li>
            <li className="consultation-kids-li-m">Progress tracking and feedback</li>
          </ul>

          <form className="consultation-kids-form" onSubmit={handleSubmit}>
            <h2 className="consultation-kids-header">Request a Consultation</h2>
            <TextField
                  required
                  id="consultation-kids-name"
                  name="parentName"
                  label="Parent's name"
                  autoComplete="name"
                  variant="outlined"
                  value={parentName}
                  onChange={(e) => {
                    setParentName(e.target.value)
                    if (fieldErrors.parentName) {
                      setFieldErrors((prev) => ({ ...prev, parentName: undefined }))
                    }
                  }}
                  error={!!fieldErrors.parentName}
                  helperText={fieldErrors.parentName}
                />

                <TextField
                  required
                  type='email'
                  id="consultation-kids-email"
                  name="email"
                  label="Email"
                  autoComplete="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (fieldErrors.email) {
                      setFieldErrors((prev) => ({ ...prev, email: undefined }))
                    }
                  }}
                  error={!!fieldErrors.email}
                  helperText={fieldErrors.email}
                />

                <TextField
                  multiline
                  minRows={3}
                  type='text'
                  id="consultation-kids-message"
                  name="message"
                  label="Optional message"
                  autoComplete="off"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <FormControlLabel
                  id='home_form_terms_text-kids'
                  required
                  control={
                    <Checkbox
                      color='default'
                      checked={terms}
                      onChange={(e) => {
                        setTerms(e.target.checked)
                        if (e.target.checked && fieldErrors.terms) {
                          setFieldErrors((prev) => ({ ...prev, terms: undefined }))
                        }
                      }}
                    />
                  }
                  label="I agree with terms and conditions"
                />
                {fieldErrors.terms ? <Alert severity="warning">{fieldErrors.terms}</Alert> : null}

                <FormControlLabel
                  id='home_form_terms_text_2-kids'
                  control={
                    <Checkbox
                      color='default'
                      checked={ads}
                      onChange={(e) => setAds(e.target.checked)}
                    />
                  }
                  label="I agree to receive ads"
                />

                <Button
                  type='submit'
                  disabled={isSubmitting}
                  variant="contained"
                  sx={{ height: '56px', width: '100%' }}
                  className="custom-button"
                >
                  {isSubmitting ?  'Sending...' : 'Request Consultation'}
                </Button>

                {error ? <Alert severity="error">{error}</Alert> : null}
                {success ? <Alert severity="success">{success}</Alert> : null}

                <Button
                  type="button"
                  onClick={handleClickButton}
                  variant="outlined"
                  sx={{ height: '56px', width: '100%' }}
                  className="custom-button"
                  startIcon={<TelegramIcon />}
                >
                  Telegram
                </Button>

          </form>
        </div>
    </section>
  )
}

export default ConsultationKids