const express = require('express');
const app = express();
const port = 3000;


app.get('/sum', function(req, res ) { 
    const a = req.query.a;
    const b = req.query.b;
   let a1 = parseInt(a);
   let a2 = parseInt(b);
   let sum = a1+a2;
   console.log(typeof(a1))
    res.send(sum);

})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))