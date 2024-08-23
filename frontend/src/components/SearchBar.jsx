import '../styles/SearchBar.css';
import { Fragment, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {IoSearchSharp} from 'react-icons/io5'


export default function SearchBar(){
    const navigate = useNavigate()
    const [keyword,setKeyword]=useState(null);
    const navigateHandler=(e)=>{
        e.preventDefault()
        keyword &&
        navigate('/search?keyword='+keyword);
    }
    return <Fragment>
          <div className="search-box">
            <form onSubmit={(e)=>navigateHandler(e)}>
                <button type='submit' id="search-btn" className='search-btn' onClick={navigateHandler} >
                <IoSearchSharp className='ion-icon'/>
                </button>
                <input type="text" name="keyword" id="search-box" title="search" placeholder='Search'  onChange={(e)=>setKeyword(e.target.value)} />
            </form>
            </div>
    </Fragment>
}