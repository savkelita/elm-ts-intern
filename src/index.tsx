import * as ElmReact from 'elm-ts/lib/React'
import { programWithDebugger } from 'elm-ts/lib/Debug/Html'
import { render } from 'react-dom'
import * as Main from './counter'

const main = programWithDebugger(Main.init, Main.update, Main.view)
ElmReact.run(main, (dom) => render(dom, document.getElementById('root')!))
