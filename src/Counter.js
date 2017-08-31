import React, {Component} from 'react'
import DisplayedCounter from './DisplayedCounter'
import DisplayedName from './DisplayedName'
import Enemy from './Enemy'
import ReactDOM from 'react-dom'
import * as V from 'victory'
import { VictoryLine } from 'victory'
import { VictoryChart } from 'victory'
import { VictoryTheme } from 'victory'
// import Clock from './Clock'

class Counter extends Component {
  constructor (props) {
    super()

    this.state = {
      number: props.num,
      keyword: 'Search Keyword',
      upvotesNamesArr: [],
      downvotesNamesArr: [],
      enemiesArr: [],
      timeArr:[]
    }
  }
  increaseCounter (e) {
    this.setState({
      number: this.state.number + 1,
      upvotesNamesArr: this.state.upvotesNamesArr.concat(this.state.name)
    })
  }
  decreaseCounter (e) {
    this.setState({
      number: this.state.number - 1,
      downvotesNamesArr: this.state.downvotesNamesArr.concat(this.state.name)
    })
  }
  showName (e) {
    if (e.target.value) {
      this.setState({keyword: e.target.value})
    } else {
      this.setState({keyword: 'Search keyword'})
    }
  }
  addName (e) {
    this.setState({
      enemiesArr: this.state.enemiesArr.concat(this.state.name)
    })
  }
  filterName (e) {
    let keyword = e.target.value
    const results = this.state.enemiesArr.filter((name) => {
      return name.toLowerCase().includes(keyword.toLowerCase())
    })
    this.setState({
      enemiesArr: results
    })
  }

  render () {
    let allEnemies = this.state.enemiesArr.map((name, index) => {
      return <Enemy key={index} name={name} />
    })
    // let allupNames = this.state.upvotesNamesArr.map((name, index) => {
    //   return <li key={index}>Name: {name} +1</li>
    // })
    // let alldownNames = this.state.downvotesNamesArr.map((name, index) => {
    //   return <li key={index}>Name: {name} -1</li>
    // })
    return (
      <div>
        {/* <Clock /> */}

        <DisplayedCounter number={this.state.number} />
        <button onClick={(e) => this.increaseCounter(e)}>+1</button>
        <button onClick={(e) => this.decreaseCounter(e)}>-1</button>

        <DisplayedName keyword={this.state.keyword} />
        <div>
          <label>
            Type name:
            <input type='text' onChange={(e) => this.filterName(e)} />
          </label>
        </div>

        <button onClick={(e) => this.addName(e)}>New Name</button>
        <h2>Arya Kill List</h2>
        <ol>

          {allEnemies}
          {/* {allupNames}
          {alldownNames} */}
        </ol>
        <VictoryChart theme={VictoryTheme.material} height={200}>
          <VictoryLine

            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc'}
            }}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }}

            data={[
                { x: 2, y: 2},
                { x: 2, y: 3 },
                { x: 3, y: 5 },
                { x: 4, y: 4 },
                { x: 5, y: 7 }
            ]}
            />
        </VictoryChart>
      </div>
    )
  }

  componentDidMount () {
    const url = 'https://www.alphavantage.co/query?function=RSI&symbol=MSFT&interval=15min&time_period=10&series_type=close&apikey=demo'

    fetch(url)
      // promise is resolved, reponse is received
      .then((response) => {
        // console.log(response)
        // convert response.body int json format
        return response.json()
      })
      // reads the json
      .then((data) => {
        var obj = (data['Technical Analysis: RSI'])

        // time(needed?)
        // var size = Object.keys(obj)
        // console.log(size)
        // size.map((time, index) => {
        //   if(index < 5) {
        //     this.setState({
        //       timeArr:
        //       this.state.timeArr.concat(time)
        //     })
        //   }
        // })
        // end of time...

        // console.log('obj', obj)
        var randomArr = []
        for (var prop in obj) {
          randomArr.push(obj[prop])
        }
        randomArr.map((character, index) => {
          if (index < 5) {
            this.setState({
              enemiesArr:
              this.state.enemiesArr.concat(character.RSI)
            })
          }
        })

        // console.log('data', data)
        // console.log(size)

        // data.map((character, index) => {
        //   if (index <101){
        //     console.log(character['RSI'])
            // this.setState({
            //   enemiesArr: this.state.enemiesArr.concat(character.name)
            // })
        //   }
        // })
      })
      // just in case api call fails
      .catch((err) => {
        console.log(err)
      })
  }
}

export default Counter
