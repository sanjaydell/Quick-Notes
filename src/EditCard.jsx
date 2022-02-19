import React from 'react'

function EditCard({color}) {
  return (
    <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg-${color} mb-3`} style={{ width: '16rem', height: '20rem' }}>
      <div className='card-header'>Header</div>
      <div className='card-body'>
        <h5 className='card-title'>Primary card title</h5>
        <textarea className='card-text-area' placeholder='Enter a Note'/>
        {/* <input type='text' placeholder='' /> */}
        {/* <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
    </div>
  </div>
  )
}

export default EditCard
