export const CREATE_CUSTOMER = `
  mutation createCustomer($name: String!, $cellphone: String!, $email: String!)  {
    createCustomer(body: {
      name: $name, 
      cellphone: $cellphone,
      email: $email
    }) {
      id
    }
  }
`;
