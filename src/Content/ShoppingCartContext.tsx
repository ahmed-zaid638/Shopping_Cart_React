import { createContext, ReactNode, useContext } from "react";
type ShoppingCartContext = {
  // openCart: () => void;
  // closeCart: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProviderProps = {
  childrens? :ReactNode 
};

export function ShoppingCartProvider({ childrens }: ShoppingCartProviderProps) {
  return (
    <>
      <ShoppingCartContext.Provider value={{}} >
        {childrens}
      </ShoppingCartContext.Provider>
    </>
  );
}











