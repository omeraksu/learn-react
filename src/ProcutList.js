import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProcutList extends Component {
  render() {
    return (
      <div>
        <h5 className="area">
          {this.props.info.title} - {this.props.currentCategory}
        </h5>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <th>{product.productName}</th>
                <th>{product.unitPrice}</th>
                <th>{product.quantityPerUnit}</th>
                <th>{product.unitsInStock}</th>
                <th>
                  <Button onClick={() => this.props.addToCard(product)} color="info">add</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
