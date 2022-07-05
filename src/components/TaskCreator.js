
import { useState } from 'react';
export const TaskCreator=(props)=> {

  

  const [newTaskname, setnewTaskname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createNewTask(newTaskname);
    //localStorage.setItem('task', newTaskname);
    setnewTaskname("");
  }


 
  
  return (
    <form onSubmit={handleSubmit} className="py-2 row">
      <div className='col-9'>
      <input className='form-control' type="text" value={newTaskname} placeholder='Ingrese texto' onChange={(e) => setnewTaskname(e.target.value)} />


      </div>
      <button className='btn btn-sm btn-secondary  col-3'  >Nueva tarea</button>
    </form>
  );

}