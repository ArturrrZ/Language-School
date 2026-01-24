import './WhatWeTeachSection.css'

type Props = {}

function WhatWeTeachSection({}: Props) {
  return (
    <div className="what-we-teach-section main">
        <h2 className='what-we-teach-header'>What we teach</h2>
        <div className="what-we-teach-grid">
            <div className="what-we-teach-card">
                <div className="card-number">1</div>
                <h3 className="card-title">Speaking English</h3>
                <p className="card-description">We develop communication skills and the ability to express thoughts so that children can confidently communicate in real situations.</p>
            </div> 
            <div className="what-we-teach-card">
                <div className="card-number">2</div>
                <h3 className="card-title">Writing and Reading</h3>
                <p className="card-description">We teach literacy, reading and writing in English so that children can freely express their thoughts in written form.</p>
            </div> 
            <div className="what-we-teach-card">
                <div className="card-number">3</div>
                <h3 className="card-title">Listening</h3>
                <p className="card-description">We develop listening skills so that children can understand spoken English in various situations.</p>
            </div> 
            <div className="what-we-teach-card">
                <div className="card-number">4</div>
                <h3 className="card-title">Grammar</h3>
                <p className="card-description">We study grammar rules and expand vocabulary so that children can correctly construct sentences and express their thoughts.</p>
            </div>   
        </div>
    </div>
  )
}

export default WhatWeTeachSection