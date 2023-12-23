const express  = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const {bodyParserFunc} = require("./middleware/bodyparser")
const taskRouter = require("./router/tasks")
const userRouter = require("./router/user")
const authRouter = require("./router/auth")
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(cors())
mongoose.connect("mongodb+srv://Abouzaid:abouzaid@cluster0.a59mtsn.mongodb.net/").then(console.log("db connected"))
app.use(bodyParserFunc);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/newTask',taskRouter);	 
app.use('/api/newUser',userRouter);	 
app.use('/api/authCheck',authRouter);	 
app.listen(port,()=>{
	console.log("listening on port " + port );
})

