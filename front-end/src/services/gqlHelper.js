import { GraphQLClient } from 'graphql-request';

const URL = 'http://localhost:8080';

export default class GraphQlHelper {
  static anon = new GraphQLClient(`${URL}/graphql`, { headers: {} });

  static user = new GraphQLClient(`${URL}/graphql`, {
    headers: { Authorization: 'Bearer ' + localStorage.authToken }
  })

  static update() {
    GraphQlHelper.user = new GraphQLClient(`${URL}/graphql`, {
      headers: { Authorization: 'Bearer ' + localStorage.authToken }
    })
  }
}