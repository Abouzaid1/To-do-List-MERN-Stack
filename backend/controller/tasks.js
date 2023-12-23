const Task = require("../model/tasks")


const getData = (req,res)=>{
	try{
		if(req.body.task){
			const task = new Task({"text":req.body.task,"checked":req.body.checked,"userId":req.body.userId});
			task.save().then(console.log("added"))
			res.json(task)
		}
		else{
			res.send({"msg":"Type any thing"})
		}
	}
	catch(err){
		console.log(err);
	}
}
const showData = async (req,res)=>{
	const tasks = await Task.find()
	res.json(tasks)
}
const checkfunc = async (req, res)=>{
	const task = await Task.findById(req.body.id)
	if(task.checked){
		task.checked = false
	}else{
		task.checked = true
	}	
	await task.save()
}

const deleteFunc = async (req,res)=>{
	const task = await Task.findById(req.body.id)
	await Task.deleteOne(task)
}
module.exports = {
	getData,
	showData,
	checkfunc,
	deleteFunc
}