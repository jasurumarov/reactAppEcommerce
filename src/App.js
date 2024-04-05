import Category from "./components/categorySection/Category";
import HeaderBottom from "./components/headerBottom/HeaderBottom";
import HeaderTop from "./components/headerTop/HeaderTop";
import Hero from "./components/heroSection/Hero";
import Products from "./components/productsSection/Products";
import "./scss/style.scss"

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <HeaderBottom/>
      <Hero/>
      <Category/>
      <Products/>
    </div>
  );
}

export default App;