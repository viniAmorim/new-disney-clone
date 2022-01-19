export const CREATE_ORDER = `
  mutation createOrder($customerId: ID!, $productCategoryId: ID!)  {
    createOrder(body: { customerId: $customerId, productCategoryId: $productCategoryId }) 
  }
`;
