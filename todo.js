
const express = require('express');

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('jay shree ram')
 
});

app.put('/' , (req , res) => {
   
    const dati = req.body;
  
    
    //  res.json({ message: dati , dati: req.body });
  

 res.send(dati);
 console.log()
  
      

})

app.listen(3000 , () => console.log('server running on port 3000'));