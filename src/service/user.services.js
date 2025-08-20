import userRepository from '../repositories/user.repositories.js'
import bcrypt from 'bcrypt'

async function createUserServices(newUser) {
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email)
    if (foundUser) throw new Error("User already exists")

    
    const passHash = await bcrypt.hash(newUser.password, 10);
    const user = await userRepository.createUserRepository({...newUser, password: passHash});
    if (!user) throw new Error("Error creting User")
    return user;
}

export default {createUserServices}