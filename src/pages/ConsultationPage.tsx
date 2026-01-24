import FormSection from '../components/ConsultationPage/Form/FormSection'
import GreetingConsultation from '../components/ConsultationPage/GreetingConsultation/GreetingConsultation'
import EasyStartSection from '../components/ConsultationPage/EasyStartSection/EasyStartSection'
import { Box } from '@mui/material'

type Props = {}

function ConsultationPage({}: Props) {
  return (
    <>
      <Box className="main" sx={{
        marginTop: '50px',
        display:{
          xs: 'grid'
        },
        gridTemplateColumns:{
          md: '2fr 1fr',
        },
        gap: '0px',
      }}>
      <GreetingConsultation />
      <FormSection />
      </Box>
      <EasyStartSection />
    </>
  )
}

export default ConsultationPage