import { kafka } from "./kafka"
import { Product } from "../models/index.js";

const consumer = kafka.consumer({ groupId: 'pizza-house-user' })

export const listenToKafka = async (topic) => {

  await consumer.connect()
  await consumer.subscribe({ topic: topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const newProduct = JSON.parse(message.value.toString());
      let productCheck = await Product.findOne({ _id: newProduct._id });
      if (!productCheck) {
        await Product.create(newProduct);
      }
      console.log(`Received message ${message.value} on topic ${topic}`);
    },
  })
}
