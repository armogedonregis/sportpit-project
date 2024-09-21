'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/types/product';

interface CartItem extends Product {
  quantity: number;
}

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

type CartDispatch = (action: CartAction) => void;

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      parsedCart.forEach((item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}