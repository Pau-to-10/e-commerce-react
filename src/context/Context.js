import { createContext, useContext, useReducer, useEffect } from "react";
// import faker from "faker";
import { cartReducer, productReducer } from "./Reducers";
import axios from "axios";

// const initialState = {
//   loading: true,
//   error: "",
//   products: [],
//   cart: [],
// };

const Cart = createContext();
// faker.seed(99);

const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   inStock: faker.random.arrayElement([0, 3, 5, 6, 10]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  // }));
  // const url = "http://localhost:3001/products";

  // const fetchProducts = async () => {
  //   let request = await fetch(url);

  //   if (request.ok) {
  //     let data = await request.json();
  //   }
  // };
  // {
  //   products: products,
  //   cart: [],
  // }

  const [state, dispatch] = useReducer(cartReducer, {
    error: "",
    products: [],
    cart: [],
  });

  console.log(state);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error }); //hacer que se muestre el texto de error en pantalla.
      });
  }, []);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
