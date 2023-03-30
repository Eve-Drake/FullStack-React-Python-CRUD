import React, { useState } from 'react'

const UpdateNote = ({notes, setNotes, id}) => {
    const [editActive, setEditActive] = useState(false)
    const [newNoteTitle, setNewNoteTitle] = useState('')

    const startEdit =()=>{
        setEditActive(!editActive)
    }

    const editNote = () =>{
        setNotes(notes.map(el => {
            if(el.id === id){
                return {...el, title: newNoteTitle}
            }
            else{
                return el
            }
        })
        )
        setEditActive(false)
        setNewNoteTitle('')
    }
  return (
    <>
        <div className={editActive? 'edit-form' : 'hidden'}>
            <input 
            type='text'
            onChange={(e)=>setNewNoteTitle(e.target.value)}
            />
            <p>{newNoteTitle}</p>
            <button onClick={editNote}>Save Edit</button> 
        </div>
        <button onClick={startEdit}>{editActive? 'Cancel' : 'Edit'}</button>
    </>
  )
}

export default UpdateNote