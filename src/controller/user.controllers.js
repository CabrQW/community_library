import userService from "../service/user.services.js";

async function createUseController(req, res) {
    const newUser = req.body;

    try{
        const user = await userService.createUserServices(newUser)
        res.status(201).send({user})
    } catch (err){
        return res.status(400).send(err.message)
    }
}

export default {createUseController}