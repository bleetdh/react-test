import React, {Component} from 'react'

class Comment extends Component {

  render () {
    return (
      <div>
        <li>
          <h2>{this.props.title}</h2>
          <small> commented by: {this.props.user} </small>
        </li>
      </div>
    )
  }
}

export default Comment
