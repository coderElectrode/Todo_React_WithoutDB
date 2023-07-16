import React, { useState } from 'react'
import './Task.css'
import { FaEdit,FaCheckCircle,FaTrashAlt } from 'react-icons/fa';



export default function NewTask() {
   const [todo, setTodo]=useState([ ]);
   const [newTask,setNewtask]=useState('');
   const [updateData, setupdateData]=useState('');

  const [setdate,getDate]=useState();

//------------------------------------------------New Task addition-----------------------
const addTask=()=>{   
 if(newTask){
  var id=todo.length;
  let newEntry={id:id,Task:newTask,Status:false}
  setTodo([...todo,newEntry]);
  setNewtask('');
  

 }
}
//----------------------------------------------------Delete Task-----------------------
const deleteTask=(id)=>{
  let newTask=todo.filter(task=>task.id!==id);
  setTodo(newTask);
}

//===----------------------------------------------------Edit Task--------------------------

const markDone=(id)=>{
  let newTask=todo.map(ele=>{
    if(ele.id==id)
    {
      return({...ele,Status:!ele.Status})
    }
    return ele;
   
  })
  setTodo(newTask);
}

const changeTask=(e)=>{
  let newEntry={ id:updateData.id, Task:e.target.value ,status:updateData.status }
setupdateData(newEntry);
}


const updateTask=()=>{
  let filteRecord=[...todo].filter(task=>task.id!==updateData.id);
  let updatedObject=[...filteRecord,updateData];
  setTodo(updatedObject);
  console.log("TOdo:",todo);
  setupdateData('');
}

const cancleUpdate=()=>{
  setupdateData('');
}

const compareDate=(e)=>{
  var tasDa=e.target.value;
  getDate(tasDa);
  var date=new Date();
  console.log(date);
  console.log(setdate);

  
}





  return (
    <div className='Maindiv'>
      <h1> ToDo App</h1>
      {
        updateData && updateData?(<>
        <div className='update'>
        <input type="text"  value={ updateData.title} name="" id="" onChange={(e)=>changeTask(e)}/>
        <button onClick={updateTask}>Update</button>
        <button onClick={cancleUpdate}>cancle</button>
        </div>
        </>):(
          <>
           <div className="input"> 
           <input  className='newTaskName'type="text" value={newTask} name="" id="" onChange={(e)=>setNewtask(e.target.value)}/>
            <button className="addTask" onClick={addTask} >Add Task</button>
        </div>
          </>
        )
      }
         
       
        {
          todo && todo.length? '': "No Task......"
        }
       <div className="tasklist">
           {    todo && todo.sort((a,b)=>a.id>b.id?1:-1)     
               .map((ele,i)=>{
                console.log("Enter:",todo)
                return( 
                 
                  < React.Fragment key={ele.id}  >
                    <div className='taskBg' > 
                    <div className={ele.Status ? 'done': ''} > 
                <span className='taskNumber'>{i+1 }</span>
                <span className="tasktext">{ele.Task}</span>
                {
                  ele.Status? null:(
                    <span className='editbutton'><FaEdit onClick={ ()=> 
                      setupdateData({ id:ele.id,
                                       title:ele.Task,
                                       status:ele.Status?true:false})
                        } /></span>

                  )

                }
                
                <span className='checkbutton' onClick={(e)=>markDone(ele.id)}> <FaCheckCircle /></span>
                <span className='deletebutton' onClick={()=>deleteTask(ele.id)}> < FaTrashAlt/></span>
                {/* <span className='date' onChange={(e)=>compareDate(e)}><input type="date" name="" id="" /></span> */}

                </div>
                    </div>
                
                </React.Fragment>
                
                );
          
               })
           }
     
             
        </div>
        
    </div>
  )
}
