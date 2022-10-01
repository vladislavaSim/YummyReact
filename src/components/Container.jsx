import React, {useState} from 'react';
import Card from "./Card";

let arr = [
    {id: 1, name: 'Chili Chicken With Rice', price: 180, category: 'Asian', img: 1},
    {id: 2, name: 'Lasagna', price: 90, category: 'European', img: 2},
    {id: 3, name: 'Crispy Pecan Pie', price: 80, category: 'Desserts', img: 3},
    {id: 4, name: 'Greek Salad', price: 70, category: 'Salads', img: 4},
    {id: 5, name: 'Veal Fondue', price: 150, category: 'European', img: 5},
    {id: 6, name: 'Chicken Salad', price: 135, category: 'Salads', img: 6},
    {id: 7, name: 'Yoghurt Cake', price: 65, category: 'Desserts', img: 7},
    {id: 8, name: 'Chocolate Cake', price: 70, category: 'Desserts', img: 8},
    {id: 9, name: 'Burgundian Snails', price: 200, category: 'European', img: 9},
    {id: 10, name: 'Indian Lunch Deluxe', price: 220, category: 'Asian', img: 10},
    {id: 11, name: 'Berry Tart', price: 60, category: 'Desserts', img: 11},
    {id: 12, name: 'Bao Burgers', price: 90, category: 'Asian', img: 12},
    {id: 13, name: 'Chia Pudding + Granola', price: 80, category: 'Breakfast', img: 13},
    {id: 14, name: 'Entrecote', price: 160, category: 'European', img: 14},
    {id: 15, name: 'Healthy Plate', price: 120, category: 'Breakfast', img: 15},
    {id: 16, name: 'Tomato Soup', price: 80, category: 'European', img: 16},
    {id: 17, name: 'Imeretian Cheese Pie', price: 100, category: 'European', img: 17},
    {id: 18, name: 'Ajarian Cheese Pie', price: 110, category: 'European', img: 18},
    {id: 19, name: 'Georgian Dumplings', price: 85, category: 'European', img: 19},
    {id: 20, name: 'Chef Burger', price: 180, category: 'European', img: 20,},
    {id: 21, name: 'Baked Lamb', price: 130, category: 'European', img: 21},
    {id: 22, name: 'Pizza', price: 115, category: 'European', img: 22},
    {id: 23, name: 'Shrimp Bowl', price: 130, category: 'Breakfast', img: 23},
    {id: 24, name: 'Sushi Set', price: 255, category: 'Asian', img: 24},
    {id: 25, name: 'Sushi for one', price: 120, category: 'Asian', img: 25},
    {id: 26, name: 'Mackerel Grill', price: 115, category: 'Asian', img: 26},
    {id: 27, name: 'Ukrainian Cheesecakes', price: 60, category: 'Breakfast'},
    {id: 28, name: 'Caramel Croissant', price: 45, category: 'Breakfast', img: 28},
    {id: 29, name: 'Chicken Noodle', price: 95, category: 'Asian', img: 29},
    {id: 30, name: 'Vegies Salad', price: 80, category: 'Salads', img: 30},
    {id: 31, name: 'Lentils Salad', price: 90, category: 'Salads', img: 31},
    {id: 32, name: 'Fried Chicken Salad', price: 145, category: 'Salads', img: 32},
    {id: 33, name: 'Caesar', price: 140, category: 'Salads', img: 33}
]

console.log(arr)
const Container = () => {
    const [foodArr, setFoodArr] = useState(arr)

    const showCards = () => {
        return foodArr.map((item, key) => {
            return <Card
                key ={item.id}
                foodName ={item.name}
                foodPrice ={item.price}
            />
        })
    }
    console.log(showCards())
let array = showCards()
    return (
        <div className="container">
            {array}
        </div>
    );
};

export default Container;