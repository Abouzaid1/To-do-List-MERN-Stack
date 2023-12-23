import React from 'react'
import { Link } from 'react-router-dom'
export default function SignIn() {

  return (
	<>
	<div className='w-full h-[100vh] flex justify-center items-center '>

		<div class="bg-white p-8 rounded shadow-md w-full sm:w-96">
			<h2 class="text-2xl font-semibold mb-6">Sign In</h2>

			<form className='' action='http://localhost:3000/api/authCheck/' method='post'>
				<div class="mb-4">
					<label for="username" class="block text-sm font-medium text-gray-600">Username</label>
					<input type="text" id="username" name="username" class="mt-1 p-2 w-full border rounded-md"></input>
				</div>

				<div class="mb-4">
					<label for="password" class="block text-sm font-medium text-gray-600">Password</label>
					<input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md"></input>
				</div>

				<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
					Sign In
				</button>
				<Link to={"/signUp"}><button type="submit" class="w-full text-[black] bg-white hover:text-white mt-5 p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200">
					Sign Up
				</button></Link>
			</form>
		</div>
	</div>
	</>
  )
}
