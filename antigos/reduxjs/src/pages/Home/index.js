import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';
import * as CartActions from '~/store/modules/cart/actions';

import api from '~/services/api';

function Home({ addToCart, amount }) {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');
      const data = response.data.map((prod) => ({
        ...prod,
        priceFormatted: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(prod.price),
      }));
      setProds(data);
    }
    getProducts();
  }, []);

  function handleAddCart(prod) {
    addToCart(prod);
  }
  return (
    <ProductList>
      {prods.map((prod) => (
        <li key={prod.id}>
          <img src={prod.image} alt={prod.title} />
          <strong>{prod.title}</strong>
          <span>{prod.priceFormatted}</span>
          <button type="button" onClick={() => handleAddCart(prod)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[prod.id] || 0}
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, prod) => {
    amount[prod.id] = prod.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
