import React, { useState } from 'react'
import "./delete.css"

export default function Delete() {

  const [values, setValues] = useState("")

  function HandleChange(e){
    setValues(e.target.value)
  }

  function HandleSubmit(e){
      e.preventDefault()

      fetch("http://localhost:5000/card/"+values,{
          method : "DELETE"
      })
      .then((result) => {
          if(result.status === 404){
              alert("This card don't exist")
              return 
          }
          alert("Deleted successfuly !")
      })
      .catch((error) => {
          console.log(error)
      })

      setValues("")

  }

  return (
    <div className="delete">
       <form onSubmit={HandleSubmit} className="deleteForm">
          <div className="deleteField">
              <label className="delateFieldLabel" htmlFor="id">id :</label>
              <input className="deleteFieldInput" value={values} required  id="id" onChange={HandleChange}/>
          </div>
          <button className="deleteButton">Delete</button>
       </form>
    </div>
  )
}
