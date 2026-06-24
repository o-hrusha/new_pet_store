import { stepsManager } from "../../apps/stepsManager.ts"



export const options = {
  vus: 1,
  iterations: 1,
};

export default function() {

const availablePet = stepsManager.petSteps.getAvailablePets()
const pendingPet = stepsManager.petSteps.getPendingPets(availablePet)
const soldPet = stepsManager.petSteps.getSoldPets(pendingPet)
const randomPendingPet = stepsManager.petSteps.getPetById(soldPet)
}