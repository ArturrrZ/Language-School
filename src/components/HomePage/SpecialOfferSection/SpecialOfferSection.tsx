import './SpecialOfferSection.css'
import type { ApplyType } from '../../../types'
import pointer from '../../../assets/pointer.avif'

type Props = {
    setApply: (applyValue: ApplyType)=>void,
}

function SpecialOfferSection({setApply}: Props) {
  return (
    <section className='special-offer main'>
        <img src={pointer} alt='pointer' className='special-offer-pointer'/>
        <div className="special-offer-main">
            <span className='special-offer-header2'>special offer</span>
            <span className='special-offer-header sH'>First lesson for $4.99</span>
            <div className='special-offer-li'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 15"><path fill="#ffffffff" d="m8.193 0 2.026 5.474L15.693 7.5 10.22 9.526 8.193 15 6.168 9.526.693 7.5l5.475-2.026z"></path></svg>
                <span>    We will determine your level and goals</span>   
            </div>
            <div className='special-offer-li'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 15"><path fill="#ffffffff" d="m8.193 0 2.026 5.474L15.693 7.5 10.22 9.526 8.193 15 6.168 9.526.693 7.5l5.475-2.026z"></path></svg>
                <span>    We will create a personalized learning path with an AI assistant</span>   
            </div>
            <div className='special-offer-li'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 16 15"><path fill="#ffffffff" d="m8.193 0 2.026 5.474L15.693 7.5 10.22 9.526 8.193 15 6.168 9.526.693 7.5l5.475-2.026z"></path></svg>
                <span>    You will talk to a teacher about topics that interest you</span>   
            </div>
            <button className='special-offer-purchase' onClick={()=>{setApply({display:true, title:'Special Offer', text:'First lesson for $4.99. Try it out!'})}}>
                Make a purchase
            </button>
        </div>
    </section>
  )
}

export default SpecialOfferSection