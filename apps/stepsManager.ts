import { PetSteps } from "./steps/petSteps.ts";
import { CreateUser } from "./steps/userSteps/createUser.ts";
import { GetUserByUserName } from "./steps/userSteps/getUserByUserName.ts";
import { UpdateUser } from "./steps/userSteps/updateUser.ts";
import { DeleteUser } from "./steps/userSteps/deleteUser.ts";
import { StoreSteps } from "./steps/storeSteps.ts";
import { CheckUserNotExists } from "./steps/userSteps/checkUserNotExists.ts"


class StepsManager {
    petSteps: PetSteps = new PetSteps();
    createUser = new CreateUser();
    getUserByUserName = new GetUserByUserName();
    updateUser = new UpdateUser();
    deleteUser = new DeleteUser();
    storeSteps: StoreSteps = new StoreSteps();
    checkUserNotExists: CheckUserNotExists = new CheckUserNotExists();

}

export const  stepsManager = new StepsManager();