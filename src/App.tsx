// import React, { Component } from 'react';
// import Header from './Components/EcommerceApp/Header'; // Adjust the import path as necessary
// import ProductList from './Components/EcommerceApp/ProductList'; // Adjust the import path as necessary
// // import { Box } from '@mui/material';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HeroSection from './Components/EcommerceApp/HeroSection';
// // import ProductDetail from './Components/EcommerceApp/ProductDetail';
// import ProductDetailWrapper from './Components/EcommerceApp/ProductDetailWrapper';

// interface State {
//   cartItems: number;
//   favoriteItems: number;
// }

// class App extends Component<{}, State> {
//   state: State = {
//     cartItems: 0,
//     favoriteItems: 0,
//   };

//   handleAddToCart = () => {
//     this.setState((prevState) => ({ cartItems: prevState.cartItems + 1 }));
//   };

//   handleAddToFavorite = () => {
//     this.setState((prevState) => ({ favoriteItems: prevState.favoriteItems + 1 }));
//   };

//   render() {
//     const { cartItems, favoriteItems } = this.state;

//     return (
//       <div>
//         <Header cartItems={cartItems} favoriteItems={favoriteItems} />
//         <HeroSection/>
//         <Router>
//         <Routes>
//         <Route path="/" element={<ProductList />} />
//           <Route path="/product/:id" element={<ProductDetailWrapper />} />
//         </Routes>
//       </Router>
        
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import Header from './Components/EcommerceApp/Header'; // Adjust the import path as necessary
// import ProductList from './Components/EcommerceApp/ProductList'; // Adjust the import path as necessary
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HeroSection from './Components/EcommerceApp/HeroSection';
// import ProductDetailWrapper from './Components/EcommerceApp/ProductDetailWrapper';
// import Favorites from './Components/EcommerceApp/Favorites'; // Adjust the import path as necessary

// interface State {
//   cartItems: number;
//   favoriteItems: number[];
// }

// class App extends Component<{}, State> {
//   state: State = {
//     cartItems: 0,
//     favoriteItems: [],
//   };

//   handleAddToCart = () => {
//     this.setState((prevState) => ({ cartItems: prevState.cartItems + 1 }));
//   };

//   handleFavoriteToggle = (productId: number) => {
//     this.setState((prevState) => {
//       const favoriteItems = prevState.favoriteItems.includes(productId)
//         ? prevState.favoriteItems.filter(id => id !== productId)
//         : [...prevState.favoriteItems, productId];
//       return { favoriteItems };
//     });
//   };
//   // updateFavorites = (favoriteItems: number[]) => {
//   //   this.setState({ favoriteItems });
//   // };
//    updateFavorites = (favoriteItems: number[]) => {
//     this.setState({favoriteItems});
//    }
//   render() {
//     const { cartItems, favoriteItems } = this.state;

//     return (
//       <Router>
//         <Header cartItems={cartItems} favoriteItems={favoriteItems.length} />
//         <HeroSection />
//         <Routes>
//           <Route path="/" element={<ProductList 
//             favoriteItems={favoriteItems}
//             // onAddToCart={this.handleAddToCart}
//             onFavoriteToggle={this.handleFavoriteToggle}
//           />} />
//           <Route path="/product/:id" element={<ProductDetailWrapper />} />
//           <Route path="/favorites" element={<Favorites favoriteItems={favoriteItems}  updateFavorites={this.updateFavorites}/>} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/EcommerceApp/Header';
import ProductList from './Components/EcommerceApp/ProductList';
import HeroSection from './Components/EcommerceApp/HeroSection';
import ProductDetailWrapper from './Components/EcommerceApp/ProductDetailWrapper';
import Favorites from './Components/EcommerceApp/Favorites';
import Cart from './Components/EcommerceApp/Cart'; // Import the Cart component

import { Product } from './Components/EcommerceApp/ProductDetail'; // Import the Product type

interface State {
  cartItems: Product[];
  favoriteItems: number[];
}

class App extends Component<{}, State> {
  state: State = {
    cartItems: [],
    favoriteItems: [],
  };

  handleAddToCart = (product: Product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product]
    }));
  };
  
  handleRemoveFromCart = (productId: number) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter(item => item.id !== productId)
    }));
  };

  handleFavoriteToggle = (productId: number) => {
    this.setState((prevState) => {
      const favoriteItems = prevState.favoriteItems.includes(productId)
        ? prevState.favoriteItems.filter(id => id !== productId)
        : [...prevState.favoriteItems, productId];
      return { favoriteItems };
    });
  };

  updateFavorites = (favoriteItems: number[]) => {
    this.setState({ favoriteItems });
  }

  render() {
    const { cartItems, favoriteItems } = this.state;

    return (
      <Router>
        <Header cartItems={cartItems.length} favoriteItems={favoriteItems.length} />
        <HeroSection />
        <Routes>
          <Route path="/" element={
            <ProductList 
              favoriteItems={favoriteItems}
              onFavoriteToggle={this.handleFavoriteToggle}
            />
          } />
          <Route path="/product/:id" element={
            <ProductDetailWrapper onAddToCart={this.handleAddToCart} />
          } />
          <Route path="/favorites" element={
            <Favorites favoriteItems={favoriteItems} updateFavorites={this.updateFavorites} />
          } />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={this.handleRemoveFromCart} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;










