
import './App.css'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Book Finder</h1>
      <SearchBar />
      <Cards />
    </div>
  )
}

export default App;
