import React, { useEffect, useState } from 'react'
import './home.css'
import { db } from './firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import Card from './Card'
import NewCard from './NewCard'
import EditCard from './EditCard'

function Home({onLogoutClick, user}) {
  const [notes, setNotes] = useState()
  const [isNoteUpdated, setIsNoteUpdated] = useState(false)
  const [addNewNote, setAddNewNote] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newNote, setNewNote] = useState('')
  const [colorCode, setColorCode] = useState(0)

  const cardColors = ['success', 'primary', 'warning', 'info', 'danger', 'dark']

  const notesCollectionRef = collection(db, '1')

  const addNote = () => {
    setColorCode(colorCode + 1)
    setAddNewNote(true)
  }

  const createNote = async () => {
    await addDoc(notesCollectionRef, {title: newTitle, email: user.email, note: newNote, color: colorCode % 6})
    setAddNewNote(false)
    setIsNoteUpdated(!isNoteUpdated)
  }

  const deleteNote = async (id) => {
    const noteDoc = doc(db, '1', id)
    await deleteDoc(noteDoc)
    setIsNoteUpdated(!isNoteUpdated)
  }

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef)
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    }
    getNotes()
  }, [addNewNote, isNoteUpdated])

  return (
    <div className='App'>
      <div className='header'>
        <div className='header-right'>
          <img src='QuickNote.png' alt='' />
        </div>
        <div className='header-left'>
          <h1>{user.email}</h1>
          <div className='logout'>
            <button onClick={() => onLogoutClick() }> Log-out </button>
          </div>
        </div>
      </div>
      <div className='card-grid'>
        {notes && notes.map((data) => {
          return (
            <>
            {data.email === user.email &&
            <Card
              color={cardColors[data.color]}
              id={data.id}
              title={data.title}
              time='' note={data.note}
              onDelete={deleteNote}
            />
            }
            </>
          )
        })}
        {addNewNote && (
          <>
            <EditCard
              color={cardColors[colorCode % 6]}
              onTitleChange={setNewTitle}
              onNoteChange={setNewNote}
              onClick={createNote}
              onDelete={setAddNewNote}
            />
          </>
          )
        }
        <NewCard onClick={addNote}/>
      </div>
    </div>
  )
}

export default Home
