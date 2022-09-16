import { createContext, ReactNode, useEffect, useReducer } from 'react';

import axios from 'axios';

type ProductType = {
  imgSrc: string;
  name: string;
  price: string;
  amount?: number;
};

interface PurchaseContextProps {
  cart: ProductType[];
  addToCart: () => void;
  completeOrder: () => void;
  removeFromCart: () => void;
}

interface PurchaseContextProviderProps {
  children: ReactNode;
}

export const PurchaseContext = createContext({} as PurchaseContextProps);

export const PurchaseProvider = ({
  children,
}: PurchaseContextProviderProps) => {
  const [purchaseState, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'SET_RECOVERED_VALUE': {
          return action.payload.cart;
        }

        default:
          return state;
      }
    },
    {
      cart: [],
    },
  );

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem('@ignite-shop/purchase');

    if (storedStateAsJSON) {
      dispatch({
        type: 'SET_RECOVERED_VALUE',
        payload: {
          cart: JSON.parse(storedStateAsJSON),
        },
      });
    }
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(purchaseState);

    localStorage.setItem('@ignite-shop/purchase', stateJSON);
  }, [purchaseState]);

  const { cart } = purchaseState;

  const addToCart = () => {};

  const removeFromCart = () => {};

  const completeOrder = () => {};

  const buyProduct = () => {
    // const handleBuyProduct = async () => {
    //   try {
    //     setIsCreatingCheckoutSession(true);
    //     const resp = await axios.post('/api/checkout', {
    //       priceId: product.defaultPriceId,
    //     });
    //     const { checkoutUrl } = resp.data;
    //     // router.push('/checkout') Para rotas internas
    //     window.location.href = checkoutUrl; // Para rotas externas
    //   } catch (error) {
    //     // Conectar com ferramenta de observabilidade (Datadog / Sentry)
    //     setIsCreatingCheckoutSession(false);
    //     alert('Falha ao realizar compra!');
    //   }
    // };
  };

  return (
    <PurchaseContext.Provider
      value={{ cart, addToCart, removeFromCart, completeOrder }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};
