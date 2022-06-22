import React,{useState, useEffect} from 'react';
import {commerce} from './lib/commerce';

import {Products, Navbar} from './components'

const App = () => {
  const [products, setProducts] = useState([]);

  const fecthProducts = async()=>{
    const{data}  = await commerce.products.list();

    setProducts(data);
  }

  useEffect(()=>{
    fecthProducts();
  },[]);

  console.log(products)
  return (
    <div>
        <Navbar></Navbar>
        <Products products={products}/>
    </div>
  )
}

export default App