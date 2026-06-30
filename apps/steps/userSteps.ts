import { CreateRandomUser } from "./userSteps/createUser.ts";
import { GetUserByUserName } from "./userSteps/getUserByUserName.ts";
import { UpdateUserByBody } from "./userSteps/updateUserByBody.ts";
import { DeleteUser } from "./userSteps/deleteUser.ts";
import { CheckUserNotExistsByUserName } from "./userSteps/checkUserNotExistsByUserName.ts";

export class UserSteps {
  createUser = new CreateRandomUser();
  getUserByUserName = new GetUserByUserName();
  updateUser = new UpdateUserByBody();
  deleteUser = new DeleteUser();
  checkUserNotExistsByUserName: CheckUserNotExistsByUserName = new CheckUserNotExistsByUserName();
}
