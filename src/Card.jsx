import React from 'react'
import './card.css'

const Card = ({color, title, time, note, id, onDelete }) => {
return(
  <div style={{ padding: '2rem' }}>
    <div className={`card text-white bg-${color} mb-3`} style={{ width: '16rem', height: '20rem' }}>
    <div className='delete' ><button onClick={() => onDelete(id)}>Delete</button></div>
      <div className='card-header'>{title}</div>
      <div className='card-body'>
        <h5 className='card-title'>{time}</h5>
        <p className='card-text'>{note}</p>
      </div>
    </div>
  </div>
)
}

export default Card