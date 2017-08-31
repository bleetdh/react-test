import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import Ga from './Ga'
import Counter from './Counter'

const gaInfo = {
  title: 'GA Overflow',
  description: 'Something about GA'
}

const postInfo = {
  title: 'Dinosaurs are awesome',
  author: 'Stealthy Stegosaurus',
  body: 'Check out this body property!',
  comments: [
    {
      title: 'First',
      user: 'Brian'
    },
    {
      title: 'Second',
      user: 'blee'
    },
    {
      title: 'third',
      user: 'brianlee'
    },
    {
      title: 'fourth',
      user: 'brianleeeee'
    }
  ]
}

// ReactDOM.render(<Ga info={gaInfo} post={postInfo} />, document.getElementById('root'))
ReactDOM.render(<Counter num={0} />, document.getElementById('root'))
registerServiceWorker()
