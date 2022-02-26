import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import './edit-card.css'
import { useForm } from 'react-hook-form'

function EditCard({color, onTitleChange, onNoteChange, onClick, onDelete}) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onAdd = () => {
    onClick()
  }
  return (
    <div style={{ padding: '2rem' }}>
      <div className={`card text-white bg-${color} mb-3`} style={{ paddingBottom: '0.5rem' }}>
        <form onSubmit={handleSubmit(onAdd)}>
        <div className='edit-card-header'>
          <input
            name='title'
            {...register('title',
              {required: {
                value: true,
                message: 'Enter a Title'
              },maxLength : {
                value: 20,
                message: 'Max-Limit 20 characters'
              }}
            )}
            type='text'
            placeholder='Add Title'
            onChange={(event) => onTitleChange(event.target.value) }
          />
          <div className='delete-edit-card'>
            <DeleteIcon onClick={() => onDelete(false)} />
          </div>
        </div>
        {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
        <div className='edit-card-body'>
          <textarea
            {...register('text',
              {required: {
                value: true,
                message: 'Enter a note'
              },maxLength : {
                value: 100,
                message: 'Max-Limit 100 characters'
              }}
            )}
            className='card-text-area'
            placeholder='Enter a Note'
            onChange={(event) => onNoteChange(event.target.value)}
          />
          {errors.text && <span style={{ color: 'red' }}>{errors.text.message}</span>}
          <br />
          <button type='submit'> ADD </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default EditCard
