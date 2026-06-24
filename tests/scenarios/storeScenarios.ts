import { stepsManager } from "../../apps/stepsManager.ts"



export const options = {
  vus: 1,
  iterations: 1,
};

export default function() {
    const createOrder = stepsManager.storeSteps.createOrder()
    const orderInfo = stepsManager.storeSteps.getOrderByOrderId(createOrder)

}