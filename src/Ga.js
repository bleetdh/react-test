import React, {Component} from 'react'
import Question from './Question'
import Comment from './Comment'

let questions = [
  {
    title: 'What is React?',
    description: 'SIMI LAI EH',
    upvotes: 10,
    downvotes: 2
  },
  {
    title: 'JS stupid?',
    description: 'Indeed dumb',
    upvotes: 5,
    downvotes: 1
  },
  {
    title: 'JS or Rails?',
    description: 'JS la',
    upvotes: 25,
    downvotes: 17
  }
]

class Ga extends Component {

  render () {
    let commentList = this.props.post.comments.map(function (comment, index) {
      return <Comment title={comment.title} user={comment.user} key={index} />
    })

    let allQuestions = questions.map(function (question, index) {
      return <Question detail={question} key={index} />
    })

    return (
      <div className='container'>
        <h1>{this.props.info.title}</h1>
        <p>{this.props.info.description}</p>

        <ul>
          {allQuestions}
        </ul>

        <h2>{this.props.post.title}</h2>
        <small>Author: {this.props.post.author}</small>
        <p>{this.props.post.body}</p>
        <h3>Comments</h3>
        <ul>
          {commentList}
        </ul>
      </div>
    )
  }
}

export default Ga
