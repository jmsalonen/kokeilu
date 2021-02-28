import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

// kommentti

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      eka: 0,
      toka: 0
    }

    this.handleEka = this.handleEka.bind(this)
  }

  handleEka() {
    let temp1 = this.state.eka
    ++temp1 
    this.setState({ eka: temp1 })
  }

  handleToka = () => {
    let temp2 = this.state.toka
    ++temp2
    this.setState({ toka: temp2 })
  }

  render() {
    return (
      <div>
        <Header />
        <Home />
        <div>
          <button onClick={() => this.handleEka()}>Eka</button>
        </div>
        <div>
          <button onClick={this.handleToka}>toka</button>
        </div>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default App;
