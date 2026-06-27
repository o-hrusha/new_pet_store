import { CreateUser } from "./userSteps/createUser.ts";
import { GetUserByUserName } from "./userSteps/getUserByUserName.ts";
import { UpdateUser } from "./userSteps/updateUser.ts";
import { DeleteUser } from "./userSteps/deleteUser.ts";
import { CheckUserNotExists } from "./userSteps/checkUserNotExists.ts";

export class UserSteps {
  createUser = new CreateUser();
  getUserByUserName = new GetUserByUserName();
  updateUser = new UpdateUser();
  deleteUser = new DeleteUser();
  checkUserNotExists: CheckUserNotExists = new CheckUserNotExists();
}
