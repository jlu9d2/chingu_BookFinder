
import { useState } from 'react';
import Cards from './components/Cards';
import axios from 'axios';

const App = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [books, setBooks] = useState([]);//fetches books with author and title

  const getBooks = async (title) => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const query = title.split(' ').join('+');
    const author = bookAuthor.split(' ').join('+');
    const index = 0;
    const url = `${baseURL}${query}:${author}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchTitle = (e) => {//updates book title state
    let search = e.target.value;
    setSearchTitle(search.toLowerCase());
  }

  const handleBookAuthor = (e) => {//updates book author
    let author = e.target.value;
    setBookAuthor(author.toLowerCase());
  }
  
  const handleSearch = () => { 
    let title = searchTitle.includes(' ') ? [searchTitle.split(' ')].join('+') : searchTitle;

    getBooks(title);
  }
  console.log(books[0], 'book');
  return (
      
    <div>
      <header className='header'>
        <div className="header__content container">
          <h1 className="title">Book Finder</h1>
          <div className="search-bar">
            <div className="search__inputs">
              <input className="book-title" type="text" id="searchbar" name="searchbar" placeholder="Search book title"
                onChange={(e) => setSearchTitle(e.target.value)}
              />
              <input className="book-author" type="text" id="searchbar" name="searchbar" placeholder="Book author"
                onChange={handleBookAuthor}
              />
            </div>
              
            <button className="search-btn" type="submit" onClick={() => getBooks(searchTitle)}>Search</button>
          </div>
        </div>
      </header>

      <Cards books={books} />
    </div>

  )
}

export default App;
//api key:
//AIzaSyC44xtP0-GcP13n6dJaNQzrcTKdBoYaGWY