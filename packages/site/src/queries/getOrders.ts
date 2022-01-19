export const GET_ORDERS = `
  query getOrders {
    getOrders {
      customer {
        birthDate
        email
        id
        maritalStatus
        name
      }
      id
      productCategory {
        id
        name
      }
      status
    }
  }
`;
