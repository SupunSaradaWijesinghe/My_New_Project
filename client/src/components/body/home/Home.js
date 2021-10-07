import React from 'react'
import {Link} from 'react-router-dom'





import './home.css'



function Home() {
    return (
    
      

        <div className="home_page">
            
            <h2>Welcome to Island Wide Offers!</h2>
            <p>
                Promotions Directory with Latest Offers and Promotions from Travel
                Agents, Hotels, Banks, Credit Cards offers, Hotel Deals, Food Promotions, Clothing Offers, Mobile Phones Deals,
                Latest Events, Holiday Deals, Education Opportunities and Top Jobs
            </p>



    

            <ul>
                <li><Link to="/"><i className="fas fa-edit"></i><span style={{ marginLeft: "10px" }}>
                    <button type="submit">Customer Request</button></span></Link></li>
            </ul>


            <ul>
                <li><Link to="/"><i className="fas fa-pizza-slice"></i><span style={{ marginLeft: "10px" }}><button type="submit">Food & Beverage</button></span></Link></li>
            </ul>

            <ul>
                <li><Link to="/"><i className="fas fa-mobile-alt"></i><span style={{ marginLeft: "10px" }}><button type="submit">Electrical & Electronic</button></span></Link></li>
            </ul>

            <br></br>
            <ul>
                <li><Link to="/"><i className="fas fa-utensils"></i><span style={{ marginLeft: "10px" }}><button type="submit">Restuarunt & Accomodation</button></span></Link></li>
            </ul>



            <ul>
                <li><Link to="/"><i className="fas fa-tshirt"></i><span style={{ marginLeft: "10px" }}><button type="submit">Texttile & Cosmetics</button></span></Link></li>
            </ul>


            <ul>
                <li><Link to="/"><i class="fas fa-user-graduate"></i><span style={{ marginLeft: "10px" }}><button type="submit">Services & Education</button></span></Link></li>
            </ul>
  
        </div>
       
        
    )
}

export default Home