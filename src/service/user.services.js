import userRepository from '../repositories/user.repositories.js'

async function createUserServices(newUser) {
    const user = await userRepository.createUserRepository(newUser);
    return user;
}


export default {createUserServices}