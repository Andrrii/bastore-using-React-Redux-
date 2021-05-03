import React, { Component } from "react"
import BookListItem from "../book-list-item"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { WithBookstoreService } from "../hoc"
import {fetchBooks } from "../../actions"
import { compose } from "../../utils"
import ErrorIndicator from "../error-indicator"

import "./book-list"
import Spinner from "../spinner"

class BookList extends Component {

    componentDidMount() {


      
    
        this.props.fetchBooks()

    }

    render() {
        const {books,loading,error} = this.props

        if(loading){
            return <Spinner />
        }

        if (error){
            return <ErrorIndicator />
        }

        return (
            <ul className="book-list" >
                {
                    books.map((book) => {
                        return (
                            <li key = {book.id}> <BookListItem book = {book} /> </li>
                        )
                    })
                }
            </ul>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        books: state.books,
        error: state.error
    }
}
// ownProps - властивості які перейшли із WithBookstoreService до mapDispatchToProps
const mapDispatchToProps = (dispatch,ownProps) => {
    const {bookstoreService} = ownProps
    return {
        fetchBooks: fetchBooks(bookstoreService,dispatch)
    }
}

export default compose(
    WithBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(BookList);
