import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import NoPage from "./pages/NoPage";

class App extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = { };
    }

    render()
    {
        return (
            <BrowserRouter>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="/product/:id" element={<DetailProduct />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
        )
    }
}

export default App;
