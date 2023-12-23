
import { useEffect, useState } from 'react'
import './App.css'
import CreateNote from './components/CreateNote'
import AllNotes from './components/AllNotes';
import Search from './components/Search';

function App() {
  const [note, setNote] = useState({
    title:'',
    content:''
  })
  const [addItems, setAddItems] = useState([]);
  // const [show,setShow] =useState(false)
  const [showInput, setShowInput] = useState(false);
  
  return (
    <>
      <div className="color">
        <Search addItems={addItems} setAddItems={setAddItems } />
      <CreateNote note={note} setNote={setNote} setAddItems={setAddItems} addItems={addItems} showInput={showInput} setShowInput={setShowInput} />
        <AllNotes addItems={addItems} setAddItems={setAddItems} />
        </div>
    </>
  )
}

export default App
