import React from 'react'
import ReactDOM from 'react-dom'
import RCTXContextenu from 'rctx-contextmenu'

const Demo = () => {
  return (
    <div>
      <RCTXContextenu>Right click on me</RCTXContextenu>
    </div>
  )
}

ReactDOM.render(<Demo />, document.getElementById('root'))