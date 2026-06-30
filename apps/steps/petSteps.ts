import { check, group } from "k6";
import { requestManager } from "../requestsManager.ts";
// @ts-ignore
import { randomItem } from "../../framework/k6Libs/k6Util.js";

export class PetSteps {
  getRandomAvailablePet<T extends object>(stepData: T = {} as T) {
    return group("Get Available Pets", function () {
      const resp = requestManager.petService.findPetsByStatus("available");
      const pets = resp.json() as { status: string }[];

      check(resp, { "status equals 200": (r) => r.status === 200 });
      check(resp, {
        "all pets have available status": () =>
          pets.every((pet) => pet.status === "available"),
      });

      const randomPet = randomItem(resp.json());
      const availablePetId: number = randomPet.id;

      return { ...stepData, availablePetId };
    });
  }

  getRandomSoldPet<T extends object>(stepData: T = {} as T) {
    return group("Get Sold Pets", function () {
      const resp = requestManager.petService.findPetsByStatus("sold");
      const pets = resp.json() as { status: string }[];

      check(resp, { "status equals 200": (r) => r.status === 200 });
      check(resp, {
        "all pets have sold status": () =>
          pets.every((pet) => pet.status === "sold"),
      });

      const randomPet = randomItem(resp.json());
      const soldPetId: number = randomPet.id;

      return { ...stepData, soldPetId };
    });
  }

  getRandomPendingPet<T extends object>(stepData: T = {} as T) {
    return group("Get Pending Pets", function () {
      const resp = requestManager.petService.findPetsByStatus("pending");
      const pets = resp.json() as { status: string }[];

      check(resp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(resp, {
        "all pets have pending status": () =>
          pets.every((pet) => pet.status === "pending"),
      });

      const randomPet = randomItem(resp.json());
      const pendingPetId: number = randomPet.id;

      return { ...stepData, pendingPetId };
    });
  }

  getPetById<T extends {}>(stepData: T, petId: number) {
    return group("Get Pet By Id", function () {
      const resp = requestManager.petService.findPetsById(petId);

      check(resp, {
        "status equals 200": (r) => r.status === 200,
      });
      check(resp, {
        "Check pet is found by Id": (r) => r.json("id") === petId,
      });
      const petData = resp.json();
      return { ...stepData, petData };
    });
  }
}
