const Cards = ({ books }) => {
  
  return (
    <div className="cards container">
      {books.map((book, index) => {
        return (
          <div className='card' key={index}>
            <h2 className="card__title">{book.volumeInfo?.title}</h2>
            <div className="card__img-container">
              <img className="card__img"
                src={!book.volumeInfo.imageLinks
                  ? 'https://books.google.com/googlebooks/images/no_cover_thumb.gif' : book.volumeInfo.imageLinks?.thumbnail}
                alt="book cover" />
            </div>
            <div className="card__info">
              <p className="card__author"><span>Author(s):</span> {[book.volumeInfo.authors].join(',')}</p>
              <p className="card__publisher"><span>Published By:</span> {book.volumeInfo?.publisher}</p>
            </div>
              <button className="card__btn-cta"><a href={book.volumeInfo?.infoLink}>See This Book</a></button>
          </div>
        )
       })}
    </div>
  )
}

export default Cards;