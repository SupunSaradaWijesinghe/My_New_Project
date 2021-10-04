import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'


function Header() {
    const auth = useSelector(state => state.auth)
    
    const {user, isLogged} = auth 

    const handleLogout = async () => {
        try {
             await axios.get('/user/logout')
             localStorage.removeItem('firstLogin')
             window.location.href = "/";
        }catch (err) {
             window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className = "drop-nav">
            <Link to = "#" className ="avatar" >
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "tranlateY(-5px)": 0
    }

    return(
       <header>
           <div className = "logo">
               <h1><Link to="/">Island Wide Offers</Link></h1>

    

           </div>
       
             <ul style = {transForm}>
                 <li><Link to="/"><i className="fas fa-home"></i> <span style={{ marginLeft: "10px" }}>
				Home
				</span></Link></li>
                 <li><Link to="/"><i className="far fa-address-book"></i><span style={{ marginLeft: "10px" }}>
				About US</span></Link></li>
                 <li><Link to="/"><i className="fas fa-dollar-sign"></i><span style={{ marginLeft: "10px" }}>
				 Offers</span></Link></li>

               
                <li> <input type ="search" placeholder="Search here" id="search"
                 /><Link to="/"><span style={{ marginLeft: "10px" }}><i className="fas fa-search"></i>
                 </span></Link></li>

                 {
                     isLogged
                     ? userLink()
                     :<li><Link to="/login"><i className="fas fa-user"></i>Sign in</Link></li>
                 }
                 
             </ul>


       </header>
    )
}

export default Header