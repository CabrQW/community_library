import express from 'express'
import useRouters from './src/routes/user.routes.js'
const app = express()

app.use(express.json())
app.use(useRouters)



app.listen(3000, () => {console.log("hello word")})