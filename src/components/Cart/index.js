import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'

import "./style.css";

export default function Cart({product})
{
	//console.log(props);
	//var { product } = props.product
	//var description = <div dangerouslySetInnerHTML={{ __html: product.description }} />
	
	return (
	
			<Card style={{ width: '18rem' }} className="card productCard" style={{ backgroundColor: product.bgColor }}>
			<Link to="/product" className="mx-auto">
		  		<Card.Img variant="top" src={product.mainPhoto}  alt={product.name} />
			</Link>
				
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					<Card.Text>
					{product.price + 'ლ'}
					</Card.Text>
					
				</Card.Body>
			</Card>
		
	)
}