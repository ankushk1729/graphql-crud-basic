const { gql } = require('apollo-server')

exports.typeDefs = gql`

  type Query {
      product(id:ID!) : Product
      products(filter:ProductsFilterInput) : [Product!]!
      category(id : ID!) : Category
      categories: [Category!]!
      reviews: [Review!]!
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput): Product!
    addReview(input: AddReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
    updateCategory(id:ID!, input: UpdateCategoryInput): Category
    updateProduct(id: ID!, input: UpdateProductInput): Product
    updateReview(id: ID!, input:UpdateReviewInput): Review
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }

  
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }

  input AddCategoryInput {
    name : String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
  }

  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int!
    producId: String!
    date: String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input UpdateProductInput {
    name: String
    description: String
    quantity: Int
    image: String
    price: Float
    onSale: Boolean
  }

  input UpdateReviewInput {
    title: String
    comment: String
    rating: Int
  }

`
