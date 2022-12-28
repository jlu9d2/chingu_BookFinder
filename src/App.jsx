
import { useState } from 'react';
import Cards from './components/Cards';
import axios from 'axios';

const App = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [indexPage, setIndexPage] = useState(0);
  const getBooks = async () => {
    const baseURL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const query = searchTitle.split(' ').join('+');
    const author = bookAuthor.split(' ').join('+');
    const page = `&maxResults=10&startIndex=${indexPage}`
    const url = `${baseURL}${query}:${author}${page}`;

    try {
      const response = await axios.get(url);
      setBooks(response.data.items)
      setTotalBooks(response.data.totalItems)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(books, "books")

  const handleNextPage = () => {
    let newIndex = indexPage + 10;
    let updatedIndex = newIndex > books.length - 1 ? books.length - 1 : newIndex;
    setIndexPage(updatedIndex)
    getBooks();
  }

  const handlePrevPage = () => {
    let newIndex = indexPage - 10;
    let updatedIndex = newIndex < 0 ? 0 : newIndex;
    setIndexPage(updatedIndex);
    getBooks();
  }

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
                onChange={(e) => setBookAuthor(e.target.value)}
              />
            </div>
              
            <button className="search-btn" type="submit"
              onClick={() => getBooks()}>Search</button>
          </div>
        </div>
      </header>

      <Cards books={books} />
      <div className="page-nav">
        <button className="previous-page" onClick={handlePrevPage}>Previous</button>
        <button className="next-page" onClick={handleNextPage}>Next</button>
      </div>
    </div>
  )
}

export default App;