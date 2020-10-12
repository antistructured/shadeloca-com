import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs: string = `
  type Query {
    random: Float
  }
`;

const resolvers: any = {
  Query: {
    random: () => Math.random()
  }
}

const schema = makeExecutableSchema({
  typeDefs, 
  resolvers
});

export const post = graphqlHTTP({
  schema,
  pretty: true
});
