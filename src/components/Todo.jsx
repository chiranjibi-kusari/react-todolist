import React, { useState } from 'react'

const Todo = () => {
    const [title,settitle]=useState("")
    const[desc,setdesc]=useState("")
    const [maintask,setmaintask]=useState([])

    const submithandler=(e)=>{
        e.preventDefault()
        settitle("")
        setdesc("")
        setmaintask([...maintask,{title,desc}]);
    }
    const deleteHandler=(i)=>{
        let copytask=[...maintask]
        copytask.splice(i,1)
        setmaintask(copytask)
       
    }
    let renderTask=<h2 className=' bg-slate-400 w-fit rounded-lg p-8'>No task available</h2>
    if(maintask.length>0){
     renderTask=maintask.map((t,i)=>{
        return (<li  className='bg-slate-400 w-fit rounded-lg p-8 m-5 flex'>
        <div>
            <h1 className=' text-3xl'>{t.title}</h1>
            <h5>{t.desc}</h5>
        </div>
        <button className='flex bg-red-400 rounded-lg h-7 w-14 m-2 pl-1 text-center' onClick={()=>{
            deleteHandler(i)
        }}>Delete</button>
        </li>);

    })
 
    }

  return (
   <>
   <h1 className=' bg-black text-white p-5 text-center font-bold text-5xl'>Todo List</h1>

   <form onSubmit={submithandler}>
    <input type="text"
     className=' border-2 border-black m-8 px-4 py-2 text-2xl'
      placeholder='Enter Title here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
       />
    <input type="text" 
    className=' border-2 border-black m-8 px-4 py-2 text-2xl' 
    placeholder='Enter Description here'
    value={desc}
    onChange={(e)=>{
        setdesc(e.target.value)
    }}
     />
    <button className=' bg-black text-white px-4 py-3 text-2xl font-bold rounded-lg m-5'
   
    >Add Task</button>
   </form>
   <hr />
   <div className='p-8  bg-slate-200'>
    <ul className='flex'>
     
        {renderTask }
    </ul>
   </div>
   </>
  )
}
 
export default Todo