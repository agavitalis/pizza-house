import { kafka } from "./kafka";
import { Order } from "../models/index.js";

const consumer = kafka.consumer({ groupId: 'pizza-house-admin' })

export const listenToKafka = async (topic) => {

  await consumer.connect()
  await consumer.subscribe({ topic: topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const newOrder = JSON.parse(message.value.toString());
      let orderCheck = await Order.findOne({ _id: newOrder._id });
      if (!orderCheck) {
        await Order.create(newOrder);
      }
      console.log(`Received message ${message.value} on topic ${topic}`);
    },
  })
}
