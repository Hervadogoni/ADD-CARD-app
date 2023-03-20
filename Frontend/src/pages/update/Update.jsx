import React,{useState} from 'react'
import "./update.css"


export default function Update() {
    const [values, setValues] = useState({
        id:"",
        name:"",
        price:"",
        image:""
    })

    function HandleChange(e){
        setValues({...values, [e.target.id] : e.target.value})
    }

    function HandleSubmit(e){
        e.preventDefault()
       
        fetch("http://localhost:5000/card/"+values.id,{
            method: "PUT",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(values)
        })
        .then((result) => {
            if(result.status === 404){
                alert("This card don't exist")
                return 
            }
            alert("Update successfuly !")
        })
        .catch((error) => {
            console.log(error)
        })

        setValues({
            id:"",
            name:"",
            price:"",
            image:""
        })
    }
    return (
        <div className='updatePage'>
            <form className="updateForm" onSubmit={HandleSubmit}>           
                <div className="updateField">
                    <label className="updateFieldLabel" htmlFor="id">id</label>
                    <input className="updateFieldInput" required value={values.id} id="id"  onChange={HandleChange}/>
                </div>
                <div className="updateField">
                    <label className="updateFieldLabel" htmlFor="name">name</label>
                    <input className="updateFieldInput" required id="name" value={values.name} onChange={HandleChange}/>
                </div>
                <div className="updateField">
                    <label className="updateFieldLabel" htmlFor="image">image</label>
                    <input className="updateFieldInput"  required id="image" value={values.image} onChange={HandleChange}/>
                </div>
                <div className="updateField">
                    <label className="updateFieldLabel" htmlFor="price">price</label>
                    <input className="updateFieldInput" required id="price" value={values.price} onChange={HandleChange}/>
                </div>
                <button className="updateButton">Update</button>
            </form>
        </div>
  )
}
