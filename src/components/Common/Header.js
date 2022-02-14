import React, { Component} from 'react';
import { Form } from "react-bootstrap";

import './header.css'


export class Header extends Component {
  
  constructor(props) {
    super(props)
    this.state = {lang:'ka'}

  }
  changeLang = (e) => {
    this.setState({lang: e.target.value})
  }
  
  render() {
    console.log(this.state.lang)
          return <div className="header">
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
  }
}

export default Header

