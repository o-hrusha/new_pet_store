import { Gauge } from "k6/metrics";
// @ts-ignore
import { default as storeFlow } from "../scenarios/storeScenarios.ts";
// @ts-ignore
import { default as userFlow } from "../scenarios/userScenarios.ts";
// @ts-ignore
import { default as petFlow } from "../scenarios/viewPendingPetFlow.ts";

export const testDuration = new Gauge("test_duration");
const testNameTag = `storeFlow + userFlow + petFlow`;

export const options = {
  tags: {
    testRun: testNameTag,
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
  return { testStart: Date.now() };
}

export function StoreScenario() {
  return storeFlow();
}

export function UserScenario() {
  return userFlow();
}
export function PetScenario() {
  return petFlow();
}

// teardown
export function teardown(data: { testStart: number }) {
  const testEnd = Date.now();
  const durationSec = (testEnd - data.testStart) / 1000;
  testDuration.add(durationSec, { testName: testNameTag });
}
