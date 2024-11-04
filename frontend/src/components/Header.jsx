import '../styles/Header.css'
import {Fragment} from "react";
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
import {IoCart,IoPerson} from 'react-icons/io5'

export default function Header(){
    return <Fragment>
        <header>
            <div className="logo">
                <h1>
                    <Link to={'/'}>AP Mart</Link>
                </h1>
            </div>
            <SearchBar/>
            <nav>
                <ul>
                    <li><Link to={'/products'}>Products</Link></li>
                    <li><Link to={'/orders'}>Orders</Link></li>
                    <li><Link to={'/cart'}><IoCart className='ion-icon'/></Link></li>
                    <li><Link to={'/account'}><IoPerson className='ion-icon'/></Link></li>
                </ul>
            </nav>
        </header>
    </Fragment>
}