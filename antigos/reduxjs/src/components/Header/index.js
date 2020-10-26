import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import * as CartActions from '~/store/modules/cart/actions';
import formatPrice from '~/utils/formatPrice';

import logo from '~/assets/logo.svg';

import { Container, Cart } from './styles';

function Header({ cartSize, total }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>
            {cartSize} Itens || {total}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
  total: formatPrice(
    state.cart.reduce((total, prod) => {
      return total + prod.price * prod.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps)(Header);
