var { KafkaPubSub } =  require('graphql-kafka-subscriptions');
var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');


var pubsub = new KafkaPubSub({
  topic: 'teste2',
  host: 'localhost',
  port: '9092'
});

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
  message: () => 'Hello World!'
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));


// as mentioned in the comments of https://github.com/ancashoria/graphql-kafka-subscriptions/issues/4
// you will need to upate the site calls of `publish` in your application as called out below.

// the stock PubSub::publish expects a string and an object
pubsub.publish('messageAdded', {
  messageAdded: root,
  channelId: 1
});

// KafkaPubSub::publish expects the first parameter to be inserted into the object
pubsub.publish({
  channel: 'messageAdded',
  messageAdded: { teste: 'eh nois' },
  channelId: 1
});
