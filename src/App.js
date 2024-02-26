import React, { useState, useEffect } from 'react';
import './App.css';
import Category from './components/Category';
import { getcategories,getproducts } from './fetch';
import Categoryproducts from './components/categoryproducts';

function App() {
  const [categories, setcategories] = useState({erromesaage: '', data: []});
  const [products, setproducts] = useState({erromesaage: '', data: []});
  
  useEffect(() => {
    const fetchData = async () => {
        const responseobject = await getcategories();
        setcategories(responseobject);
    };
    fetchData();
  }, []);


  const handlecategoryclick = id => {
  const fetchData = async () => {
    const responseobject = await getproducts(id);
    setproducts(responseobject);
    };
  fetchData();
  }


  const renderCategories = () => {
    return categories.data.map(c => 
      <Category key={c.id} id={c.id} title={c.title} oncategoryclick={() => handlecategoryclick(c.id)} />
    );
  }
  const renderproducts = () => {
    return products.data.map(p => 
      <Categoryproducts {...p}>
       
      </Categoryproducts>
    );
  }
  
  return (
    <>
      <header>My store</header>
      <section>
        <nav>
          { categories.erromesaage && <div>Error: {categories.erromesaage}</div>}
          {categories.data && renderCategories()}
        </nav>
        <main>
          <h1>products</h1>
          { products.erromesaage && <div>Error: {products.erromesaage}</div>}
          {products && renderproducts()}
        </main>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
