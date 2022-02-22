import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import './Card.css'

const Card = ({color, title, time, note, id, onDelete }) => {
return(
  <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg-${color} mb-3`}>
      <div className='card-header'>
        {title}
        <div className='delete'>
          <DeleteIcon onClick={() => onDelete(id)} />
        </div>
      </div>
      <div className='card-body'>
        <p className='card-text'>{note}</p>
      </div>
    </div>
  </div>
)
}

export default Card