import { kafka } from "./kafka"

const producer = kafka.producer()

export const emitToKafka = async (topic, message) => {

  await producer.connect()
  await producer.send({
    topic: topic,
    messages: [{
      value: message,
    }],
  })

}

