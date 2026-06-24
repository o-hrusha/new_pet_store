import { check, group } from "k6";
import { requestManager } from "../../requestsManager.ts";
import type { Response } from "k6/http";

export class DeleteUser {
  execute<T extends { getUserByUserNameResp: Response }>(stepData: T) {
    const { getUserByUserNameResp } = stepData;
    const userInfo = getUserByUserNameResp.json() as { username: string };
    const userName = userInfo.username;
    return group("Delete User by username", function () {
      const resp: Response = requestManager.userService.deleteUser(userName, {
        headers: {
          Accept: "application/json",
        },
      });

      check(resp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(resp, {
        "Check user is deleted": (r) =>
          r.json("message") === `${userName}`,
      });
      
      return stepData;
    });
  }
}
