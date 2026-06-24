import { stepsManager } from "../../apps/stepsManager.ts"

export const options = {
  vus: 1,
  iterations: 1,
};

export default function() {

const availablePet = stepsManager.petSteps.getAvailablePets()
const pendingPet = stepsManager.petSteps.getPendingPets(availablePet)
const soldPet = stepsManager.petSteps.getSoldPets(pendingPet)
const createdUser = stepsManager.createUser.execute()
const userInfo = stepsManager.getUserByUserName.execute(createdUser)
const updatedUser = stepsManager.updateUser.execute(userInfo)
const viewUser = stepsManager.getUserByUserName.execute({...updatedUser, userName:updatedUser.updatedUserName})
const deletedUser = stepsManager.deleteUser.execute(viewUser)
const createOrder = stepsManager.storeSteps.createOrder()
const orderInfo = stepsManager.storeSteps.getOrderByOrderId(createOrder)

}