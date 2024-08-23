import '../styles/ProductCard.css'
import { Fragment } from "react";
import {Link} from 'react-router-dom'

export default function ProductCard({product}){
    return <Fragment>
         <div className="product">
                <div className="product-img">
                    <img src={product.images[0]} alt="smart phone" />
                </div>
                <div className="product-details">
                    <div className="product-title">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <div className="product-price">
                        <p>Rs.<span>{product.price}</span>/-</p>
                    </div>
                    <div className="product-price">
                        <Link to={'/product/'+product._id}>
                        <button className='btn'>View</button>
                        </Link>
                    </div>
                </div>
            </div>
    </Fragment>
}