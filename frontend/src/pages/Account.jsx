import { Link, useNavigate } from 'react-router-dom'
import '../styles/Account.css';
import { IoCart, IoCheckmarkCircle, IoCog, IoPeople } from 'react-icons/io5'
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';


export const Account = () => {
    const  navigate = useNavigate();
    const {accountDetails,setAcountDetails} = useContext(DataContext);
    const [tempDetails,setTempDetails]=useState({
        name: '',
        email:'',
        phoneno: '',
        dateOfBirth:'',
        city:'',
        pincode: ''
        });
        const [showForm, setShowForm] = useState(false);    
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setTempDetails((prevValues) => ({
              ...prevValues,
              [name]: value
            }));
          };
        const hanldeSumbit= (e)=>{
            e.preventDefault();
            setAcountDetails(tempDetails);
            setShowForm(false);
        } 
    return <>
        {accountDetails.email  ?  ( <section className="account-container">
            <div className="account-details">
                <div className="user-image">
                    <img src="profile/add-new-icon.jpg" alt="account" title="account" className="account-img" />
                </div>
                <div className="user-details">
                    <h2 >{accountDetails.name}</h2>
                    <p>{accountDetails.email }</p>
                </div>
                <div className='btn-grp'>
                <button className='btn'  onClick={()=>setShowForm(true)}>Edit details</button>
                <button className='btn plain'  onClick={()=>setAcountDetails({})}>Log out</button>
                </div>
            </div>
            {showForm && 
            <>
            <div className="blur"></div>
            <form className="account-details-form"  onSubmit={hanldeSumbit}>
            <div className="input-grp">
                <label htmlFor="customer-name">Name:</label>
                <input type="text" title="name" name="name" id="name" placeholder="Eg.John" required  onChange={handleInputChange}/>
            </div>
            <div className="input-grp">
                <label htmlFor="customer-phone-no">Phone Number:</label>
                <input type="text" title="phone-no" name="phoneno" id="phoneno" placeholder="Eg.9876543210" required   onChange={handleInputChange}/>
            </div>
            <div className="input-grp">
                <label htmlFor="customer-email">Email:</label>
                <input type="text" title="email" name="email" id="email" placeholder="Eg.john@gmail.com" required  onChange={handleInputChange}/>
            </div>
            <div className="input-grp">
                <label htmlFor="customer-date-of-birth">Date Of Birth</label>
                <input type="date" title="date-of-birth" name="dateOfBirth" id="date-of-birth" placeholder="Eg.00/00/0000" required  onChange={handleInputChange}/>
            </div>
            <div className="input-grp">
                <label htmlFor="customer-city">City:</label>
                <input type="text" title="customer-city" name="city" id="city" placeholder="Eg.Chennai" required  onChange={handleInputChange}/>
            </div>
            <div className="input-grp">
                <label htmlFor="customer-city-pincode">Pincode:</label>
                <input type="text" title="customer-city-pincode" name="pincode" id="pincode"
                    placeholder="Eg.600 028" required  onChange={handleInputChange} />
            </div>
            <div className="input-btn">
                <button className='btn plain' type='button' onClick={()=>setShowForm(false)}>Cancel</button>
                <button type="submit" className="btn" title="contiue" >comfirm</button>
            </div>
        </form>
        </>
        } 
            <ul className="account-options">
                <Link to={'/cart'}>
                    <li>
                        <IoCart className='ion-icon' />
                        <span>Cart</span>
                    </li>
                </Link>
                <Link to={'/orders'}>
                    <li>
                        <IoCheckmarkCircle className='ion-icon' />
                        <span>Orders</span>
                    </li>
                </Link>
                <li>
                    <IoPeople className='ion-icon' />
                    <span>Customer Care</span></li>
                <li>
                    <IoCog className='ion-icon' />
                    <span>Settings</span> </li>
            </ul>
        </section>)
        :
       ( <section className='account-sign-container'>
             <div className="user-image">
                    <img src="profile/add-new-icon.jpg" alt="account" title="account" className="account-img" />
            </div>
            <div className="user-details">
                    <h2 >Welcome</h2>
                </div>
            <div>
            <button className='btn' onClick={()=> navigate('signin')}>Sign in</button>
            <button className='btn plain' onClick={()=> navigate('signup')}>Sign up</button>
            </div>
        </section>)
    }
    </>
}

