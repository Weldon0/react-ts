import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

let root: HTMLElement  = document.getElementById('root') as HTMLElement

interface Props {
  className: string
}

interface PropsTest {
  id: string
}



let props = {
  className: 'aa',
  id: '1'
}

const app: React.DetailedReactHTMLElement<PropsTest, HTMLDivElement> = React.createElement('h1', props, '你好')

ReactDOM.createRoot(root).render(
  app
)
