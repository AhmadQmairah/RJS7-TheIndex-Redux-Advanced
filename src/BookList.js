import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";
import { connect } from "react-redux";
class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };

  filterBooksByColor = bookColor => {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  };

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;

    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log();
  return {
    books: state.bookState.books
  };
};
export default connect(mapStateToProps)(BookList);
