const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  if(process.env.HELLO){
    const x = process.env.HELLO;
 }else if(process.env.HELLO2){
   const x = process.env.HELLO2;
}if(process.env.HELLO3){
 const x = process.env.HELLO3;
}if(process.env.HELLO4){
 const x = process.env.HELLO4;
}
  res.send(x)
})

app.get('/about', (req, res) => {
  if(process.env.HELLO){
     const x = process.env.HELLO;
  }else if(process.env.HELLO2){
    const x = process.env.HELLO2;
 }if(process.env.HELLO3){
  const x = process.env.HELLO3;
}if(process.env.HELLO4){
  const x = process.env.HELLO4;
}
  res.send('About route 🎉 ');
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})
