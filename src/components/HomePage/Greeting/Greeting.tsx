import React from 'react'
import './Greeting.css'
import newYearMainImage from '../../../assets/new-year-main-picture.avif'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TelegramIcon from '@mui/icons-material/Telegram'

type Props = {}

function Greeting({}: Props) {
  const [terms, setTerms] = React.useState(false)
  const [ads, setAds] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert('Send POST request')

    // reset native inputs
    e.currentTarget.reset()

    // reset controlled checkboxes
    setTerms(false)
    setAds(false)
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
                />

                <TextField
                  required
                  type='email'
                  id="home-email"
                  name="email"
                  label="Email"
                  autoComplete="email"
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

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Greeting
