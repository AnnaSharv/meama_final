import React from "react";
import Card from "react-bootstrap/Card";
import './cookies.css';
import Cart from "../Cart";

class Cookies extends React.Component {
   
   

    render() 
    {
       
        const { cookieProducts } = this.props
      
        
        var cookiesP = []
       
    
        cookieProducts.products.map((product, prodIndex) => {
        return cookiesP.push(
					<Cart key={prodIndex} product={product} />
				)
       }, [])
      
        return (
            <div className=" cookiesproductList">
               
               <h1>{cookieProducts.name}</h1>
               <div className="cookieProductContent"> {cookiesP} </div>
               
            </div>
        )
    }

 
  
}

export default Cookies;
