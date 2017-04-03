const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID
} = require('graphql');

const UserType = require('./types/UserType');
const dbops = require('./dbops')

// The place we want to start traversing the graph
const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:{
            type: UserType,
            desciption: 'Get user from db by user id',
            args: {
                userId: { type: GraphQLID }
            },
            resolve: (obj, args, context) => {
                //read from the database
                return dbops(context.mdb).getUser(args.userId);
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = Schema;