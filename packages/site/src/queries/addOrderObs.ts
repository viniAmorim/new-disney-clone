export const ADD_ORDER_OBS = `
  mutation addOrderObservation($orderId: ID!, $observation: String!) {
    addOrderObservation(body: {orderId: $orderId, observation: $observation})
  }  
`;
