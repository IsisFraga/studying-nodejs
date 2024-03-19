import { randomUUID } from "crypto"

export class DatabaseMemory {
  #videos = new Map()

  list() {
    return Array.from(this.#videos.values()) //converte uma estrutura de dados que não é um array para um array
  }

  create(video) {
    const videoId = randomUUID()
    this.#videos.set(videoId, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }
}