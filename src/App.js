import './App.css';
import Navbar from './components/navbar/index';
import Products from './components/products/Products';
import Promotion from './components/promotion/Promotion';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Promotion />
      <Products />
    </div>
  );
}

export default App;
