import {useState} from 'react';

export default function Home() {
const [title , setTitle] = useState("");
const [desc , setDesc] = useState("");
const [list , setList] = useState([]);

const submitHandler = (e) => {
       e.preventDefault()
     setList([...list , {title , desc}])
     
      console.log(title)
      console.log(desc)
     
      setTitle("")
      setDesc("")
}

const deleteTask = (i) => {
  const prevTask = [...list]
  prevTask.splice(i,1)
  setList(prevTask)
  }

let noTask = <h2 className='text-white text-2xl text-center p-2'>No Task avilable </h2>

if(list.length>0){
noTask = list.map((elem,i) => {
  return(
   <li key={i}>
    <div className='bg-zinc-700 flex justify-between items-center m-4 p-2 rounded hover:scale-105' >
      <div className="flex flex-col" >
      <span className='ml-3 text-yellow-400 text-xl py'>Title : {elem.title} </span>
      <span className='ml-3 text-white text-2xl font-light py'>Description : {elem.desc} </span>
      </div>
      <button onClick={() => deleteTask(i)} className='bg-red-400 text-white text-xl px-4 h-9 rounded hover:scale-110'>Delete</button>
    </div>
   </li>
  )
})
}



  return (
    <>

    <div className='text-center mt-5' >
    <h1 className="text-white text-5xl">My Todo </h1>
  </div>

<div className="mt-8 flex items-center justify-center flex-col shrink md:flex-row">
  <form className='flex items-center justify-center flex-col md:flex-row'>
<input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="mt-3 text-white py-2 px-2 rounded bg-zinc-600 outline-none text-lg" placeholder="Title " />
<input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className=" text-white py-2 px-2 ml-4 mt-3 rounded bg-zinc-600 outline-none w-[280px] text-lg" placeholder="Description" />
<button onClick={submitHandler} className="bg-green-500 text-white font-normal py-2 px-5 ml-6 mt-3 rounded hover:scale-110"> Add </button>
  </form>  
</div>

<div className='flex justify-center items-center'>
<div className='bg-zinc-800 mt-14 w-[650px] rounded'>
{noTask}
</div>
</div>

 </>
  )
}


