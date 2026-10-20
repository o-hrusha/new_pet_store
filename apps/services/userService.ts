import { Params } from 'k6/http';
import { BaseRequest } from "./baseRequest.ts";

export class UserServices extends BaseRequest {

    createUser(body: object, params?: Params) {
        return this.POST(`/v2/user`, JSON.stringify(body),  params)
    }
    getUserByUserName(username: string, params?: Params) {
        return this.GET(`/v2/user/${username}`, params)

    }
    updateUser(username: string, body: object, params?: Params) {
        return this.PUT(`/v2/user/${username}`, JSON.stringify(body),  params)
    }
    deleteUser(username: string, body: object | null, params?: Params) {
        return this.DELETE(`/v2/user/${username}`,JSON.stringify(body), params)
    }

}