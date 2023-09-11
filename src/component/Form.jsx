import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submitForm } from '../redux/form/formAction'

const Form = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    dispatch(submitForm({ name, age }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* Use onSubmit event */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='name'
        />
        
        <input 
          value={age}
          type="number"
          onChange={(e) => setAge(e.target.value)}
          placeholder='age'
        />
        <button type="submit">Submit</button> {/* Use type="submit" */}
      </form>
    </div>
  )
}

export default Form
