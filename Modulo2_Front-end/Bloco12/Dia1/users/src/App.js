import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      idade: '',
      email: '',
    }
    this.cuidaFetch = this.cuidaFetch.bind(this)
  }

  async cuidaFetch() {
    const response = await fetch( 'https://api.randomuser.me/')
    const dados = await response.json()

    const { results } = dados
    const {name, dob, email } = results[0]

    this.setState({
      firstName: name.first,
      lastName: name.last,
      idade: dob.age,
      email: email
    })
  }

   componentDidMount() {
    this.cuidaFetch()
  }

  shouldComponentUpdate(_nextProps, nextstate) {
    const { idade } = nextstate
    return idade < 50
  }

  render() {
    const {firstName, lastName, email, idade } = this.state
  return (
    <div className="App">
      
      <header className="App-header">
        {firstName && lastName ? <h3>{ firstName } { lastName }</h3> : 'loading...'}
        {idade ? <p>{idade}</p> : 'loading...'}
        {email ? <p>{email}</p> : 'loading...'}
      </header>
    </div>
  );
}
}

export default App;
