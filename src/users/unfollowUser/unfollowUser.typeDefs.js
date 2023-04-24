import { gql } from "apollo-server"

export default gql`
    type UnfollowUser {
        ok: String!
        error: String
    }
    type Mutation {
        unfollowUser(username: String!): UnfollowUser
    }
`