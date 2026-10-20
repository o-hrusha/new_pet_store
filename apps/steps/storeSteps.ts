import { check, group } from "k6";
import { requestManager } from "../requestsManager.ts";

export class StoreSteps {
  createOrder<T extends object>(stepData: T = {} as T) {
    return group("Create Order", function () {
      const orderBody = {
        id: Date.now(),
        petId: 1,
        quantity: 1,
        shipDate: new Date().toISOString(),
        status: "placed",
        complete: true,
      };

      const createdOrderResp = requestManager.storeService.createOrder(
        orderBody,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      check(createdOrderResp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(createdOrderResp, {
        "Check order is created": (r) => r.json("id") === orderBody.id,
      });

      const orderId = (createdOrderResp.json() as { id: number }).id;
      return {
        ...stepData,
        orderId,
      };
    });
  }

  getOrderByOrderId<T extends {}>(stepData: T, orderId: number) {
    return group("Get Order by ID", function () {
      const getOrderByOrderIdResp =
        requestManager.storeService.getOrderByOrderId(orderId);

      check(getOrderByOrderIdResp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(getOrderByOrderIdResp, {
        "Match that order has expected orderId": (r) =>
          r.json("id") === orderId,
      });

      return {
        ...stepData,
        getOrderByOrderIdResp,
      };
    });
  }
}
