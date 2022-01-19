export const GET_ORDER = `
  query getOrder($id: ID!) {
    getOrder(id: $id) {
      communications {
        message
        type
        createdAt
      }
      customer {
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
      files {
        file
        createdAt
      }
      histories {
        description
        createdAt
      }
      id
      productCategory {
        id
        name
      }
      observations {
        createdAt
        observation
      }
      status
    }
  }
`;
