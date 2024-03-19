import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {

  const { title, description, duration } = request.body

  database.create({
    title,
    description,
    duration,
  })

  return reply.status(201).send()
})

server.get('/videos', () => {
  const videos = database.list()
  return videos
})
server.put('/videos/:id', () => {
  const videoId = request.params.videoId
  const { title, description, duration } = request.body

  database.update(videoId, {
    title,
    description,
    duration
  })
  return reply.status(204).send() // 204 significa uma resposta que teve sucesso mas não tem conteúdo (retornando resposta vazia)
})

server.delete('/videos/:id', () => {
  return 'Hello Node.JS'
})

server.listen({
  port: 3333,
})