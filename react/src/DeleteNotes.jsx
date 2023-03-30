import React from 'react'

const DeleteNotes = ({notes, setNotes, id}) => {

    const deleteNote =()=>{
        setNotes(notes.filter(el => el.id !== id))
    }
  return (
    <button onClick={deleteNote} className='delete-btn'>X</button>
  )
}

export default DeleteNotes