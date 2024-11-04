import '../styles/Hero.css'
import { Fragment } from "react";
import {Link} from 'react-router-dom'

export default function Hero(){
    return <Fragment>
         <section className="hero-container">
            <div className='hero'>
            <div className='hero-content'>
               <h1>Discover. Shop. Enjoy.</h1>
               <Link to={'/products'} >
               Explore &#8594;
               </Link>
            </div>
             <div className="cub"></div>   
            </div>
        </section>
    </Fragment>
}