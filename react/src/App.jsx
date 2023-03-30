import { useState } from 'react'
import AddNotes from './AddNotes'
import DisplayNotes from './DisplayNotes'
import './index.css'

function App() {
  const [notes, setNotes] = useState([{id: 0, title: 'This is a Note'}, {id: 1, title: 'This is Also a Note'}])

  return (
    <>
      <AddNotes setNotes={setNotes} notes={notes}/>
      <DisplayNotes notes={notes} setNotes={setNotes}/>
    </>
  )
}

export default App
