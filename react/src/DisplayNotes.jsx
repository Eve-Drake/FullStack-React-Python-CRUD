import React from 'react'
import DeleteNotes from './DeleteNotes'
import UpdateNote from './UpdateNote'

const DisplayNotes = ({notes, setNotes}) => {
  return (
    <>
    <h1>Notes: </h1>
        {notes.map((note, index) => (
            <div key={index} className='note'>
                {note.title}
                <DeleteNotes notes={notes} setNotes={setNotes}/>
                <UpdateNote notes={notes} setNotes={setNotes}/>
            </div>
        ))}
    </>
  )
}

export default DisplayNotes