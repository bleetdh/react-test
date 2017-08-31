import React, {Component} from 'react'

class Question extends Component {
  constructor (props) {
    super()

    this.state = {
      upvotes: props.detail.upvotes,
      downvotes: props.detail.downvotes
    }
  }
  upvoteClick (e) {
    this.setState({
      upvotes: this.state.upvotes + 1
    })
  }
  downvoteClick (e) {
    this.setState({
      downvotes: this.state.downvotes + 1
    })
  }

  render () {
    return (
      <li>
        <h2>{this.props.detail.title}</h2>
        <p>{this.props.detail.description}</p>
        <p>current score: {this.state.upvotes - this.state.downvotes}</p>
        <button onClick={(e) => this.upvoteClick(e)}>upvotes: {this.state.upvotes}
        </button>
        <br />
        <button onClick={(e) => this.downvoteClick(e)}>downvotes: {this.state.downvotes}
        </button>
      </li>
    )
  }
}

export default Question
