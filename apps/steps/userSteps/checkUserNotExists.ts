import { check, group, JSONValue } from "k6";
import { requestManager } from "../../requestsManager.ts";

export class CheckUserNotExists {
  execute<T extends { userName: string }>(stepData: T) {
    return group("Get User by username", function () {
      const { userName } = stepData;

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
