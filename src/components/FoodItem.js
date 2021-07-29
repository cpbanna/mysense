import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import pasta from '../images/pasta.jpg';
import pizza from '../images/pizza.jpg';
import chicken from '../images/butter-chicken.jpg';
import paneer from '../images/Shahi-paneer.jpg';


const FoodItem = () => {
    
    const url = window.location.pathname
    const urlArr = url.split("/")

    const [foodItems, setFoodItems] =  useState([pasta,pizza,chicken,paneer])

    const [foodName, setFoodName] = useState(['Pasta','Pizza','Butter Chicken','Shahi Paneer'])



    return (
        <div>
            <Link to="/">HOME</Link>
            <h1>{foodName[[urlArr[2]]]}</h1>
            <img className ='foodImage' src={foodItems[urlArr[2]]} alt={foodName[[urlArr[2]]]}/>
        </div>
    )
}

export default FoodItem
