export const ADD_ORDER_COMMUNICATION = `
  mutation addOrderCommunication($orderId: ID!, $message: String!) {
    addOrderCommunication(body: {orderId: $orderId, message: $message, type: "sms"})
  }  
`;
