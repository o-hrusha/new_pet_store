import { stepsManager } from "../../apps/stepsManager.ts";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const availablePet = stepsManager.petSteps.getRandomAvailablePet();
  const pendingPet = stepsManager.petSteps.getRandomPendingPet(availablePet);
  const soldPet = stepsManager.petSteps.getRandomSoldPet(pendingPet);
  const randomPendingPet = stepsManager.petSteps.getPetById(
    soldPet,
    soldPet.pendingPetId,
  );
}
