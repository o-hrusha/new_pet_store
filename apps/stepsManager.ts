import { PetSteps } from "./steps/petSteps.ts";
import { StoreSteps } from "./steps/storeSteps.ts";
import { UserSteps } from "./steps/userSteps.ts"


class StepsManager {
    petSteps: PetSteps = new PetSteps();
    storeSteps: StoreSteps = new StoreSteps();
    userSteps: UserSteps = new UserSteps();

}

export const  stepsManager = new StepsManager();