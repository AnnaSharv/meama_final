import React, {Component} from "react";
import { useHistory, useParams, useLocation } from 'react-router-dom';

import Header from "../components/Common/Header";
import Product from "../components/Product";


class DetailProduct extends Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
        	id: null,
            product: [],
            dataisLoaded: false,
        };
    }

    componentDidMount() {
    	//let { id } = useParams();
    	//console.log(id);
    }

    render() 
    {
    	
        const { dataisLoaded, product } = this.state

        /*if (!dataisLoaded)
        return (
            <div>
              <h1> Pleses wait some time.... </h1>
            </div>
        )*/

        /*console.log('Home')
        console.log(product)*/
      
        return (
			<>
				<h2>id</h2>
				<Header />
				<Product />
			</>
		)
    }

    componentDidMount() 
    {
        //this.handleClick()
    }

    handleClick = () =>
    {
        fetch("https://cms.meamacollect.ge/meama-collect/api/client/ka")
            .then((res) => res.json())
            .then((obj) => {

                const products = obj[1]

                this.setState({
                  product: products,
                  dataisLoaded: true,
                });
         
        });
    }
}

export default DetailProduct;
