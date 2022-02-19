import React from 'react'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import './new-card.css'

function NewCard({ onClick }) {
  return (
    <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg- mb-3`}>
      <div className='new-card-header'>Add a note quickly</div>
      <div className='card-body'>
        <div className='card-button' >
          <AddCircleOutlineRoundedIcon style={{ fontSize: '80', color: 'blue' }} onClick={() => onClick(true)}/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewCard
