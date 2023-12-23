import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Tasks() {
	const [tasks, setTasks] = useState([])
	const {id} = useParams()
	const getData = async () => {
		await fetch("http://localhost:3000/api/newTask")
			.then((res) => res.json())
			.then((data) => {
				const newData = data.filter(item=> item.userId == id)
				console.log(newData);
				setTasks(newData)
			})
	}
	const checkHandler = (id,check)=>{
		fetch('http://localhost:3000/api/newTask/', {
			method: 'PUT',
  			headers: {
    		'Content-Type': 'application/json',
		},
  			body: JSON.stringify({id: id})
		})
	}
	const deleteHandler = (id)=>{
		fetch('http://localhost:3000/api/newTask/', {
			method: 'DELETE',
  			headers: {
    		'Content-Type': 'application/json',
		},
  			body: JSON.stringify({id: id})
		})
	}
	useEffect(()=>{
		getData();
		console.log(tasks);
	}, [])
	return (
		<>
		{tasks.map((task) => {
			return (
					<div key={task._id} className='w-full mt-10'>
						<div className='m-auto w-[70%] rounded-[20px] border-[black] border-[1px] p-7 flex justify-between items-center'>
							<h2>{task.text}</h2>
							<div className='flex '>

							<div className='rounded-[10px] border-[black] border-[1px] w-[50px] h-[50px]' onClick={()=>{checkHandler(task._id,task.checked)}}>
								{
									task.checked?(<div className='rounded-[10px] w-full h-full bg-black'></div>):<div className='rounded-[10px] w-full h-full'></div>
								}
							</div>
							<div className='rounded-[10px] border-[black] border-[1px] w-[50px] h-[50px] flex items-center justify-center' onClick={()=>deleteHandler(task._id)}>
								- 
							</div>
								</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
