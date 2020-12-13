import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Product = () => {
    const [products, setProducts] = useState([
        {id:uuid(), category: 'Services ** ', item: 'Lottery ** ', rank: 'Rank One'},
        {id:uuid(), category: 'Services ** ', item: 'Cards ** ', rank: 'Rank Two'},
        {id:uuid(), category: 'Services ** ', item: 'Financial services ** ', rank: 'Rank Three'},
        {id:uuid(), category: 'Merchandise ** ', item: 'Smokes & Tobacco ** ', rank: 'Rank Product One'},
        {id:uuid(), category: 'Merchandise ** ', item: 'Cold Beverages ** ', rank: 'Rank Product two'},
        {id:uuid(), category: 'Restaurant ** ', item: 'Fresh Food ** ', rank: 'Rank Product three'},
    ])

    const addItems = () => {
        setProducts([...products, {id:uuid(), category:'Hot Food ** ', item: 'Chicken Wings ** ', rank: 'Fresh food Two'},
                    {category: 'Hot Food **', item: 'Grill ** ', rank: 'Fresh Food One'},
                    {category: 'Hot Food ** ', item: 'Bakery ** ', rank: 'Fresh Food Three'},
                    ])
    }
    return (
        <div>
            <h1 className="my-4">Product and Service Mix of a typical 7-Eleven store</h1>
            <p>Seven-Eleven stores are calling themselves food stores. Therefore, there is an atmosphere of a restaurant inside of a store where shoppers can pick from cold beverages, hot beverages such as coffee, latte and tea to chicken foods such as wings, strips, fries and grills like taquitos and hot dogs. In addition, there is a large demand of snacks and confectioneries. There is even a section dedicated for pet foods, electronics selling phone chargers, outlets & accessories and Health & beauty aids.</p>
            <hr/>
            <ul>
                {products.map(products =>{
                    return ( <li key={products.id}>{products.category}{products.item}{products.rank}</li>)
                })}
            </ul>
            <button onClick={addItems}>Add Items</button>
        </div>
    )
}

export default Product;
