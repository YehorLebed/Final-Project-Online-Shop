import React, { useEffect } from 'react';
import './item-page.styles.css';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { actionAddToCart } from '../../redux/cart/cart.actions';
import { Carousel } from '../../components';
import { connect } from 'react-redux';
import ShopServices from '../../services/shopServices';
import { actionPromise } from '../../redux/promise/promise.actions';


const ItemPage = ({ match, notebook, onPageLoad, onAddToCart }) => {
  useEffect(() => { onPageLoad(parseInt(match.params.id)) }, []);

  if (!notebook) return "Spinner";

  console.log(notebook);

  const { id, title, price, description, images, processor, display, battery, ram, rom } = notebook;

  return (
    <div className="item-page">
      <div className="item-page-first-screen">
        <div className="item-page__image">
          <Carousel images={images} />
        </div>
        <div className="item-page-main-info">
          <div className="item-page__name">{title}</div>
          <div className="item-page-action-element">
            <div className="item-page__price">
              {price}
              <span className="item-page__price-currency">грн.</span>
            </div>
            <Link to="/cart">
              <button className="btn btn-success btn-lg"
                onClick={() => onAddToCart(id, title, price)}>
                Add to cart
            </button>
            </Link>
          </div>
        </div>
      </div>
      <h2 className="description-heading">Properties: </h2>
      <h4 className="item-page__description">
        Processor: {processor.title} | {processor.frequency}
      </h4>
      <h4 className="item-page__description">
        Display: {processor.frequency}' | {display.diagonal} | {display.matrix}
      </h4>
      <h4 className="item-page__description">
        Battery: {battery.capacity}mAh | {battery.time}h
      </h4>
      <h4 className="item-page__description">
        RAM: {rom.capacity}mb | {rom.type}
      </h4>
      <h4 className="item-page__description">
        ROM: {ram.capacity}gb | {ram.type}
      </h4>
      <h2 className="description-heading">Description: </h2>
      <h4 className="item-page__description">{description}</h4>
    </div>
  );
};

const mapStateToProps = state => ({
  notebook: state.responsedData && state.responsedData['currentNotebook'] && state.responsedData['currentNotebook'].payload
})

const mapDispatchToProps = dispatch => ({
  onPageLoad: (id) => dispatch(actionPromise('currentNotebook', ShopServices.getNotebookById(id))),
  onAddToCart: (id, title, price) => dispatch(actionAddToCart(id, title, price))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemPage));