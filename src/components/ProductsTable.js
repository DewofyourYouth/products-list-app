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
    this.state = {
      productsList: [...this.props.products],
      term: '',
      columnsConfig: [
        {
          name: 'Name',
          sortConfig: () => {
            this.setState({
              productsList: this.props.products.sort((a, b) => {
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
          }
        },
        {
          name: 'Category',
          sortConfig: () => {
            this.setState({
              productsList: this.props.products.sort((a, b) => {
                let catA = a.category.toLowerCase();
                let catB = b.category.toLowerCase();
                if (catA < catB) {
                  return -1;
                }
                if (catA > catB) {
                  return 1;
                }
                return 0;
              })
            });
          }
        },
        {
          name: 'Price',
          sortConfig: () => {
            this.setState({
              productsList: this.props.products.sort(
                (a, b) => a.price - b.price
              )
            });
          }
        },
        {
          name: 'Created Date',
          sortConfig: () => {
            this.setState({
              productsList: this.props.products.sort(
                (a, b) =>
                  new Date(a.created_date).getTime() -
                  new Date(b.created_date).getTime()
              )
            });
          }
        }
      ]
    };
  }

  sortConfig = row => {
    switch (row) {
      case 'product-name':
        this.setState({
          productsList: this.props.products.sort((a, b) => {
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
        console.log('sort');
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

  showSearchTerm = () => {
    if (this.state.term === '') {
      return;
    }
    return (
      <p>
        You've searched: "{this.state.term}" {'  '}
        <button
          className="btn btn-sm btn-info"
          onClick={() => this.setState({ term: '' })}
        >
          clear search
        </button>
      </p>
    );
  };

  rowsSearchConfig = () => {
    if (this.state.term === '') {
      return this.props.products;
    } else {
      return this.props.products.filter(
        x => x.name.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1
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
      if (
        result.value &&
        this.props.products[prodIdx].price !== parseFloat(result.value)
      ) {
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
        {this.showSearchTerm()}
        <table className="table table-striped">
          <thead>
            <tr>
              {this.state.columnsConfig.map(col => (
                <th>
                  {col.name}{' '}
                  <button
                    className="btn btn-outline-info"
                    onClick={() => col.sortConfig()}
                  >
                    <FontAwesomeIcon icon={faSort} />
                  </button>
                </th>
              ))}
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
