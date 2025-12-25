import React from 'react'
import './ReviewSection.css'

type Props = {}
const reviews = [
  {id:1, name: 'John Doe', stars:'★★★★★',review: 'Great platform! Helped me improve my skills significantly.'},
  {id:2, name: 'Sarah Johnson', stars:'★★★★★', review: 'The interactive lessons and practical exercises made learning enjoyable and effective. I was able to apply what I learned immediately in my projects.'},
  {id:3, name: 'Michael Chen', stars:'★★★★☆', review: 'Excellent resource for students at all levels. The structured curriculum and supportive community helped me stay motivated throughout my learning journey.'},
  {id:4, name: 'Emily Rodriguez', stars:'★★★★★', review: 'As a complete beginner, I found the step-by-step approach incredibly helpful. The instructors break down complex concepts into digestible pieces that are easy to understand.'},
  {id:5, name: 'David Thompson', stars:'★★★★★', review: 'The quality of content is outstanding. Every course is well-organized and the practice problems really challenge you to think critically and solve real-world problems.'},
  {id:6, name: 'Lisa Park', stars:'★★★★☆', review: 'I appreciate the flexibility this platform offers. Being able to learn at my own pace while having access to mentors when I need help has been invaluable for my growth.'},
  {id:7, name: 'James Wilson', stars:'★★★★★', review: 'This platform transformed my understanding of programming. The hands-on projects and code reviews from experienced developers helped me build confidence in my abilities.'},
  {id:8, name: 'Amanda Foster', stars:'★★★★★', review: 'The community aspect is what sets this apart. Being able to collaborate with other learners and get feedback on my work accelerated my progress tremendously.'},
  {id:9, name: 'Ryan Martinez', stars:'★★★★☆', review: 'Great value for the price. The comprehensive curriculum covers everything from basics to advanced topics, making it a one-stop solution for skill development.'},
  {id:10, name: 'Sophia Anderson', stars:'★★★★★', review: 'I went from knowing nothing about coding to building my own projects in just a few months. The clear explanations and supportive environment made all the difference.'}

]
function ReviewSection({}: Props) {
  return (
    <section className='review-section'>
      <h2 className="sH ">Our Reviews</h2>
      <div className="reviews">
        {reviews.map((rev, idx)=>{return (
          <div className='review' key={rev.id}>
            <div className="review-left">
              {rev.name[0]}
            </div>
            <div className="review-main">
              <h6 className="review-name">{rev.name}</h6>
              <span className="review-stars">{rev.stars}</span>
              <p className="review-text">{rev.review}</p>
            </div>
          </div>
      )})}  
      </div>  
    </section>
  )
}

export default ReviewSection