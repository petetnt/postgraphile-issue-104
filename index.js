const { gql } = require('graphile-utils');

const types = `
  extend type Query {
    fooQuery(foo: String): Foo
  }
 
  type Foo {
    foobar: String
  }
`;

const resolvers = build => ({
  Query: {
    fooQuery: async (
      query,
      args,
      context,
      fourth,
      fifth
    ) => {
      console.log({
        fourth,
        fifth,
      });

      return {
        foobar: "foobar"
      };
    },
  },
});

const customSchema = build => ({
  typeDefs: gql`
    ${types}
  `,
  resolvers: resolvers(build)
});

module.exports = customSchema;