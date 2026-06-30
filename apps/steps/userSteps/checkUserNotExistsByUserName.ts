import { check, group } from "k6";
import { requestManager } from "../../requestsManager.ts";

export class CheckUserNotExistsByUserName {
  execute<T extends {}>(stepData: T, userName: string) {
    return group("Get User by username", function () {
      const getUserByUserNameResp =
        requestManager.userService.getUserByUserName(userName);

      check(getUserByUserNameResp, {
        "status equals 200": (r) => r.status === 404,
      });
      check(getUserByUserNameResp, {
        "Check user is not exists": (r) =>
          r.json("message") === "User not found",
      });

      return {
        ...stepData,
        getUserByUserNameResp,
      };
    });
  }
}
