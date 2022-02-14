import React from "react";

//import Header from "../components/Common/Header";
//import Card from "react-bootstrap/Card";
import TopProducts from "../components/TopProducts";
import CatProducts from "../components/CatProducts";
import TeaProducts from "../components/Tea"
import Cookies from '../components/Cookies'
import BottomProducts from "../components/BottomProducts";
import { Form } from "react-bootstrap";
//import Productlist from "../components/Old/Productlist";


class Home extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            catProducts: [],
         
            dataisLoaded: false,
            lang:'ka'
        };
    }

    changeLang = (e) => {
        this.setState({lang: e.target.value})
    }

    render() 
    {
        const { dataisLoaded, catProducts, topProducts, teaProducts, cookieProducts, bottomProducts } = this.state
       
        if (!dataisLoaded)
        return (
            <div>
              <h1> Please wait some time.... </h1>
            </div>
        )

       
      
        return (
            <div>
                <div className="header">
            <div>
              <img src="./images/logo_meama.png" alt="logo" />
            </div>
            <Form.Select
              aria-label="Default select example"
              size="sm"
              className="select"
             value={this.lang}
              onChange={this.changeLang}
            >

              <option value="ka">ქა</option>
              <option value="en">ENG</option>
            </Form.Select>

            </div>
                <TopProducts topProducts={topProducts} />
                <CatProducts catProducts={catProducts} />
                <TeaProducts teaProducts={teaProducts} />
                <Cookies cookieProducts={cookieProducts}/>
                <BottomProducts bottomProducts={bottomProducts} />
            </div>
        )
    }

    componentDidMount() 
    {
        this.handleClick()
        alert('xx')
    }

    handleClick = () =>
    {
        fetch(`https://cms.meamacollect.ge/meama-collect/api/client/${this.state.lang}`)
            .then((res) => res.json())
            .then((obj) => {
              
                const topProducts = obj[0] //yava topproduct
                const products = obj[1] //meama kokqteilebi 
                const teaProducts = obj[2] //tea
                const cookieProducts = obj[3] // cookies
                const bottomProducts = obj[4] // meama prods
                
                
                this.setState({
                  
                  topProducts: topProducts ,
                  catProducts: products,
                  teaProducts:teaProducts,
                  cookieProducts:cookieProducts,
                  bottomProducts:bottomProducts,
                  dataisLoaded: true,
                });
         
                //console.log(topProducts, products, teaProducts, cookieProducts, bottomProducts)
                
        });
    }

    
}

export default Home;
