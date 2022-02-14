import React from "react";
import Card from "react-bootstrap/Card";
import './bottomproductlist.css';
import Cart from "../Cart";

class BottomProducts extends React.Component {
   
   

    render() 
    {
       
        const { bottomProducts } = this.props
      
        var bottomP = []
       
    
        bottomProducts.products.map((product, prodIndex) => {
        return bottomP.push(
					<Cart key={prodIndex} product={product} />
				)
       }, [])
      
        return (
            <div className="bottomproductList">
               
               <h1>{bottomProducts.name}</h1>
               <div className="bottomProductContent"> {bottomP} </div>
               
            </div>
        )
    }

 
  
}

export default BottomProducts;
