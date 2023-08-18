
const typeDefs = `
type User {
  _id: ID!
  username: String!
}

type Query {
  users: [User]!
  user(userId: ID!): User
}

type Mutation {
  addUser(name: String!): User
}
`

module.exports = typeDefs;