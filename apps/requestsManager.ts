import { PetServices } from "./services/petService.ts";
import { StoreServices } from "./services/storeService.ts";
import { UserServices } from "./services/userService.ts";

class RequestsManager {
    petService: PetServices = new PetServices()
    userService = new UserServices()
    storeService: StoreServices = new StoreServices()
}

export const requestManager = new RequestsManager()