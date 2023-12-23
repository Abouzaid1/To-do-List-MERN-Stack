import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TaskInput() {
	const [text,setText] = useState("")
	const [msg,setMsg] = useState()
	const {id} = useParams()
	
	const getTask = (e)=>{
		setText(e.target.value)
	}
	const clickHandler = ()=>{
		setMsg();
		fetch('http://localhost:3000/api/newTask/', {
			method: 'POST',
  			headers: {
    		'Content-Type': 'application/json',
		},
  			body: JSON.stringify({task:text,checked:false,userId: id})
		})
		.then(console.log(id))
		.catch(err=>console.log(err))
		.then((response) => response.json())
		.then((data) => {
			setMsg(data);
    	})
		setText("")
	}

  return (
	<>
		<div className='w-full mt-10'>
			<div className='m-auto w-[70%] rounded-[20px] border-[black] border-[1px] p-7 flex justify-between items-center'>
				<input onChange={(e)=>getTask(e)} value={text} type="text" className='w-full  outline-none' ></input>
				<button onClick={clickHandler} className='rounded-[10px] border-[black] border-[1px] w-[50px] h-[50px]'>
					<p>Add</p>
				</button>
			</div>
			{msg ? (
				<div className='mt-4 text-green-600'>
					<p>{msg.msg}</p>
				</div>
        		):(<div className='mt-4 text-green-600'></div>)}
		</div>
	</>
  )
}
