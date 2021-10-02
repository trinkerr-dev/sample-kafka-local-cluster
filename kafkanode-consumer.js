const kafka = require('kafka-node');
const Chance = require('chance');

const chance = new Chance();
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const consumer = new kafka.Consumer(client, [
  {topic: 'animals'}
]);

consumer.on('message', (message) => console.log(message.value));

consumer.on('error', (err) => console.error(err));