import React from 'react'
import './ConsultationKids.css'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'

type Props = {}

function ConsultationKids({}: Props) {
    const [terms, setTerms] = React.useState(false)
    const [ads, setAds] = React.useState(false)
    function handleClickButton() {
      alert('Redirect to Telegram')
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      alert('Send POST request')
      // reset native inputs
      e.currentTarget.reset()
      setTerms(false)
      setAds(false)
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
                  id="outlined-basic"
                  label="Parent's name"
                  variant="outlined"
                />

                <TextField
                  required
                  type='email'
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />

                <FormControlLabel
                  id='home_form_terms_text-kids'
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
        </div>
    </section>
  )
}

export default ConsultationKids