import { randomUUID } from "crypto"

export class DatabaseMemory {
  #videos = new Map()

  list() {
    return Array.from(this.#videos.entries()).map((videoArray) => { //converte uma estrutura de dados que não é um array para um array -- entries retorna um array com vários arrays dentro onde cada um dos arrays representa um vídeo onde a primeira chave representa o UUID e a segunda é o restante das infos 
      const id = videoArray[0]
      const data = videoArray[1]

      return {
        id,
        ...data
      }
    }) 
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