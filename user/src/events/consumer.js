import { kafka } from "./kafka"

const consumer = kafka.consumer({ groupId: 'pizza-house-user' })

export const listenToKafka = async (topic) => {

  await consumer.connect()
  await consumer.subscribe({ topic: topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      })
    },
  })
}
