

const Card = ({ cover, title, author, publisher, id }) => {
//renders out each result book
// when book is clicked should do something to see book.
  const HandleClickSeeThisBook = () => {
    console.log('See this book')  
  }

  return (
    <div className="card">
      <div className="card__info">
        <h2 className="card__title">Title</h2>
        <p className="card__author">Author</p>
        <p className="card__publisher">Publisher</p>
        <button className="card__btn-cta">See This Book</button>
      </div>
    </div>
  )
}

export default Card;