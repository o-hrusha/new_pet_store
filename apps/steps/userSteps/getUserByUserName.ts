import { check, group } from "k6";
import { requestManager } from "../../requestsManager.ts";

export class GetUserByUserName {
  execute<T extends {}>(stepData: T, userName: string) {
    return group("Get User by username", function () {
      const getUserByUserNameResp =
        requestManager.userService.getUserByUserName(userName);

      check(getUserByUserNameResp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(getUserByUserNameResp, {
        "Match that user has expected userName": (r) =>
          r.json("username") === userName,
      });
      const userData = getUserByUserNameResp.json();

      return {
        ...stepData,
        userData,
      };
    });
  }
}
