import React from "react";
import Card from "react-bootstrap/Card";
import './topproductlist.css';
import Cart from "../Cart";

class TopProducts extends React.Component {
    // constructor(props) 
    // {
    //     super(props);

    //     this.state = {
    //         topProducts: [],
         
    //         dataisLoaded: false,
    //     };
    // }

   
    
    render() 
    {
      const { topProducts } = this.props
       var topP = []
       
    
       topProducts.products.map((product, prodIndex) => {
        return topP.push(
					<Cart key={prodIndex} product={product} />
				)
       }, [])
      
        return (
            <div className="topproductList productList">
               
               <h1>{topProducts.name}</h1>
               <div className="topProductContent"> {topP} </div>
               
            </div>
        )
    }

    // componentDidMount() 
    // {
    //     this.handleClick()
    // }

    // handleClick = () =>
    // {
    //     fetch("https://cms.meamacollect.ge/meama-collect/api/client/ka")
    //         .then((res) => res.json())
    //         .then((obj) => {
              
    //             const products = obj[0]

    //             this.setState({
                  
    //               topProducts: products,
    //               dataisLoaded: true,
    //             });
         
    //     });
    // }
}

export default TopProducts;
