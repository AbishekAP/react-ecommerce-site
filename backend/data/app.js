const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const dotenv = require('dotenv')
const connectDatabase = require("./config/connectDatabase")
dotenv.config({path:path.join(__dirname,'config','config.env')})
connectDatabase()
const bloodBank= require('./routes/bloodBank')
const tnSchoolStudents= require('./routes/tnSchoolStudents')
const tnCollege= require('./routes/tnCollege')
const trains= require('./routes/trains')
const userRegister= require('./routes/userRegister')
const userLogin= require('./routes/userLogin')
const admin= require('./routes/admin')
const feedback= require('./routes/feedback')

app.use(express.json())
app.use(cors())
app.use('/api/v1/',bloodBank);
app.use('/api/v1/',tnSchoolStudents);
app.use('/api/v1/',tnCollege);
app.use('/api/v1/',trains);
app.use('/api/v1/',userRegister);
app.use('/api/v1/',userLogin);
app.use('/api/v1/',admin);
app.use('/api/v1/',feedback);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})