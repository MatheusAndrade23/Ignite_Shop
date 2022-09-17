import {
  NavContainer,
  ProductsContainer,
  InfoContainer,
  ProductContainer,
  ImageContainer,
} from '../styles/components/Nav';

interface NavProps {
  show: boolean;
  closeNav: () => void;
}

import camiseta1 from '../assets/t-shirts/2.png';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import Image from 'next/future/image';

import { useContext, useState } from 'react';

import { PurchaseContext } from '../providers/Purchase';

export const Nav = ({ show, closeNav }: NavProps) => {
  const { cart, buyProduct, total } = useContext(PurchaseContext);

  const handleCloseNav = () => {
    closeNav();
  };

  const handleBuyProduct = () => {
    buyProduct();
  };

  return (
    <NavContainer transform={show ? 'show' : 'hidden'}>
      <header>
        <h4>Sacola de Compras</h4>
        <button onClick={handleCloseNav}>
          <AiOutlineCloseCircle />
        </button>
      </header>
      <ProductsContainer>
        {cart.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductsContainer>
      <InfoContainer>
        <div>
          <span>Quantidade</span>
          <span>{cart.length} itens</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(total)}
          </strong>
        </div>
      </InfoContainer>
      <button onClick={handleBuyProduct}>Finalizar Compra</button>
    </NavContainer>
  );
};

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

const Product = ({ id, name, imageUrl, price }: ProductProps) => {
  const { removeFromCart } = useContext(PurchaseContext);

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={imageUrl} height={94.79} width={94.79} alt={name} />
      </ImageContainer>
      <div>
        <h4>{name}</h4>
        <strong>{price}</strong>
        <button onClick={handleRemoveFromCart}>Remover</button>
      </div>
    </ProductContainer>
  );
};
