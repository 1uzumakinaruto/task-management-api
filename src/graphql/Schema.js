// /src/graphql/schema.js
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const Organization = require('../models/Organization');
const User = require('../models/user');
const Task = require('../models/Task');

// Define the GraphQL types, queries, and mutations here
// Example:
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        role: { type: GraphQLString },
        organizationId: { type: GraphQLID }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        // Add more queries for tasks, organizations, etc.
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                role: { type: GraphQLString },
                organizationId: { type: GraphQLID }
            },
            resolve(parent, args) {
                const user = new User({
                    username: args.username,
                    password: args.password,
                    role: args.role,
                    organizationId: args.organizationId
                });
                return user.save();
            }
        },
        // Add more mutations for tasks, organizations, etc.
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
