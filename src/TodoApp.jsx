import React, { useState } from 'react'


export default function TodoApp() {
const [data ,setdata] = useState("");
const [listdata, setlistdata] = useState([]);

function handlechange(e) {
  setdata(e.target.value);
  // console.log(data);
}
function add_activity(){
  setlistdata([...listdata,data]);
  // console.log(listdata);
  setdata("");
  
}
function handle_delete(i){
  const updatedlistdata = listdata.filter((elem, id)=>{
    return i!==id;
  })
  setlistdata(updatedlistdata)
}
  return (
   <>
      <div>
        <h2>ToDo App</h2>
        <div>
          <input type="text" placeholder='Enter Task' value={data} onChange={(e)=>handlechange(e)} id='data' />
          <button className='btn btn-primary' onClick={add_activity}>Add Task</button>
        </div>
        {
          listdata.map((task,i)=>{
            return( 
            <div className='d-flex' key={i}>
              <h3>{task}</h3>
              <button className='btn btn-danger'onClick={(i)=>handle_delete(i)}>Delete</button>
            </div>
            )
           
          })

        }

      </div>
   </>
  )
}
