const kafka = require('kafka-node');
const Chance = require('chance');

const chance = new Chance();
const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});
const producer = new kafka.Producer(client);

producer.on('ready', function () {
  setInterval(() => {
    producer.send([
      {topic: 'animals', messages: chance.animal()}
    ], (err, data) => {
      console.log(data);
    });
  }, 1000);
});

producer.on('error', (err) => console.error(err));
