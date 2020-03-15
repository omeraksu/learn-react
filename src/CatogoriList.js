import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CatogoriList extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:4000/categories")
      .then(res => res.json())
      .then(data => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h5 className="area">{this.props.info.title}</h5>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              className="item"
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
