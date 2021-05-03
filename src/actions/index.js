

const booksLoaded = (newBooks) => {
    return {
      type: 'FETCH_BOOKS_SUCCESS',
      payload: newBooks
    };
  };
  

const booksrequested = () => {
    return {
        type:"FETCH_BOOKS_REQUEST"
    }
}

const bookserror = (error) => {
  return {
    type:"FETCH_BOOKS_FAILURE",
    payload:error
  }
}
const fetchBooks = (bookstoreService,dispatch) => () => {
  // 1. receive data

  //const {bookstoreService,booksLoaded,booksrequested,bookserror} = this.props
  dispatch(booksrequested())
  bookstoreService.getBooks()
  .then((data) => {
      
  // 2. dispatch action to store 
  dispatch(booksLoaded(data))})
  .catch(err => dispatch(bookserror(err)))
}

  export {
    fetchBooks
  };