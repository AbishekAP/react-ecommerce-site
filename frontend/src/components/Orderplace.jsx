import { Fragment } from 'react';
import '../styles/Orderplace.css'
import { Link } from 'react-router-dom';
import {IoCheckmarkCircleSharp} from 'react-icons/io5'


export default function Orderplace(){
    return <Fragment>
        <section className="order-placed-container">
        <div className='msg'>
        <IoCheckmarkCircleSharp className='ion-icon'/>
            <span>
                order placed successfully
            </span>
        </div>
        <Link to={'/products'}>
            <button type="button" className="btn" title="Back">continue shopping</button>
        </Link>
    </section>
    </Fragment>
}