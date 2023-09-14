import React, { useState } from "react";

function Simpleform() {
  // const input = {name:"",surname:"",number:""};

  const [data, setdata] = useState({ name: "", surname: "", number: "" });

  function handlechange(e) {
    setdata({ ...data, [e.target.id]: e.target.value });
    console.log(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // document.getElementById("print").innerHTML = data.name;
    if (!data.name || !data.surname ||  !data.number ) {
        alert("all fields are compulsory..")  
    }
    else{
         document.getElementById("print").innerHTML = data.name;
    }
  }

  return (
    <div>
      <form style={{ marginTop: 30 }}>
        <input type="text" value={data.name} onChange={handlechange} id="name" placeholder="Enter name" />
        <br />
      
        <input type="text" value={data.surname} onChange={handlechange}  id="surname" placeholder="Enter Surname"  />
        <br />
      
        <input  type="number" value={data.number} onChange={(e) => handlechange(e)} id="number" placeholder="Contact Number" />
        <br />
        
        <button onClick={(e)=>handleSubmit(e)}>..Submit..</button>
      </form>
      <h1 id="print">hiiii....</h1>
    </div>
  );
}
export default Simpleform;
