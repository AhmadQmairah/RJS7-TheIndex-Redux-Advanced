import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";
import { connect } from "react-redux";

//actions
import { fetchAllAuthors, fetchAllBooks } from "./redux/actions";
const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class App extends Component {
  state = {};

  // fetchAllBooks = async () => {
  //   const res = await instance.get("/api/books/");
  //   return res.data;
  // };

  // async componentDidMount() {
  //   try {
  //     const authorsReq = this.fetchAllAuthors();
  //     const booksReq = this.fetchAllBooks();
  //     const authors = await authorsReq;
  //     const books = await booksReq;

  //     this.setState({
  //       authors: authors,
  //       books: books,
  //       loading: false
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }

  async componentDidMount() {
    this.props.getAuthors();
    this.props.getBooks();
  }

  getView = () => {
    if (this.props.loading1 || this.props.loading2) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route
            path="/authors/"
            render={props => (
              <AuthorsList {...props} authors={this.state.authors} />
            )}
          />
          <Route
            path="/books/:bookColor?"
            render={props => <BookList {...props} books={this.state.books} />}
          />
        </Switch>
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAuthors: () => dispatch(fetchAllAuthors()),
    getBooks: () => dispatch(fetchAllBooks())
  };
};

const mapStateToProps = state => {
  return {
    loading1: state.authorState.loading,
    loading2: state.bookState.loading
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
