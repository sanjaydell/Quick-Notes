import React, { useState } from 'react'
import './app.css'
// import * as bootstrap from 'bootstrap'
import Card from './Card'
import NewCard from './NewCard'

function App() {
  const cardColors = ['success', 'primary', 'warning', 'info', 'danger', 'dark']
  const [addNewNote, setAddNewNote] = useState(false)
  return (
    <div className='App'>
      <div className='header'>
        sanjay
      </div>
      <div className='card-grid'>
        {addNewNote && (
          <>
            <Card color={cardColors[0]} />
            <Card color={cardColors[1]} />
            <Card color={cardColors[2]} />
            <Card color={cardColors[3]} />
            <Card color={cardColors[4]} />
            <Card color={cardColors[5]} />
          </>
          )
        }
        <NewCard onClick={setAddNewNote}/>
      </div>
    </div>
  )
}

export default App;
