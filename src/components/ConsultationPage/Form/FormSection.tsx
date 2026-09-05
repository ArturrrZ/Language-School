import React, { useState } from 'react'
import './FormSection.css'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import TelegramIcon from '@mui/icons-material/Telegram'
import { createFreeConsultation } from '../../../api/consultation'

type Props = {}

function FormSection({}: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [terms, setTerms] = useState(false)
  const [ads, setAds] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string
    email?: string
    terms?: string
  }>({})

  React.useEffect(() => {
    if (!success) return
    const timer = window.setTimeout(() => setSuccess(''), 3000)
    return () => window.clearTimeout(timer)
  }, [success])

  const handleClickButton = () => {
    window.open('https://t.me/z1nbv', '_blank', 'noopener,noreferrer')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (isSubmitting) return

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    const nextFieldErrors: typeof fieldErrors = {}
    if (!trimmedName) nextFieldErrors.name = 'Name is required.'
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
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage + (ads ? '\n\nUser agreed to receive ads.' : '\n\nUser did not agree to receive ads.'),
      })

      setSuccess('Request sent successfully!')
      setName('')
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
    <form className='free-consultation-form' onSubmit={handleSubmit}>
        <h2>Request a Consultation</h2>
            <TextField
                  required
                  id="consultation-name"
                  name="name"
                  label="Your name"
                  autoComplete="name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (fieldErrors.name) {
                      setFieldErrors((prev) => ({ ...prev, name: undefined }))
                    }
                  }}
                  error={!!fieldErrors.name}
                  helperText={fieldErrors.name}
                />

                <TextField
                  required
                  type='email'
                  id="consultation-email"
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
                  id="consultation-message"
                  name="message"
                  label="Optional message"
                  autoComplete="off"
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <FormControlLabel
                  id='home_form_terms_text'
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
                  id='home_form_terms_text_2'
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
                  {isSubmitting ? 'Sending...' : 'Apply'}
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
  )
}

export default FormSection