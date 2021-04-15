import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NotesState } from '@/store/notesReducer'

interface NewNoteInputProps {
  addNote(note: string): void
}
// https://www.newline.co/@satansdeer/using-react-redux-with-typescript--6ea90757
const Index: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const notes = useSelector<NotesState, NotesState['notes']>((state) => state.notes)
  const [note, setNote] = useState('')
  const dispatch = useDispatch()
  const onAddNoteClick = () => {
    dispatch({ type: 'ADD_NOTE', payload: note })
    // addNote(note)
    setNote('')
  }

  useEffect(() => {
    function fetchSecretSauce() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('noteddddddd')
        }, 1000)
      })
      // return fetch('https://www.google.com/search?q=secret+sauce')
    }
  
    function asnycGetNotes() {
      // Invert control!
      // Return a function that accepts `dispatch` so we can dispatch later.
      // Thunk middleware knows how to turn thunk async actions into actions.
      return function () {
        return fetchSecretSauce().then((res) => ({
          type: 'ADD_NOTE',
          payload: res,
        }))
      }
    }
    console.log(asnycGetNotes())
    // dispatch(asnycGetNotes())
  }, [dispatch])
  console.log(notes)

  return (
    <div>
      <h1>Index Page</h1>
      <div>
        <input
          type="text"
          name="note"
          placeholder="Note"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setNote(e.target.value)
          }}
        />
        <button type="button" onClick={onAddNoteClick}>
          Add note
        </button>
        {note}
      </div>
      <hr />
      <ul>
        <li>Some note</li>
      </ul>
    </div>
  )
}

export default Index
