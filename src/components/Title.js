import React, {Fragment, useState} from 'react'
import {Link,} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pasta from '../images/pasta.jpg';
import pizza from '../images/pizza.jpg';
import chicken from '../images/butter-chicken.jpg';
import paneer from '../images/Shahi-paneer.jpg';

const Title = () => {

    const [foodItems, setFoodItems] =  useState([pasta,pizza,chicken,paneer])

    const [item, setItem] = useState(0)

    const increment = () => {
        setItem(prevItem => prevItem + 1)
    }

    const decrement = () => {
        setItem(prevItem => prevItem - 1)
    }


    return (
        <Fragment>
         <div className= 'flex-box'>
             <div>   
                <span className='title'>
                    <h1>Healthy</h1>
                    <h1>Lunch</h1>
                    <h2>For You</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua 
                    </p>
                    <Link to="/ourmenu">Check Our Menu</Link>
                    <div className='icon'>  
                        <span><FontAwesomeIcon icon="hands-wash"/></span>
                        <span><FontAwesomeIcon icon="couch"/></span>
                        <span><FontAwesomeIcon icon="credit-card"/></span>
                        <span className='icon-text'>Dine -In Health Protocols</span>
                    </div>
                </span>
              </div>
              <div className="flex-box">
                 {item !== 0? <div className='btn' onClick={decrement}><FontAwesomeIcon icon="chevron-left" /></div> : null}
                 <div><Link to={`/home/${item}`}><img className ='foodImage'src={foodItems[item]} alt="food"/></Link></div>
                 {item !== foodItems.length - 1?<div className='btn' onClick={increment}><FontAwesomeIcon icon="chevron-right" /></div> : null} 
              </div>    
              <div className="social">
                    <div><FontAwesomeIcon icon={['fab', 'instagram']}/></div>
                    <div><FontAwesomeIcon icon={['fab', 'facebook']}/></div>
                    <div><FontAwesomeIcon icon={['fab', 'twitter']}/></div>
                    <div><FontAwesomeIcon icon={['fab', 'whatsapp']}/></div>
                    <button>Chat me</button>
              </div>    
        </div>
       </Fragment>
    )
}

export default Title
