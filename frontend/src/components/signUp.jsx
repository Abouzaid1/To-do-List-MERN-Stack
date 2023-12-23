import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function SignUp() {
	const [valid,setValid] = useState(true)
	const getTheErrorMsg = async ()=>{
		const data = await fetch("http://localhost:3000/api/newUser")
		
		const res = await data.json()
		if(res.redirect){
			window.location.href = res.redirect;
		}else{
			setValid(false)
		}
		console.log(data);
	}
	getTheErrorMsg()
  return (
	<>
	<div className='w-full h-[100vh] flex justify-center items-center'>

		<div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
			<h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

			<form method='post' className='' action='http://localhost:3000/api/newUser/'>
				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-600">First Name</label>
					<input type="text" id="fname" name="fname" className="mt-1 p-2 w-full border rounded-md"></input>
				</div>
				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-600">Last Name</label>
					<input type="text" id="lname" name="lname" className="mt-1 p-2 w-full border rounded-md"></input>
				</div>
				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-600">Username</label>
					<input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md"></input>
				</div>
				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-600">Email</label>
					<input type="mail" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"></input>
				</div>
				<div className="mb-4">
					<label  className="block text-sm font-medium text-gray-600">Password</label>
					<input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"></input>
				</div>
				{
					!valid && <div className="text-[red]">The data is empty</div>
				}
				<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
					Sign Up
				</button>
				<Link to={"/"}><button className="w-full text-[black] bg-white hover:text-white mt-5 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
					Sign In
				</button></Link>
			</form>
		</div>
	</div>
	</>
  )
}
