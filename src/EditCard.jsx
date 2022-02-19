import React from 'react'
import './edit-card.css'

function EditCard({color, onTitleChange, onNoteChange, onClick}) {
  return (
    <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg-${color} mb-3`} style={{ width: '16rem', height: '20rem' }}>
    <div className='delete' ><button>Delete</button></div>
      <div className='edit-card-header'>
        <input type='text' placeholder='Add Title' onChange={(event) => onTitleChange(event.target.value) }/>
      </div>
      <div className='card-body'>
        <textarea className='card-text-area' placeholder='Enter a Note' onChange={(event) => onNoteChange(event.target.value)}/>
        <button onClick={() => onClick()}> ADD </button>
      </div>
    </div>
  </div>
  )
}

export default EditCard
