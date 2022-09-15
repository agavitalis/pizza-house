const { Kafka } = require('kafkajs')
import dotenv from 'dotenv';
dotenv.config();

export const kafka = new Kafka({
  clientId: 'pizza-house',
  brokers: [process.env.KAFKA_CONNECTION_URL],
  ssl: true,
  logLevel: 2,
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_API_USERNAME,
    password: process.env.KAFKA_API_KEY,
  },
})