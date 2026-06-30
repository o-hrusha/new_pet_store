import { stepsManager } from "../../apps/stepsManager.ts";

export const options = {
  vus: 1,
  iterations: 1,
};

export default function () {
  const createdUser = stepsManager.userSteps.createUser.execute();
  const userInfo = stepsManager.userSteps.getUserByUserName.execute(
    createdUser,
    createdUser.createdUserName,
  );
  const updatedUser = stepsManager.userSteps.updateUser.execute(
    userInfo,
    userInfo.userData,
  );
  const viewUser = stepsManager.userSteps.getUserByUserName.execute(
    updatedUser,
    updatedUser.updatedUserName,
  );
  const deletedUser = stepsManager.userSteps.deleteUser.execute(
    viewUser,
    viewUser.updatedUserName,
  );
  const checkUserDeleted =
    stepsManager.userSteps.checkUserNotExistsByUserName.execute(
      deletedUser,
      viewUser.updatedUserName,
    );
}
