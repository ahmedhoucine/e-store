import React from 'react';

const categoryproducts = ({ title, image, specs, features, price, stock }) => {
  return (
    <div>
      <article>
        <div className='category-product-title'>{title}</div>
        <figure>
          <div className='category-product-image-container'>
            <img src={`./assets/${image}`} alt={title} />
          </div>
        </figure>
        <aside>
          <div className='category-product-info-dimansions'>
            <h3>Dimensions</h3>
            <label>{specs.dimensions}</label>
          </div>
          {specs.capacity && (
            <div className='category-product-info-capacity'>
              <h3>Capacity</h3>
              <label>{specs.capacity}</label>
            </div>
          )}
          <div className='category-product-info-features'>
            <h3>Features</h3>
            <ul>
              {features &&
                features.map((f, index) => {
                  return <li key={index}>{f}</li>;
                })}
            </ul>
          </div>
        </aside>
        <aside className='category-product-finance'>
          <div className='category-product-finance-price'>
            &pound;{price}
          </div>
          <div className='category-product-info-stock'>
            <label>Stock Level: {stock}</label>
            <br></br>
            <label>FREE Delivery</label>
          </div>
          <div className='category-product-action'>
            <button>view product</button>
            <button>add to basket</button>
          </div>
        </aside>
      </article>
    </div>
  );
};

export default categoryproducts;
