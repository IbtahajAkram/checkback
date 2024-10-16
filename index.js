const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req,res)=>{
console.log('Backend Deploy hogaya ha');
res.json({message:'Backend Deploy hogaya ha'})
});

app.listen(port, ()=>{
   console.log('Your port is running on 3000') 
});
