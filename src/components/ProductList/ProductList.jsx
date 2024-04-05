import React, {useState} from 'react';
import  './ProductList.css'
import ProductItem from "./ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";


const data = [
    {id: '1', title: 'title1', price: 1000, description: 'description description 1'},
    {id: '2', title: 'title2', price: 2000, description: 'description description 2'},
    {id: '3', title: 'title3', price: 3000, description: 'description description 3'},
    {id: '4', title: 'title4', price: 4000, description: 'description description 4'},
    {id: '5', title: 'title5', price: 5000, description: 'description description 5'},
    {id: '6', title: 'title6', price: 6000, description: 'description description 6'},
    {id: '7', title: 'title7', price: 7000, description: 'description description 7'},
    {id: '8', title: 'title8', price: 8000, description: 'description description 8'}
]

const getPrice = (products) => {
    return products.reduce((totalPrice, product) => {
        return totalPrice += product.price
    }, 0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram()


    const onAdd = (product) => {
        const alreadyAdded = data.find(item => product.id === item.id)

        let newItems = []

        if(alreadyAdded){
            addedItems.filter(item => item.id === product.id)
        }else {
            newItems = [...newItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide()

        } else{
            tg.MainButton.setParams({
                text: `Купить ${getPrice(newItems)}`
            })
            tg.MainButton.show()
        }
    }

    return (
        <div>
            {data.map((product) => (
                <ProductItem product={product} className={'item'} onAdd={onAdd}/>
            ))}
        </div>
    );
};

export default ProductList;