import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'World !!'
        }
    }
})

const graphQLSchema = new GraphQLSchema({
    query: Query
})

module.exports = graphQLSchema