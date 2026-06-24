import { check, group, JSONValue } from "k6";
import { requestManager } from "../../requestsManager.ts";
import type { Response } from "k6/http";

export class GetUserByUserName {
  execute<T extends { userName: string }>(stepData: T) {
    return group("Get User by username", function () {
      const { userName } = stepData;

      const getUserByUserNameResp =
        requestManager.userService.getUserByUserName(userName);

      check(getUserByUserNameResp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(getUserByUserNameResp, {
        "Match that user has expected userName": (r) =>
          r.json("username") === userName,
      });

      return {
        ...stepData,
        getUserByUserNameResp,
      };
    });
  }
}
