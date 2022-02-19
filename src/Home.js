import React, { useEffect, useState } from 'react'
import './home.css'
import { db } from './firebase-config'
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'
import Card from './Card'
import NewCard from './NewCard'
import EditCard from './EditCard'
import Login from './Login'

function Home() {
  const [notes, setNotes] = useState()
  const [isNoteUpdated, setIsNoteUpdated] = useState(false)
  const [addNewNote, setAddNewNote] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newNote, setNewNote] = useState('')

  const cardColors = ['success', 'primary', 'warning', 'info', 'danger', 'dark']

  const notesCollectionRef = collection(db, '1')

  const createNote = async () => {
    await addDoc(notesCollectionRef, {title: newTitle, note: newNote, color: Math.floor(Math.random() * 6)})
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
        sanjay
      </div>
      <div className='card-grid'>
        {notes && notes.map((data) => {
          return (
            <Card
              color={cardColors[data.color]}
              id={data.id}
              title={data.title}
              time='' note={data.note}
              onDelete={deleteNote}
            />
          )
        })}
        {addNewNote && (
          <>
            <EditCard
              color=''
              onTitleChange={setNewTitle}
              onNoteChange={setNewNote}
              onClick={createNote}
              onDelete={setAddNewNote}
            />
          </>
          )
        }
        <NewCard onClick={setAddNewNote}/>
      </div>
    </div>
  )
}

export default Home
