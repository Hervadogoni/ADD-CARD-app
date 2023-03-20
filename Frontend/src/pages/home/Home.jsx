import React, {useEffect, useState} from 'react'
import HomeElement from '../../components/homeElement/HomeElement'
import "./home.css"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch("http://localhost:5000/card")
      .then((res) => {
          return res.json()
      })
      .then((result) => {
          setData(result)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])
  return (
    <div className="homePage">
        {data.map((child) => (
          <HomeElement key={child.id} {...child} />
        ))}
    </div>
  )
}
