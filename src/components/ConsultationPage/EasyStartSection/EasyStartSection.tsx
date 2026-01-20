import React from 'react'
import './EasyStartSection.css'

type Props = {}
function EasyStartSection({}: Props) {
    return (
        <div className="easy-start-section main">
                <h2 className='easy-start-header'>Easy Start</h2>
                <div className="easy-start-grid">
                        <div className="easy-start-card">
                                <div className="easy-start-card-number">1</div>
                                <h3 className="easy-start-card-title">Book Your Free Consultation</h3>
                                <p className="easy-start-card-description">Schedule a complimentary session with our language experts to discuss your goals and find the perfect learning path for you.</p>
                        </div> 
                        <div className="easy-start-card">
                                <div className="easy-start-card-number">2</div>
                                <h3 className="easy-start-card-title">Get Your Personalized Plan</h3>
                                <p className="easy-start-card-description">Receive a customized learning program tailored to your level, schedule, and objectives for effective language acquisition.</p>
                        </div> 
                        <div className="easy-start-card">
                                <div className="easy-start-card-number">3</div>
                                <h3 className="easy-start-card-title">Start Learning Today</h3>
                                <p className="easy-start-card-description">Begin your language journey with experienced instructors and proven methods that make learning engaging and successful.</p>
                        </div>   
                </div>
    </div>
  )
}

export default EasyStartSection