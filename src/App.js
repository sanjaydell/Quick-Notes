import React from 'react'
import './App.css'
// import * as bootstrap from 'bootstrap'
import Card from './Card'

function App() {
  const cardColors = ['success', 'primary', 'warning', 'info', 'danger', 'dark']
  return (
    <div className='App'>
      <div className='header'>
        sanjay
      </div>
      <div className='card-grid'>
        <Card color={cardColors[0]} />
        <Card color={cardColors[1]} />
        <Card color={cardColors[2]} />
        <Card color={cardColors[3]} />
        <Card color={cardColors[4]} />
        <Card color={cardColors[5]} />
        <Card />
      </div>
    </div>
  )
}

export default App;
