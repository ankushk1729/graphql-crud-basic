const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { db } = require('./db')

const { Query } = require('./resolvers/Query')
const { Mutation } = require('./resolvers/Mutation')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
      },
    context : {
        db
    }
})



server.listen().then(({ url })=>{
    console.log(`Server is listening at ${url}`)
})