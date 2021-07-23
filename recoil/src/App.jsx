import logo from './logo.svg'
import './App.css'
import Item from './widget/item'

const App = () => {
  const f = () => {
    console.log(1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Component1 />
      <ul>
        {[1, 2, 3].map(i => (
          <Item id={i} key={i} />
        ))}
      </ul>
    </div>
  )
}

export default App
