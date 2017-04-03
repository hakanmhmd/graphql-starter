const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull
} = require('graphql');

const UserType = require('../types/UserType');

// The place we want to start traversing the graph
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:{
            type: UserType,
            desciption: 'Gets users from db',
            resolve: (obj, args, context) => {
                //read from the database
                
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = Schema;