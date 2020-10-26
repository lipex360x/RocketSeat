import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import formatPrice from '~/utils/formatPrice';

import * as CartActions from '~/store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ prod, total, removeFromCart, updateAmount, clearCart }) {
  function decrement(prod) {
    updateAmount(prod.id, prod.amount + 1);
  }

  function increment(prod) {
    updateAmount(prod.id, prod.amount - 1);
  }

  function handleDelete(id) {
    removeFromCart(id);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {prod.map((p) => (
            <tr key={p.id}>
              <td>
                <img src={p.image} alt={p.title} />
              </td>
              <td>
                <strong>{p.title}</strong>
                <span>{formatPrice(p.price)}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => increment(p)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={p.amount} />

                  <button type="button" onClick={() => decrement(p)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>

              <td>
                <strong>{p.subtotal}</strong>
              </td>

              <td>
                <button type="button" onClick={() => handleDelete(p.id)}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <div>
          <button type="button">Finalizar Pedido</button>
          <button
            type="button"
            className="btn-clean"
            onClick={() => clearCart()}
          >
            Limpar Carrinho
          </button>
        </div>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

const mapStateToProps = (state) => ({
  prod: state.cart.map((p) => ({
    ...p,
    subtotal: formatPrice(p.price * p.amount),
  })),

  total: formatPrice(
    state.cart.reduce((total, prod) => {
      return total + prod.price * prod.amount;
    }, 0)
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
