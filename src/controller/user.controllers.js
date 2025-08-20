import userService from "../service/user.services.js";

async function createUseController(req, res) {
    const newUser = req.body;

    try{
        const user = await userService.createUserServices(newUser)
        res.status(201).send({user})
    } catch (e){
        res.status(400).send(e.message)
    }
}

export default {createUseController}