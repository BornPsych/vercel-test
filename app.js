const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  let x="hello";
  if(process.env.HELLO){
     x = process.env.HELLO;
 }else if(process.env.HELLO2){
    x = process.env.HELLO2;
}else if(process.env.HELLO3){
  x = process.env.HELLO3;
}else if(process.env.HELLO4){
  x = process.env.HELLO4;
}
  res.send(x)
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ');
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})
