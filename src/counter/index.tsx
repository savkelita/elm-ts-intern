import { Html } from 'elm-ts/lib/React'
import * as Cmd from 'elm-ts/lib/Cmd'

// --- Model
export type Model = number

export const init: [Model, Cmd.Cmd<Msg>] = [0, Cmd.none]

// --- Messages
export type Msg = { type: 'Increment' } | { type: 'Decrement' } | { type: 'Reset' }

// --- Update
export const update = (msg: Msg, model: Model): [Model, Cmd.Cmd<Msg>] => {
  switch (msg.type) {
    case 'Increment':
      return [model + 1, Cmd.none]
    case 'Decrement':
      return [model - 1, Cmd.none]
    case 'Reset':
      return [0, Cmd.none]
  }
}

// --- View
export const view = (model: Model): Html<Msg> => {
  return (dispatch) => (
    <div>
      Count: {model}
      <button onClick={() => dispatch({ type: 'Increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'Decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
    </div>
  )
}