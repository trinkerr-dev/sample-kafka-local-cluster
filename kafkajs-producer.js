const { Kafka } = require('kafkajs');
const Chance = require('chance');

const chance = new Chance();
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();
const topic = 'animals';

const run = async () => {
  // Producing
  await producer.connect()
  setInterval(async () => {
    try {
      await producer.send({
        topic, 
        messages: [
          {value: chance.animal()}
        ]
      });
    } catch(e) {
      console.error(e);
    }
  }, 1000);
};

run().catch(console.error);
