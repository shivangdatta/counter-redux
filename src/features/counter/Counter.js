import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement , increasebyamt , reset} from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch() // Corrected from `dispath` to `dispatch`

  const [amt, setAmt] = useState(0)

  const addme = Number(amt) || 0

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button> {/* Corrected from `dispath` to `dispatch` */}
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <label>
          Amount
          <input 
            type="text" 
            value={amt} 
            onChange={  (e) => {
              setAmt(e.target.value)
              console.log(amt)
            }}
            name='amount'
          />
          <button onClick={() => dispatch(increasebyamt(addme))}> submit </button>
        </label>
        <button onClick={() => dispatch(reset())}> reset </button>
      </div>
    </div>
  )
}

export default Counter
