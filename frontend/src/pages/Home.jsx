import '../styles/Home.css'
import { Fragment } from "react";
import {Link} from 'react-router-dom';
import Products from './Products';
import Hero from '../components/Hero';

export default function Home(){
    return <Fragment>
        <Hero/>
        <Products />
    </Fragment>
}