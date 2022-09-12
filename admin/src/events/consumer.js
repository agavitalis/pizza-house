import { kafka } from "./kafka"

const consumer = kafka.consumer({ groupId: 'test-group' })

export const startKafkaConsumer = async () => {

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

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
