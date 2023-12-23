const User = require('../model/users')

const addUser = async (req,res)=>{
	if(req.body.fname){
		const data = await req.body
		console.log({...data});
		const user = new User({...data})
		console.log(user);
		user.save().then(console.log("added"));
		res.redirect("http://localhost:5173/")
	}
	else{
		res.redirect("http://localhost:5173/signUp")
	}
}

const authCheck =async (req, res)=>{
	const username = req.body.username
	const password = req.body.password
	try{
		const existUser = await User.findOne({ username: username});
		if(existUser && existUser.password === password){
			console.log("loged in successfully");
			res.status(200).redirect(`http://localhost:5173/${existUser._id}`);
		}
		else{
			console.log("wrong username or password");
			res.status(400).redirect("http://localhost:5173");
		}
	}catch(err){
		console.log(err);
	}
}
module.exports = {
	addUser,
	authCheck
}