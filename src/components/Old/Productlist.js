import React from "react";
import Card from "react-bootstrap/Card";
import './productList.css';


class Productlist extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://cms.meamacollect.ge/meama-collect/api/client/ka")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
       
      });
    }
    
    render() {
      
      const { DataisLoaded, items } = this.state;
   
    
    
    if (!DataisLoaded )
      return (
        <div>
          <h1> Pleses wait some time.... </h1>
        </div>
      );

     
    
    
     let result = items.map(item => {
          return item.products.length === 0 ? (
            <div className="1">
              <div className="2">
                <div className="3">
                  <h1 className={item.name}>{item.name}</h1>

                  <div className="four">
                    {item.subCategories.map((subCategory) => (
                      <div className="5">
                        <div className="subCategoryName">
                          <h5 className={subCategory.name}>
                            {subCategory.name}
                          </h5>
                        </div>
                        <div className="zzzzzz">
                          <div className="subCategoryImg">
                            {subCategory.products.map((subproduct) => (
                              <div>
                                <Card
                                  style={{
                                    backgroundColor: subproduct.bgColor, // !!!remember
                                  }}
                                  className="productListContent"
                                >
                                  <Card.Img
                                    variant="top"
                                    src={subproduct.mainPhoto}
                                  />
                                  <Card.Body>
                                    <Card.Title>{subproduct.name}</Card.Title>
                                  </Card.Body>
                                </Card>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div> // meore option
          ) : (
            <div className="productList">
              {/* <h1>{item.name}</h1> */}
              <div>
                <h1>{item.name}</h1>
                <div className="prd">
                  <div className="productListDiv">
                    {item.products.map((product) => (
                      <Card
                        style={{
                          backgroundColor: product.bgColor, // !!!remember
                        }}
                        className="productListContent"
                      >
                        <Card.Img variant="top" src={product.mainPhoto} />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>

                          <Card.Text>{product.price + "ლ"}</Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
            
          
        })
    
    
      
    
    
 
    
    
    return <div>{result}</div>


  }
}

export default Productlist;
