import React, { useEffect, useState } from 'react'
import './app.css'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
// import * as bootstrap from 'bootstrap'
import Card from './Card'
import NewCard from './NewCard'
import EditCard from './EditCard'

function App() {
  const [notes, setNotes] = useState()
  const cardColors = ['success', 'primary', 'warning', 'info', 'danger', 'dark']
  const [addNewNote, setAddNewNote] = useState(false)
  const notesCollectionRef = collection(db, '1')

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }

    getNotes()
  }, [])
  return (
    <div className='App'>
      <div className='header'>
        sanjay
      </div>
      <div className='card-grid'>
        {notes && notes.map((data) => {
          return (<Card color={cardColors[data.color]} title={data.title} time='' note={data.note}/>)
        })}
        {addNewNote && (
          <>
            <EditCard color={cardColors[Math.floor(Math.random() * 6)]} />
          </>
          )
        }
        <NewCard onClick={setAddNewNote}/>
      </div>
    </div>
  )
}

export default App;
