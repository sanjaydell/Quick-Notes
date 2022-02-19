import React from 'react'
import './new-card.css'

function NewCard({ onClick }) {
  return (
    <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg- mb-3`} style={{ width: '16rem', height: '20rem' }}>
      <div className='new-card-header'>Add a note quickly</div>
      <div className='card-body'>
        <h5 className='card-title'>Add a note quickly</h5>
          <button
            className='card-button'
            onClick={() => onClick(true) }
          >
          Add notes
          </button>
      </div>
    </div>
  </div>
  )
}

export default NewCard
