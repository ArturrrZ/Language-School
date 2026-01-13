import React from 'react'
import './ReviewSection.css'
import Review from '../Review/Review';
import type{ ReviewType } from '../../types.ts';
// either import ReviewType from types or define it here
// 
// export type ReviewType = {
//   id: number;
//   name: string;
//   stars: string;
//   review: string;
//   face?: string | null;
// }

type Props = {
  reviews: ReviewType[];
  header?: string;
}
function ReviewSection({reviews, header}: Props) {
  const headerText = header || 'Our Reviews';
  return (
    <section className='review-section'>
      <h2 className="sH review-header">{headerText}</h2>
      <div className="reviews">
        {/* {reviews.map((rev, idx)=>{return (
          <div className='review old' key={rev.id}>
            <div className="review-left">
              {rev.name[0]}
            </div>
            <div className="review-main">
              <h6 className="review-name">{rev.name}</h6>
              <span className="review-stars">{rev.stars}</span>
              <p className="review-text">{rev.review}</p>
            </div>
          </div>
      )})}   */}
        {reviews.map((rev)=>(
          <Review key={rev.id} name={rev.name} stars={rev.stars} text={rev.review} face={rev.face} />
        ))}
      </div>  
    </section>
  )
}

export default ReviewSection