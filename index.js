import express from 'express'
const app = express()

app.use(express.json())

const users =[]

//METHOD => GET, POST/PATCH, DELETE
//NAME => / * sempre no plural
//Callback functions => Onde executamos o backend (lógica, regra de negócio)

app.post('/users', function(req, res){
   const body = req.body
   users.push(body)
   res.status(201).send("usuarios crado com sucesso")
});

app.get ("/users", (req, res) => {
    res.send({users})
})


app.listen(3000, () => {console.log("hello word")})