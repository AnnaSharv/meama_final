import React, {Component} from "react";

import './productList.css';

class Product extends Component
{
	constructor(props) {
	    super(props)

	    this.state = {
	      isOpen: false
	    }
	 }

    render() {
    	const { products } = this.props

    	const body = this.state.isOpen && <section>xxxxx</section>

    	return (
	    	<div>
	    		<h2>xxx</h2>
	    		{body}
	    		<button onClick={this.handleClick}>
	    			{this.state.isOpen ? 'Close' : 'Open'}
	    		</button>
	    	</div>
    	)

    }

    handleClick = () =>
	{
		console.log('click');
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Product



