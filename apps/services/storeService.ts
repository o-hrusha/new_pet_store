import { Params } from 'k6/http';
import { BaseRequest } from "./baseRequest.ts";

export class StoreServices extends BaseRequest {


    createOrder(body: object, params?: Params) {
        return this.POST(
            '/v2/store/order',
            JSON.stringify(body),
            params
        );
    }

    getOrderByOrderId(orderId: number, params?: Params) {
        return this.GET(
            `/v2/store/order/${orderId}`,
            params
        );
    }

}