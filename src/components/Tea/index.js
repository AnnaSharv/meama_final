import React, { Component } from "react";

import Cart from "../Cart";
//import "./style.css";

class Tea extends Component
{
	constructor(props) 
    {
        super(props)

        this.state = {}
    }

	render()
	{
		const { teaProducts } = this.props
		var subCategories = teaProducts.subCategories

		var navElement = []
		var tabElement = []

		//parse json
		subCategories.map((category, catIndex) => {
			navElement.push(
				<li key={catIndex} className="nav-item">
					<a className={(catIndex===0) ? "nav-link active" : "nav-link"} data-bs-toggle="pill" href={"#cat-" + catIndex}>{category.name}</a>
				</li>
			)

			var carts = []
			category.products.map((product, prodIndex) => 
				carts.push(
					<Cart key={prodIndex} product={product} />
				)
			)

			tabElement.push(
				<div  key={catIndex} className={(catIndex===0) ? "tab-pane container bg-nav-active active" : "tab-pane container fade"} id={"cat-" + catIndex}>
					<div className="scrolling-wrapper-flexbox">
						{carts}
					</div>
				</div>
			)
		})

		return (
			<div>
				<h1 className="catPtitle">{teaProducts.name}</h1> 
				<ul className="nav nav-pills catPul">
					{ navElement }
				</ul>

				<div className="tab-content">
					{ tabElement }
				</div>
				
			</div>

		)
	}
}


export default Tea