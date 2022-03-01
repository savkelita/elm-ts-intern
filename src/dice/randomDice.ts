import * as Cmd from 'elm-ts/lib/Cmd'
import { perform } from 'elm-ts/lib/Task'
import { Task } from 'fp-ts/lib/Task'

const generateRandomNumber: Task<number> = () => Promise.resolve(Math.floor(Math.random() * 6 + 1))
export const getRandomDice = <Msg>(randomValue: (value: number) => Msg): Cmd.Cmd<Msg> => perform(randomValue)(generateRandomNumber)
