export const GET_CUSTOMERS = `
  query getCustomers($name: String, $page: Int) {
    getCustomers(name: $name, page: $page) {
      items {
        birthDate
        email
        id
        maritalStatus
        name
        phones {
          isMain
          phone
        }
      }
      total
    }
  }
`;
