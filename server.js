const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./AppRoutes');
const cors=require('cors')
require('dotenv').config();
mongoose.set("strictQuery", false);
const PORT = 7000 || process.env.port;
app.use(express.json())
app.use(cors())
mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))
app.use(routes);
app.listen(PORT, () => {
console.log(`I AM LISTENNING ON PORT ${PORT}`)
})

//kristina71103
//yjgtxcFuWsDmXBIp
//mongodb+srv://kristina71103:<password>@cluster0.ngwel46.mongodb.net/?retryWrites=true&w=majority