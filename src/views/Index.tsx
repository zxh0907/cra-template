import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@/store'

// https://www.newline.co/@satansdeer/using-react-redux-with-typescript--6ea90757
const Index: React.FC = () => {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch<Dispatch>()

  return (
    <div>
      <h1>Index Page</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 120 }}>
          <h3>Dolphins</h3>
          <h1>{count}</h1>
          <button type="button" onClick={() => dispatch.count.increment()}>
            +1
          </button>
          <button type="button" onClick={() => dispatch.count.increment(3)}>
            +3
          </button>
          <button type="button" onClick={() => dispatch.count.incrementAsync()}>
            Async +1
          </button>
          <button type="button" onClick={() => dispatch({ type: 'count/incrementAsync', payload: 2 })}>
            Async +2
          </button>
        </div>
        <p>Using Rematch Models</p>
      </div>
    </div>
  )
}

export default Index
