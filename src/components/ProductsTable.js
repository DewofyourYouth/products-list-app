import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import ActionBar from './ActionBar';
import { getIndexByName } from '../helper-functions';
import { selectProduct, updateProduct } from '../actions';
import { ProductItemRow } from './ProductItemRow';

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = { productsList: [...this.props.products], term: '' };
  }

  sortConfig = msg => {
    switch (msg) {
      case 'product-name':
        this.setState({
          productsList: this.state.productsList.sort((a, b) => {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
        });
        break;
      case 'category':
        this.setState({
          productsList: this.props.products.sort((a, b) => {
            let categoryA = a.category.toLowerCase();
            let categoryB = b.category.toLowerCase();
            if (categoryA < categoryB) {
              return -1;
            }
            if (categoryA > categoryB) {
              return 1;
            }
            return 0;
          })
        });
        break;
      case 'price':
        this.setState({
          productsList: this.props.products.sort((a, b) => a.price - b.price)
        });
        break;
      case 'date':
        this.setState({
          productsList: this.props.products.sort(
            (a, b) =>
              new Date(a.created_date).getTime() -
              new Date(b.created_date).getTime()
          )
        });
        break;
      default:
        return;
    }
  };

  rowsSearchConfig = () => {
    if (this.state.term === '') {
      return this.props.products;
    } else {
      return this.props.products.filter(
        x => x.name.indexOf(this.state.term) !== -1
      );
    }
  };

  getSearchTerm = term => {
    this.forceUpdate(this.setState({ term: term }));
  };
  getSelectedProduct = product => {
    selectProduct(product);
    const prodIdx = getIndexByName(this.props.products, product);
    Swal.fire({
      title: `Edit Price: ${product}`,
      input: 'number',
      inputValue: this.props.products[prodIdx].price,
      inputValidator: value => {
        if (value <= 0) {
          return 'Must be above 0!';
        }
      }
    }).then(result => {
      if (result.value) {
        this.props.updateProduct({
          name: this.props.products[prodIdx].name,
          category: this.props.products[prodIdx].category,
          price: parseFloat(result.value),
          created_date: this.props.products[prodIdx].created_date
        });
      }
    });
  };
  render() {
    return (
      <div className="col-md-12">
        <ActionBar getTerm={this.getSearchTerm} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                Name {'  '}
                <button
                  className="btn btn-outline-info"
                  onClick={() => this.sortConfig('product-name')}
                >
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </th>
              <th>
                Category {'  '}
                <button
                  className="btn btn-outline-info"
                  onClick={() => this.sortConfig('category')}
                >
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </th>
              <th>
                Price {'  '}
                <button
                  className="btn btn-outline-info"
                  onClick={() => this.sortConfig('price')}
                >
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </th>
              <th>
                Created Date {'  '}
                <button
                  className="btn btn-outline-info"
                  onClick={() => this.sortConfig('date')}
                >
                  <FontAwesomeIcon icon={faSort} />
                </button>
              </th>
              <th>
                <button
                  className="btn btn-outline-info"
                  onClick={() => {
                    this.setState({
                      productsList: this.props.products.reverse()
                    });
                  }}
                >
                  Reverse
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.rowsSearchConfig().map(product => (
              <ProductItemRow
                key={product.name}
                item={product}
                product={this.getSelectedProduct}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { selectProduct, updateProduct })(
  ProductsTable
);
