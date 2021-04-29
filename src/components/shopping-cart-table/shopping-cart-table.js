import react from "react"

import "./shopping-cart-table.css"

const ShoppingCartTable = () => {
    return (
        <div className = "shopping-cart-table" >
            <h2>Your order</h2>
            <table className = "table">
                <thead>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </thead>
            </table>
        </div>
    )
}

export default ShoppingCartTable