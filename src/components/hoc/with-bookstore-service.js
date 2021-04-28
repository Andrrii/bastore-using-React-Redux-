import React from "react"
import { BookstoreServiceConsumer } from "../bookstore-service-context"

// Робиться для того щоб легко получати дані з bookstoreservice

const WithBookstoreService = () => ( Wrapped ) => {

    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService = {bookstoreService} />
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }

}

export default WithBookstoreService