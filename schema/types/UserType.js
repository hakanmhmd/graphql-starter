const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = require('graphql');


module.exports = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        userId:{ type: GraphQLID },
        username: { type: new GraphQLNonNull(GraphQLString) },
        rating: { type: GraphQLInt }
    }
});