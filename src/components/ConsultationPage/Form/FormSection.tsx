import React, { useState } from 'react'
import './FormSection.css'
import { TextField, FormControlLabel, Checkbox, Button } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'

type Props = {}

function FormSection({}: Props) {
  const [terms, setTerms] = useState(false)
  const [ads, setAds] = useState(false)

  const handleClickButton = () => {
    // Add your telegram handler logic here
  }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Add your form submission logic here
        alert('Send POST request')
        e.currentTarget.reset()
        setTerms(false)
        setAds(false)
        
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
                />

                <TextField
                  required
                  type='email'
                  id="consultation-email"
                  name="email"
                  label="Email"
                  autoComplete="email"
                  variant="outlined"
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
                  variant="contained"
                  sx={{ height: '56px', width: '100%' }}
                  className="custom-button"
                >
                  Apply
                </Button>

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