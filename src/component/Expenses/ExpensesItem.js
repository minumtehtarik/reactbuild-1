import React from 'react';
import './ExpensesItem.css'

function ExpensesItem() {

    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div  className="expense-item-description">
                <h2>Car insurance</h2>
                <div className="expense-item__price">$294.67</div>
            </div>
        </div>
    );
}

export default ExpensesItem;