// // src/AppContext.js
// import React, { createContext, useState, useEffect } from 'react';

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   // State variables for the application
//   const [allProducts, setAllProducts] = useState([]);
//   const [allReviews, setAllReviews] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);


// //Authentication system


//   const login = (username, password) => {
//     if (username === 'user' && password === 'password') {
//       setUser({ username });
//       return true;
//     }
//     return false;
//   };

//   const signup = (username, password) => {
//     if (username && password) {
//       setUser({ username });
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   // Fetch all products from an API
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => {
//         setAllProducts(data);
//         setAllReviews(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//         setLoading(false);
//       });
//   }, []);

//   // Add product to cart
//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   // Remove product from cart
//   const removeFromCart = (product) => {
//     setCartItems(cartItems.filter(item => item.id !== product.id));
//   };

//   // Get total number of items in the cart
//   const getTotalCartItems = () => {
//     return cartItems.length;
//   };

//   return (
//     <AppContext.Provider value={{ getTotalCartItems,signup,login,logout, allProducts,allReviews ,cartItems, addToCart, removeFromCart, loading }}>
//       {children}
//     </AppContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import data_product from './Components/Assets/data';
import new_collections from './Components/Assets/new_collections';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // State variables for the application
  const [allProducts, setAllProducts] = useState([]);
  const [allReviews, setAllReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Check local storage for user authentication on application load
  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  const login = (email, password) => {
    const signupData = JSON.parse(localStorage.getItem('user'));
    
    if (signupData && signupData.email === email && signupData.password === password) {
      const user = { email,password};
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
  
      return true;
    }
  
    return false;
  };

  const signup = (username,email ,password) => {
    if (username && email && password) {
      const user = { username,email,password };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.error('Logout successful!');
  };

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
      .then(data => {
        setAllProducts(data);
        setAllReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Add product to cart
  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  // const addToCart = (productId) => {
  //   const product = allProducts.find(p => p.id === productId);
  //   if (product) {
  //     setCartItems([...cartItems, product]);
  //   }
  // };
  const totalProducts = [...allProducts, ...data_product,...new_collections];
  const addToCart = (productId) => {
    // const product = allProducts.find(p => p.id === productId);
    const product = totalProducts.find(p => p.id === productId);
    if (product) {
      setCartItems(prevItems => {
        const existingProduct = prevItems.find(item => item.id === productId);
        if (existingProduct) {
          // Update the quantity if the product already exists in the cart
          return prevItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          // Add the product to the cart with an initial quantity of 1
          return [...prevItems, { ...product, quantity: 1 }];
        }
      });
    }
  };

  //Remove product from cart
  // const removeFromCart = (product) => {
  //   setCartItems(cartItems.filter(item => item.id !== product.id));
  // };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const existingProduct = prevItems.find(item => item.id === productId);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          // Decrement the quantity if more than 1
          return prevItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          // Remove the product if the quantity is 1
          return prevItems.filter(item => item.id !== productId);
        }
      }
      return prevItems;
    });
  };
  

  // Get total number of items in the cart
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  

  return (
    <AppContext.Provider value={{ signup, login, logout, allProducts,user, allReviews, cartItems, addToCart, removeFromCart, getTotalCartItems,loading }}>
      {children}
    </AppContext.Provider>
  );
};