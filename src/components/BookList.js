import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';
import BookDetails from './BookDetails';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBookId: null,
    }
  }

  displayBooks() {
    var data = this.props.data;

    if (data.loading) {
      return (<div>Loading...</div>);
    } else {
      return data.books.map(book => {
        return (<li key={book.id} onClick={(e) => this.setState({ selectedBookId: book.id })}> {book.name} </li>);
      });
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selectedBookId} />
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
