import { stepsManager } from "../../apps/stepsManager.ts";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const createdUser = stepsManager.userSteps.createUser.execute();
  const userInfo =
    stepsManager.userSteps.getUserByUserName.execute(createdUser);
  const updatedUser = stepsManager.userSteps.updateUser.execute(userInfo);
  const viewUser = stepsManager.userSteps.getUserByUserName.execute({
    ...updatedUser,
    userName: updatedUser.updatedUserName,
  });
  const deletedUser = stepsManager.userSteps.deleteUser.execute(viewUser);
  const checkUserDeleted =
    stepsManager.userSteps.checkUserNotExists.execute(deletedUser);
}