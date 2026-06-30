import { check, group, JSONValue } from "k6";
import { requestManager } from "../../requestsManager.ts";
import type { Response } from "k6/http";

export class UpdateUserByBody {
  execute<T extends {}>(stepData: T, body: JSONValue) {
    return group("Update User by username", function () {
      const userInfo = body as {
        username: string;
        id: number;
      };
      const userName = userInfo.username;
      const userId = userInfo.id;

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
      check(updatedUserResp, {
        "Check user is updated": (r) => r.json("message") === `${userId}`,
      });

      const updatedUserName: string = updateUserBody.username;

      return {
        ...stepData,
        updatedUserName,
        updatedUserResp,
      };
    });
  }
}
