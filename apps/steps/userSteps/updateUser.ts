import { check, group } from "k6";
import { requestManager } from "../../requestsManager.ts";
import type { Response } from "k6/http";

export class UpdateUser {
  execute<T extends { getUserByUserNameResp: Response }>(stepData: T) {
    const { getUserByUserNameResp } = stepData;

    return group("Update User by username", function () {
      const userInfo = getUserByUserNameResp.json() as { username: string };
      const userName = userInfo.username;
      console.log("username after stringify: " + userName);
      const updateUserBody = {
        ...userInfo,
        username: `${userName}_updated`,
      };

      const updatedUserResp = requestManager.userService.updateUser(
        userName,
        updateUserBody,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      check(updatedUserResp, {
        "status equals 200": (r) => r.status === 200,
      });


      const updatedUserName: string = updateUserBody.username;

      console.log("userName: " + updatedUserName);
      return {
        ...stepData,
        updatedUserName,
        updatedUserResp,
      };
    });
  }
}
