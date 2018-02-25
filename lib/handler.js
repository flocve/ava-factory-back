import { graphqlLambda } from 'graphql-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

// Types
import survivantType from './data/types/survivant';
import factionType from './data/types/faction';
import membreType from './data/types/membre';

// Resolvers
import survivantResolver from './data/resolvers/survivant';
import factionResolver from './data/resolvers/faction';
import membreResolver from './data/resolvers/membre';

const typeDefs = mergeTypes([survivantType, membreType, factionType]);
const resolvers = mergeResolvers([
  survivantResolver,
  membreResolver,
  factionResolver]);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

exports.graphql = (event, context, callback) => {
  const callbackFilter = (error, output) => {
    const outputWithHeader = Object.assign({}, output, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    callback(error, outputWithHeader);
  };

  graphqlLambda({ schema })(event, context, callbackFilter);
};

exports.record = (event, context, callback) => {
  event.Records.forEach((record) => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  callback(null, `Successfully processed ${event.Records.length} records.`);
};
