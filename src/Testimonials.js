import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='testimonial-section-wrapper'>
        <div className='work-section-top'>
            <div className="primary-subheading">Testimonials</div>
            <div className="primary-heading">What Do They Say</div>
            <p className="primary-text">"I’ve never experienced such fast and reliable food delivery! The meals are always fresh, and the ordering process is super easy. 
                Whether I’m craving a quick snack or a full-course meal, this service never disappoints. Highly recommended!"
                </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ ProfilePic } alt="" />
            <p>"I’ve never experienced such fast and reliable food delivery! The meals are always fresh, and the ordering process is super easy. 
            Whether I’m craving a quick snack or a full-course meal, this service never disappoints. Highly recommended!"
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonials