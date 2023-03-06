import { Stefamon } from "../stefamon/stefamon.model"

export interface Jogador {
  id: number
  nickname: string
  saldo: number
  stefamons?: Stefamon[]
}
