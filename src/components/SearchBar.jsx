import { useState, useEffect } from 'react'


const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [titleResults, setTitleResults] = useState();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting`)
      .then(response => response.json())
    .then(data => {
      setTitleResults(data)
          
      // console.log(titleResults)
    })
    .catch(err => console.log(err))
});



//searchTitle tracks input value for the title;
//when you click 'search', should pass the title and do a search thru the data for matching strings;
//pass the data (should be object) into the renderbooks compoment;
  //renderbooks component should take passed in data and pass each search result book into a CreateBookCard component;

  const handleSearchTitle = (e) => {
    let title = e.target.value.toLowerCase();
    setSearchTitle(title);
  }
  
  
  const handleSearch = () => {
    titleResults.filter((result) => {
      
    })
  }


  return (
    <div>
      <div className="search-bar">
        <input type="text" id="searchbar" name="searchbar"
          onChange={handleSearchTitle} />
          
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
    </div>

  )
}

export default SearchBar;