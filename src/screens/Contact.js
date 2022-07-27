import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <form className='contact-form'>
      <label>
        Name: 
        <input type="text" name="name" className='form-input' />
      </label>
      <label>
        Email:
        <input type="text" name="email" className='form-input'/>
      </label>
      <label>
        Message:
        <textarea></textarea>
      </label>
      </form>
  )
}

export default Contact