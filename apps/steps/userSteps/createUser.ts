import { check, group } from "k6";
import { requestManager } from "../../requestsManager.ts";

export class CreateRandomUser {
  execute<T extends object>(stepData: T = {} as T) {
    return group("Create User", function () {
      const userBody = {
        id: Date.now(),
        username: `user_${Date.now()}`,
        firstName: "Alex",
        lastName: "Hrusha",
        email: `alex_${Date.now()}@test.com`,
        password: "test1313",
        phone: "+380985036524",
        userStatus: 1,
      };
      const createdUserName = userBody.username;

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      const createdUserResp = requestManager.userService.createUser(userBody, {
        headers: headers,
      });

      check(createdUserResp, {
        "status equals 200": (r) => r.status === 200,
      });

      check(createdUserResp, {
        "Check user is created": (r) => r.json("message") === `${userBody.id}`,
      });

      return { ...stepData, createdUserName, createdUserResp };
    });
  }
}
