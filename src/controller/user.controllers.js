import userService from "../service/user.services.js";

async function createUseController(req, res) {
    const newUser = req.body;

    try{
        const user = await userService.createUserService(newUser)
        res.status(201).send({user})
    } catch (e){
        res.status(400).send(e.message)
    }
}

async function findAllUserController(req, res) {
    try {
        const users = await userService.findAllUserController()
        res.send({users})
    } catch (e){
        return res.status(400).send(e.message)
    }
}

async function findAllUserByIdController(req, res) {
    const {id} = req.params

    try{
        const user = await userService.findUserByIdService(id)
        res.send(user)
    } catch (e){
        return res.status(404).send(e.message)
    }
}

async function updateUserController(req, res) {
    const {id} = req.params
    const newUser = req.body

    try{
        const user = await userService.updateUserRepository(newUser,id)
        res.send({user})
    } catch (e){
        return res.status(400).send(e.message)
    }
}


async function deleteUserController(req , res) {
    const {id} = req.params

    try{
        const message = await userService.deleteUserService(id)
        res.send({message})
    } catch (e){
        return res.status(400).send(e.message)
    }
    
}





export default {
    createUseController,
    findAllUserController,
    findAllUserByIdController,
    updateUserController,
    deleteUserController
}