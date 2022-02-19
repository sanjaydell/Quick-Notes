import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './edit-card.css'

function EditCard({color, onTitleChange, onNoteChange, onClick, onDelete}) {
  return (
    <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg-${color} mb-3`}>
      <div className='edit-card-header'>
        <input type='text' placeholder='Add Title' onChange={(event) => onTitleChange(event.target.value) }/>
        <div className='delete-edit-card'>
          <DeleteIcon style={{ color: 'black' }} onClick={() => onDelete(false)} />
        </div>
      </div>
      <div className='edit-card-body'>
        <textarea className='card-text-area' placeholder='Enter a Note' onChange={(event) => onNoteChange(event.target.value)}/>
        <button onClick={() => onClick()}> ADD </button>
      </div>
    </div>
  </div>
  )
}

export default EditCard
