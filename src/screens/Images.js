import React from 'react'

const Images = () => {
  return (
    <div className="images_bg">
    <div className="images_container">
    
      <figure className='fade-in-image'> 
        <figcaption><h1>Newborn</h1></figcaption>
        <img className="category_images fade-in-image" src="https://www.jcpportraits.com/sites/jcpportraits.com/files/portrait/2105/1080x1080-action-block-3.jpg" width="100%" alt="newborn baby"/>
      </figure>

      <figure className='fade-in-image'>
        <figcaption><h1>Family</h1></figcaption>
        <img className="category_images fade-in-image" src="https://content.api.news/v3/images/bin/7f24e155a1dcb9aac9c16b5c2942d779?width=1024" width="100%" alt="family portrait"/>
      </figure>

      <figure className='fade-in-image'>
        <figcaption><h1>Fine Art</h1></figcaption>
        <img className="category_images fade-in-image" src="https://www.peerspace.com/resources/wp-content/uploads/best-sacramento-fine-art-photographers.jpg" width="100%" alt="fine art"/>
      </figure>

      <figure className='fade-in-image'>
        <figcaption><h1>Landscapes</h1></figcaption>
        <img className="category_images fade-in-image" src="https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg" width="100%" alt="landscape"/>
      </figure>

      <figure className='fade-in-image'>
        <figcaption><h1>Black and White</h1></figcaption>
        <img className="category_images " src="https://cdnfl01.viewbug.com/media/mediafiles/2016/04/08/65322170_large.jpg" width ="100%" alt="black and white"/>
      </figure>
    </div>
    </div>
  )
}

export default Images