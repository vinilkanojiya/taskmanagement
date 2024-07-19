import React, { useEffect, useState } from 'react'

function Tasklist() {

    

    const[allTask, setAllTask] = useState([]);
    const[taskOne, setTaskOne] = useState("");

    const handleChange = (e) =>{
        const data = e.target.value;
        setTaskOne(data);
        
    }

    const handleSubmit = (e) =>{

      setAllTask((prevValue)=>([...prevValue, [taskOne]])); 
      console.log("this is submit");
      console.log(allTask);     
      
    }


  return (
    <div className='container'>
       
        

        <div class="mb-4 mt-4">
            <label for="exampleInputEmail1" class="form-label">Write task at below text field</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
            <div id="emailHelp" className="form-text">Click on the Add Task CTA</div>
       </div>

        <button className='btn btn-primary' type="submit" onClick={handleSubmit}> Add task</button>


        {allTask.forEach((ele)=>(console.log(ele)))}



        
    </div>

  )
};

export default Tasklist