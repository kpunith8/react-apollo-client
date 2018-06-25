import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import { getBookDetailsQuery } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;

    if (book) {
      return (
        <div>
          <h2>Book Details:</h2>
          <p>Title: {book.name}</p>
          <p>Genre: {book.genre}</p>
          <p>Author Name: {book.author.name}</p>
          <h2> Other books by this Author:</h2>
          <ul className='other-books'>
            {
              book.author.books.map(book => {
                return <li key={book.id}>{book.name}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return (
        <h2>No Book Selected...</h2>
      )
    }
  }

  render() {
    return (
      <div id='book-details'>
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookDetailsQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      }
    }
  }
})(BookDetails);