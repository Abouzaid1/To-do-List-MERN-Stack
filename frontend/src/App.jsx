import TaskInput from "./components/taskInput"
import Task from "./components/tasks"
import SignIn from "./components/signIn"
import SignUp from "./components/signUp";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from "./components/TaskPage";
function App() {


  return (
	<>
			<Routes>
				<Route path="/" element={<SignIn/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="/:id" Component={TaskPage}/>
			</Routes>
	</>

  )
}

export default App
