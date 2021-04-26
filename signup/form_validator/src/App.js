import React,{useState,useEffect} from 'react'
import axios from "axios";
export default function App() {

  const [foodName,setFoodName]=useState("");
  const [days,setDays]=useState(0);
  const [foodList,setFoodList]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:27017/api/veg')
    .then((response)=>{
        setFoodList(response.data)
    })
  },[])

  const addToList =()=>{
    axios.post('http://localhost:27017/api/signup',{foodName:foodName,days:days})

  }
  return (
    <div>
      <h1>CRUD OPERATIONS</h1>
      <label>FoodName</label>
      <input type="text"  onChange={(event)=>{setFoodName(event.target.value)}} placeholder=""/>
      <label>FoodDays</label>
      <input type="number" onChange={(event)=>{setDays(event.target.value)}} placeholder=""/>
      <button onClick={addToList}>Add To List</button>

      <h1>Food List</h1>
      {foodList.map((val,key)=>{
        return <div key={key}>
          <h3>{val.foodName}</h3>
          <h3>{val.daysSinceIAte}</h3>
          </div>
      })}
    </div>
  )
}
