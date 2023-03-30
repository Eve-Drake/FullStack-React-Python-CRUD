import React from 'react'
import DeleteNotes from './DeleteNotes'
import UpdateNote from './UpdateNote'

const DisplayNotes = ({notes, setNotes}) => {
  return (
    <>
    <h1>Notes: </h1>
        {notes.map((note, index) => (
            <div key={index} className='note-grid'>
                <h3 className='note-grid-item'>{note.title}</h3>
                <div className='note-grid-item'><UpdateNote notes={notes} setNotes={setNotes} id={note.id} /></div> 
                <div className='note-grid-item'><DeleteNotes notes={notes} setNotes={setNotes} id={note.id}/></div>
            </div>
        ))}
    </>
  )
}

export default DisplayNotes