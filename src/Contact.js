import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <div className="primary-subheading">Contact</div>
        <h1 className='primary-heading'>Have A Queston In Mind?</h1>
        <h1 className='primar-heading'>Let Us Help You!</h1>
        <div className='contact-form-container'>
            <input type='text ' placeholder='Youremail@gmail.com'/>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact