import React, { useState, useEffect } from 'react';
import './App.css';
import Category from './components/Category';

function App() {
  const [categories, setcategories] = useState([]);
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setcategories(data);
      })
  }, [])


const handlecategoryclick = id => {
  fetch("http://localhost:3001/products?catId="+id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setproducts(data);
      })
}


  const renderCategories = () => {
    return categories.map(c => 
      <Category key={c.id} id={c.id} title={c.title} oncategoryclick={() => handlecategoryclick(c.id)} />
    );
  }
  const renderproducts = () => {
    return products.map(p => 
      <div>{p.title}</div>
      )
  }

  return (
    <>
      <header>My store</header>
      <section>
        <nav>
          {categories && renderCategories()}
        </nav>
        <article>
          <h1>products</h1>
          {products && renderproducts()}
        </article>
      </section>

      <footer>
        footer
      </footer>
    </>
  );
}

export default App;
