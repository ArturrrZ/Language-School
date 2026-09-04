import React from 'react'
import './Greeting.css'
import newYearMainImage from '../../../assets/new-year-main-picture.avif'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Alert from '@mui/material/Alert'
import TelegramIcon from '@mui/icons-material/Telegram'
import { createFreeConsultation } from '../../../api/consultation'

type Props = {}

function Greeting({}: Props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [terms, setTerms] = React.useState(false)
  const [ads, setAds] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState('')

  const [fieldErrors, setFieldErrors] = React.useState<{
    name?: string
    email?: string
    terms?: string
  }>({})

  React.useEffect(() => {
    if (!success) return;
    const timer = window.setTimeout(() => setSuccess(''), 3000);
    return () => window.clearTimeout(timer);
  }, [success]);

  React.useEffect(() => {
    if (!error) return;
    const timer = window.setTimeout(() => setError(''), 3000);
    return () => window.clearTimeout(timer);
  }, [error]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const nextFieldErrors: typeof fieldErrors = {}
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName) nextFieldErrors.name = 'Name is required.'
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
        email: trimmedEmail,
        message: `Source: Home Greeting. Ads consent: ${ads ? 'yes' : 'no'}`,
      })
      setSuccess('Request sent successfully!')
      setName('')
      setEmail('')
      setTerms(false)
      setAds(false)
    } catch {
      setError('Failed to send request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  function handleClickButton() {
    alert('Redirect to Telegram')
  }

  return (
    <section id='home_greeting' className=''>
      <div id="home_main">

        <div id="home_top">
          <h1 id='home_title'>Online English Language School</h1>
          <p>
            Individual and group English lessons for adults, children, and teenagers.
            We prepare for exams, interviews, and teach fluent speaking.
          </p>
        </div>

        <img
          src={newYearMainImage}
          alt='new year main picture'
          id='home_main_image'
        />

        <div id="home_bottom">
          <span id="home_text">Test lesson for 4.99$</span>
          <span id="home_text_2">
            We'll determine your english level and create a unique plan just for you!
          </span>

          <div id="home_form">
            <form onSubmit={handleSubmit}>
              <div id='home_form_inputs'>

                <TextField
                  required
                  id="home-name"
                  name="name"
                  type='text'
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
                  type='email'
                  id="home-email"
                  name="email"
                  label="Email"
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

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Greeting
