import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import CategoryList from "./CatogoriList";
import ProductList from "./ProcutList";
import Navi from "./Navi";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };
  componentDidMount() {
    this.getProducts();
  }
  addToCard = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c=> c.product.id === product.id)
    if(addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:4000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  };
  render() {
    let categoryItem = {
      title: "Category Item",
      product: "Macbook Pro 2020"
    };

    let productItem = {
      title: "Product Item"
    };
    return (
      <div>
        <Container>
          <Col xs="12">
            <Navi cart={this.state.cart}/>
          </Col>
          <Row className="bodycim">
            <Col xs="2">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                className="genis"
                info={categoryItem}
              />
            </Col>
            <Col xs="10">
              <ProductList
                addToCard={this.addToCard}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productItem}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
