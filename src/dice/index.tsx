import { Html } from 'elm-ts/lib/React'
import * as Cmd from 'elm-ts/lib/Cmd'
import { getRandomDice } from './randomDice'

// --- Model
export type Model = number

export const init: [Model, Cmd.Cmd<Msg>] = [0, getRandomDice((value) => ({ type: 'Dice', value }))]

// --- Messages
export type Msg = { type: 'Roll' } | { type: 'Dice'; value: number }

// --- Update
export const update = (msg: Msg, model: Model): [Model, Cmd.Cmd<Msg>] => {
  switch (msg.type) {
    case 'Roll':
      return [model, getRandomDice((value) => ({ type: 'Dice', value }))]
    case 'Dice':
      return [msg.value, Cmd.none]
  }
}

// --- View
export const view = (model: Model): Html<Msg> => {
  return (dispatch) => (
    <div>
      Dice: {model}
      <button onClick={() => dispatch({ type: 'Roll' })}>Roll</button>
    </div>
  )
}
