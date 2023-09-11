import React from 'react'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementby5 } from '../redux/Counter/counterAction'
// import { increment } from '../redux/Counter/counterActions';


const Counter = ()=> {
    
    const count =   useSelector((state) => state.count)
    const count2 =  useSelector((state) => state.count2)

    const dispatch = useDispatch()
    return (
    <div>
      Count: {count}
      <br />
      count 2 = {count2}
      <br />
      <button  onClick={()=> dispatch(increment())}>        Increment        </button>
      <button  onClick={()=> dispatch(decrement())}>        Decrement        </button>
      <button  onClick={()=> dispatch(incrementby5())}>     Increment By 5  </button>

      
    </div>
  )
}

export default Counter
