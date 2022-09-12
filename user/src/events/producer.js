import { kafka } from "./kafka"

const producer = kafka.producer()

export const startKafkaProducer = async () => {

  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

}

