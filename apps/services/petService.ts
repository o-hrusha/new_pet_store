import { Params } from 'k6/http';
import { BaseRequest } from "./baseRequest.ts";

export class PetServices extends BaseRequest {

    findPetsByStatus(status: 'available' | 'pending' | 'sold', params?: Params) {
        return this.GET(`/v2/pet/findByStatus?status=${status}`, params)
    }

    findPetsById(petId: number, params?: Params) {
        return this.GET(`/v2/pet/${petId}`, params)
    }
}