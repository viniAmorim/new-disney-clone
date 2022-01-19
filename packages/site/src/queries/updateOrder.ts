export const UPDATE_ORDER = `
  mutation updateOrder($id: ID!, $status: String!)  {
    updateOrder(id: $id, body: { status: $status }) 
  }
`;
