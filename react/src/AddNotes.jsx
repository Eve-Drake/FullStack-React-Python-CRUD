import React, { useState } from 'react'

const AddNotes = ({setNotes, notes}) => {
    const [adding, setAdding] = useState(false)
    const [noteTitle, setNoteTitle] = useState('')

    const addNewNote = () =>{
        setNotes(
            [...notes, {title: noteTitle, id: Math.floor(Math.random() * 1000)}]
        )
        setNoteTitle('')
        setAdding(false)
    }
  return (
    <>
    <div className={adding? 'note-adding-form' : 'hidden'}>
        <input onChange={(e) => setNoteTitle(e.target.value)}/>
        <button onClick={addNewNote}>Add Note</button> 
    </div>

    <button onClick={()=>setAdding(!adding)}>{adding? 'Close': 'Add New Note'}</button>

    </>
  )
}

export default AddNotes