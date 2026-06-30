// @ts-ignore
import { default as storeFlow } from "../scenarios/storeScenarios.ts";
// @ts-ignore
import { default as userFlow } from "../scenarios/userScenarios.ts";
// @ts-ignore
import { default as petFlow } from "../scenarios/viewPendingPetFlow.ts";

const testNameTag = `storeFlow + userFlow + petFlow`;

export const options = {
  tags: {
    testName: testNameTag,
  },
  scenarios: {
    StoreScenario: {
      exec: "StoreScenario",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },

    UserScenario: {
      exec: "UserScenario",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
    PetScenario: {
      exec: "PetScenario",
      executor: "shared-iterations",
      vus: 1,
      iterations: 1,
    },
  },
};

// setup
export function setup() {
  const testStart = Date.now();
  const setupData = `alex stated test at: ${new Date(testStart)}`;
  console.log(setupData);
  return { testStart, setupData };
}

export function StoreScenario(data: { testStart: number }) {
  console.log(
    `StoreScenario started after: ${(Date.now() - data.testStart) / 1000}`,
  );
  return storeFlow();
}

export function UserScenario(data: { testStart: number }) {
  console.log(
    `UserScenario started after: ${(Date.now() - data.testStart) / 1000}`,
  );
  return userFlow();
}
export function PetScenario(data: { testStart: number }) {
  console.log(
    `PetScenario started after: ${(Date.now() - data.testStart) / 1000}`,
  );
  return petFlow();
}

// teardown
export function teardown(data: { testStart: number }) {
  const testEnd = Date.now();
  const durationSec = (testEnd - data.testStart) / 1000;
  console.log(`Alex test duration was: ${durationSec}`);
}
