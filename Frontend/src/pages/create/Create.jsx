import React,{useState} from 'react'
import "./create.css"

export default function Create() {
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
        fetch("http://localhost:5000/card",{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(values)
        })
        .then((result) => {
            if(result.status === 500){
                alert("This card already exist !")
                return
            }
            alert("Saved successfuly !")
        })
        .catch(error => {
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
        <div className='createPage'>
            <form onSubmit={HandleSubmit}>           
                <div className="createField">
                    <label className="createFieldLabel" htmlFor="id">id</label>
                    <input className="createFieldInput" name="" required value={values.id} id="id"  onChange={HandleChange}/>
                </div>
                <div className="createField">
                    <label className="createFieldLabel" htmlFor="name">name</label>
                    <input className="createFieldInput" required id="name" value={values.name} onChange={HandleChange}/>
                </div>
                <div className="createField">
                    <label className="createFieldLabel" htmlFor="image">image</label>
                    <input className="createFieldInput" required id="image" value={values.image} onChange={HandleChange}/>
                </div>
                <div className="createField">
                    <label className="createFieldLabel" htmlFor="price">price</label>
                    <input className="createFieldInput" required  id="price" value={values.price} onChange={HandleChange}/>
                </div>
                <button className="createButton">Create</button>
            </form>
        </div>
  )
}
